import BetterResponse from "../src";

// BetterResponse support security headers
// (securityHeaders are automatically set by default)

console.log(
  new BetterResponse({ hello: "world" }, { securityHeaders: true }),
);
