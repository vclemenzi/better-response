import BetterResponse from "../src";

// BetterResponse support cache control out of the box

console.log(
  // Cache-Control: no-store
  new BetterResponse("cache is amazing!", { status: 200, cache: "default" }),

  // Or you can set a Date object
  new BetterResponse("cache is amazing!", { status: 200, cache: 1000 * 60 }),
);
