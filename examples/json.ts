import BetterResponse from "../src";

// BetterResponse support automatic JSON serialization
// (Content-Type: application/json is automatically set)

console.log(
  new BetterResponse({ hello: "world" }, { status: 200 }),
);
