# micronaut.websocket Skill

Use this skill to work with Norm module `micronaut.websocket` version 3. Use only declarations listed below.

## `micronaut.websocket`

Source: `CloseReason.norm`

### `CloseReason`

```norm
class CloseReason
```

#### `CloseReason`

```norm
CloseReason(__JarBindingToken token)
```

Parameters:

- `token`: `__JarBindingToken`

## `micronaut.websocket`

Source: `WebSocketSession.norm`

### `WebSocketSession`

```norm
interface WebSocketSession extends MutableConvertibleValues<Any>, AutoCloseable
```

#### `close`

```norm
Void close()
```

Returns: `Void`

#### `close`

```norm
Void close(CloseReason? arg0)
```

Parameters:

- `arg0`: `CloseReason?`

Returns: `Void`

#### `getId`

```norm
String? getId()
```

Returns: `String?`

#### `isOpen`

```norm
Boolean isOpen()
```

Returns: `Boolean`

#### `isSecure`

```norm
Boolean isSecure()
```

Returns: `Boolean`

#### `isWritable`

```norm
Boolean isWritable()
```

Returns: `Boolean`

#### `sendAsync`

```norm
CompletableFuture<T>? sendAsync<T>(T? arg0)
```

Type parameters:

- `T`

Parameters:

- `arg0`: `T?`

Returns: `CompletableFuture<T>?`

#### `sendSync`

```norm
Void sendSync(Any? arg0)
```

Parameters:

- `arg0`: `Any?`

Returns: `Void`

## `micronaut.websocket`

Source: `WebSocketVersion.norm`

### `WebSocketVersion`

```norm
enum WebSocketVersion
```

#### `V00`

```norm
V00
```

#### `V07`

```norm
V07
```

#### `V08`

```norm
V08
```

#### `V13`

```norm
V13
```

## `micronaut.websocket.annotation`

Source: `annotation/ClientWebSocket.norm`

### `ClientWebSocket`

```norm
annotation ClientWebSocket implements TypeTarget, RuntimeRetention, ManagedImplementation
```

#### `subprotocol`

```norm
String subprotocol
```

Type: `String`

#### `uri`

```norm
String uri
```

Type: `String`

#### `value`

```norm
String value
```

Type: `String`

#### `version`

```norm
WebSocketVersion version
```

Type: `WebSocketVersion`

#### `ClientWebSocket`

```norm
ClientWebSocket(String? subprotocol, String? uri, String? value, WebSocketVersion? version)
```

Parameters:

- `subprotocol`: `String?`
- `uri`: `String?`
- `value`: `String?`
- `version`: `WebSocketVersion?`

## `micronaut.websocket.annotation`

Source: `annotation/OnClose.norm`

### `OnClose`

```norm
annotation OnClose implements FunctionTarget, RuntimeRetention, InheritedAnnotation
```

## `micronaut.websocket.annotation`

Source: `annotation/OnError.norm`

### `OnError`

```norm
annotation OnError implements FunctionTarget, RuntimeRetention, InheritedAnnotation
```

## `micronaut.websocket.annotation`

Source: `annotation/OnMessage.norm`

### `OnMessage`

```norm
annotation OnMessage implements FunctionTarget, RuntimeRetention, InheritedAnnotation
```

#### `maxPayloadLength`

```norm
Integer maxPayloadLength
```

Type: `Integer`

#### `OnMessage`

```norm
OnMessage(Integer? maxPayloadLength)
```

Parameters:

- `maxPayloadLength`: `Integer?`

## `micronaut.websocket.annotation`

Source: `annotation/OnOpen.norm`

### `OnOpen`

```norm
annotation OnOpen implements FunctionTarget, RuntimeRetention, InheritedAnnotation
```

## `micronaut.websocket.annotation`

Source: `annotation/ServerWebSocket.norm`

### `ServerWebSocket`

```norm
annotation ServerWebSocket implements TypeTarget, RuntimeRetention
```

#### `subprotocols`

```norm
String subprotocols
```

Type: `String`

#### `uri`

```norm
String uri
```

Type: `String`

#### `value`

```norm
String value
```

Type: `String`

#### `version`

```norm
WebSocketVersion version
```

Type: `WebSocketVersion`

#### `ServerWebSocket`

```norm
ServerWebSocket(String? subprotocols, String? uri, String? value, WebSocketVersion? version)
```

Parameters:

- `subprotocols`: `String?`
- `uri`: `String?`
- `value`: `String?`
- `version`: `WebSocketVersion?`

## `micronaut.websocket.io.micronaut.core.convert`

Source: `io/micronaut/core/convert/ConversionServiceProvider.norm`

### `ConversionServiceProvider`

```norm
interface ConversionServiceProvider
```

## `micronaut.websocket.io.micronaut.core.convert.value`

Source: `io/micronaut/core/convert/value/ConvertibleValues.norm`

### `ConvertibleValues`

```norm
interface ConvertibleValues<V> extends ValueResolver<CharSequence>, Iterable<Map_Entry<String, V>>, ConversionServiceProvider
```

Type parameters:

- `V`

## `micronaut.websocket.io.micronaut.core.convert.value`

Source: `io/micronaut/core/convert/value/MutableConvertibleValues.norm`

### `MutableConvertibleValues`

```norm
interface MutableConvertibleValues<V> extends ConvertibleValues<V>
```

Type parameters:

- `V`

## `micronaut.websocket.io.micronaut.core.value`

Source: `io/micronaut/core/value/ValueResolver.norm`

### `ValueResolver`

```norm
interface ValueResolver<K extends CharSequence>
```

Type parameters:

- `K` extends `CharSequence`

