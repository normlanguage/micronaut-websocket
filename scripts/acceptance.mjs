import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { once } from 'node:events';
import { resolve } from 'node:path';

const cli = process.env.NORM_CLI ?? 'norm';
const script = process.platform === 'win32' && /\.(bat|cmd)$/i.test(cli);
const entry = resolve(import.meta.dirname, '../examples/acceptance/sample/socket/Server.norm');
const child = spawn(script ? process.env.ComSpec : cli,
  script ? ['/d', '/c', 'call', cli, entry] : [entry], { windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'] });
let diagnostics = '';
const ready = new Promise((accept, reject) => {
  const timer = setTimeout(() => reject(new Error('Server timeout: ' + diagnostics)), 240000);
  child.on('error', error => { clearTimeout(timer); reject(error); });
  child.on('exit', code => { clearTimeout(timer); reject(new Error('Server exited ' + code + ': ' + diagnostics)); });
  child.stderr.on('data', data => { diagnostics += data; });
  let output = '';
  child.stdout.on('data', data => {
    output += data;
    diagnostics += data;
    const match = output.match(/http:\/\/[^\s]+(?=\r?\n)/);
    if (match) { clearTimeout(timer); accept(match[0]); }
  });
});
try {
  const address = await ready;
  const socket = new WebSocket(address.replace('http:', 'ws:') + '/echo');
  try {
    const reply = await new Promise((accept, reject) => {
      const timer = setTimeout(() => reject(new Error('WebSocket timeout')), 10000);
      socket.addEventListener('open', () => socket.send('Norm'));
      socket.addEventListener('error', () => { clearTimeout(timer); reject(new Error('WebSocket failed')); });
      socket.addEventListener('message', event => { clearTimeout(timer); accept(event.data); });
    });
    assert.equal(reply, 'echo:Norm');
  } finally { socket.close(); }
  console.log('socket passed');
} finally {
  if (child.pid && child.exitCode === null) {
    const exited = once(child, 'exit');
    if (process.platform === 'win32') spawnSync('taskkill.exe', ['/pid', String(child.pid), '/t', '/f'], { windowsHide: true, stdio: 'ignore' });
    else child.kill();
    await exited;
  }
}
