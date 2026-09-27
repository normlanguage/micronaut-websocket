import assert from 'node:assert/strict';

const socket = new WebSocket('ws://127.0.0.1:18769/sample/echo');
const reply = await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('WebSocket reply timed out')), 10000);
  socket.addEventListener('open', () => socket.send('Norm'));
  socket.addEventListener('message', event => {
    clearTimeout(timer);
    resolve(event.data);
  });
  socket.addEventListener('error', () => {
    clearTimeout(timer);
    reject(new Error('WebSocket connection failed'));
  });
});
socket.close();
assert.equal(reply, 'echo:Norm');
console.log(reply);
