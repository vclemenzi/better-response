# Better Response
Better Response is a lightweight wrapper around the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response) class of Javascript

## Features

### Automatic JSON stringify

Better response automatically converts the objects to JSON by also adding the correct headers.

```js
// With Better Reponse
new BetterResponse({ hello: "word" }) 

// With Response
new Response(JSON.stringify({ hello: "world" }))
```

### Cache Control
Better response helps you manage caching times.

```js
// Defualt Value
new BetterResponse("cache is amazing!", { status: 200, cache: "default" });

// Date
new BetterResponse("cache is amazing!", { status: 200, cache: 1000 * 60 });
```
