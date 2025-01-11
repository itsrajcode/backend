import { serve } from "bun";

serve({
  fetch(req) {
    const url = new URL(req.url);
    const path = url.pathname;

    if (path === "/") {
      return new Response("Hello World");
    } else if (path === "/raj") {
      return new Response("Raj is here");
    } else {
      return new Response("Not Found");
    }
  },
  port: 3000,
  hostname: "127.0.0.1",
});
