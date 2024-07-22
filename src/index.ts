interface CustomResponseInit extends ResponseInit {
  securityHeaders?: boolean;
  cache?: "default" | "no-store" | "reload" | "no-cache" | "force-cache" | "only-if-cached" | number;
}

class BetterResponse extends Response {
  constructor(body: BodyInit | object, init?: CustomResponseInit) {
    const headers = new Headers(init?.headers);

    init = { ...init };

    // Automatic JSON serialization
    if (typeof body === "object") {
      headers.set("Content-Type", "application/json");
      body = JSON.stringify(body);
    }

    // Insert security headers
    if ((init.securityHeaders === undefined) || init.securityHeaders) {
      headers.set("X-DNS-Prefetch-Control", "off");
      headers.set("Expect-CT", "max-age=0");
      headers.set("X-Frame-Options", "SAMEORIGIN");
      headers.set("Strict-Transport-Security", "max-age=15552000; includeSubDomains");
      headers.set("X-Content-Type-Options", "nosniff");
      headers.set("X-Permitted-Cross-Domain-Policies", "none");
      headers.set("Referrer-Policy", "no-referrer");
      headers.set("X-XSS-Protection", "0");
    }

    if (init.cache) {
      if (typeof init.cache === "number") {
        headers.set("Cache-Control", `max-age=${Math.floor(new Date(Date.now() + init.cache).getTime() / 1000)}`);
      } else {
        headers.set("Cache-Control", init.cache);
      }
    }

    init.headers = headers;
    super(body, init);
  }


  // Additional Values
  error: boolean = this.status >= 400;
};


export default BetterResponse;
