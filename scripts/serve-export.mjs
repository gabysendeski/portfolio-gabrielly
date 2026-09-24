import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, resolve, relative, isAbsolute } from "node:path";

// Local preview of the production export, independent of Next's development lock.
const root = resolve("out");
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

await stat(resolve(root, "index.html"));
const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    if (
      basePath &&
      pathname !== basePath &&
      !pathname.startsWith(`${basePath}/`)
    ) {
      response.writeHead(404).end();
      return;
    }
    const route = pathname.slice(basePath.length) || "/";
    let file = resolve(root, `.${route}`);
    const withinRoot = relative(root, file);
    if (withinRoot.startsWith("..") || isAbsolute(withinRoot)) {
      response.writeHead(403).end();
      return;
    }
    if (route.endsWith("/")) file = resolve(file, "index.html");
    else if (!extname(file)) file += ".html";
    const body = await readFile(file);
    response.writeHead(200, {
      "Content-Type": mime[extname(file)] || "application/octet-stream",
    });
    response.end(request.method === "HEAD" ? undefined : body);
  } catch {
    response.writeHead(404).end("Not found");
  }
});

server.listen(3100, "127.0.0.1", () => {
  console.log(`Production preview: http://127.0.0.1:3100${basePath}/`);
});
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => server.close(() => process.exit(0)));
}
