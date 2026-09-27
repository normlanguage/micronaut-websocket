# Micronaut WebSocket 示例

[English](README.md) | [简体中文](README.zh-CN.md)

[hello.norm](hello.norm) 是单文件消费者，在 `127.0.0.1:18769` 提供 `/sample/echo`。`@OnMessage` 处理器异步回复。[verify.mjs](verify.mjs) 使用 Node.js 24 或更新版本建立真实 WebSocket，发送 `Norm` 并断言回复为 `echo:Norm`。

在仓库根目录启动服务：

```sh
norm run samples/hello.norm
```

在另一终端运行：

```sh
node samples/verify.mjs
```

预期输出：`echo:Norm`。按 Ctrl+C 停止服务。现有[验收项目](../examples/acceptance/sample/socket/)和[测试脚本](../scripts/acceptance.mjs)继续作为独立的集成证据。
