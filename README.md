# Better Response

`BetterResponse` is a lightweight wrapper around the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) class in JavaScript, designed to simplify response creation and enhance control over caching and JSON serialization.

## Installation

To use `BetterResponse`, simply include it in your project. You can install it via npm:

```bash
npm install better-response
```

Here's a quick example of how to import `BetterResponse` in your project:

```js
import BetterResponse from "better-response";
```

## Features

### Automatic JSON Stringify

`BetterResponse` automatically converts objects to JSON and sets the appropriate headers, streamlining the process of creating JSON responses.

```js
// Using BetterResponse
new BetterResponse({ hello: "world" });

// Using Response
new Response(JSON.stringify({ hello: "world" }), {
  headers: { "Content-Type": "application/json" }
});
```

### Cache Control

`BetterResponse` provides convenient caching options to manage response caching times.

```js
// Default Caching
new BetterResponse("Cache is amazing!", { status: 200, cache: "default" });

// Custom Cache Duration (in milliseconds)
new BetterResponse("Cache is amazing!", { status: 200, cache: 1000 * 60 }); // Cache for 1 minute
```

## License

`BetterResponse` is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
