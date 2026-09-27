# Micronaut WebSocket samples

[English](README.md) | [简体中文](README.zh-CN.md)

[hello.norm](hello.norm) is a single-file consumer that serves `/sample/echo` on `127.0.0.1:18769`. Its `@OnMessage` handler replies asynchronously. [verify.mjs](verify.mjs) opens a real WebSocket, sends `Norm`, and asserts the reply `echo:Norm` using Node.js 24 or newer.

From the repository root, start the server:

```sh
norm run samples/hello.norm
```

In another terminal:

```sh
node samples/verify.mjs
```

Expected output: `echo:Norm`. Stop the server with Ctrl+C. The existing [acceptance project](../examples/acceptance/sample/socket/) and [test script](../scripts/acceptance.mjs) remain independent integration evidence.
