import BetterResponse from "../src";

console.log(
  new BetterResponse("hello", { status: 200 }),
  new Response("hello", { status: 200 }),
  new BetterResponse({ hello: "world" }, { status: 200 }),
  new Response(JSON.stringify({ hello: "world" }), { status: 200 }),

  "---",

  new BetterResponse({ hello: "world" }, { status: 200, cache: "no-store" }),
  new BetterResponse({ hello: "world" }, { status: 200, cache: new Date(Date.now() + 1000 * 60) }),
);
