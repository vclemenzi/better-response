import BetterResponse from "../src";

// BetterResponse gives more information

const resp = new BetterResponse("", { status: 400 });

// .error lets you know if the status is error
console.log(resp.error);
