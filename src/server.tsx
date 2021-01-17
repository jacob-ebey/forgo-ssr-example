import * as fs from "fs";
import * as path from "path";
import * as http from "http";

import { renderToString } from "forgo-render-to-string";

import App from "./App";

const maxRetries = 1;

const requestListener = async (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  if (req.url === "/") {
    res.writeHead(200);
    let promises: Set<Promise<any>> = new Set();
    const onError = (err: any) => {
      if (err && err.then) {
        promises.add(err);
      }
    };

    let retry = 1;
    const app = <App />;
    let html = renderToString(app, { pretty: true, onError });

    while (promises.size > 0 && retry <= maxRetries) {
      console.log("RETRY", retry);
      console.log("PROMISES", promises);
      await Promise.all(Array.from(promises));
      retry++;
      promises = new Set();
      html = renderToString(app, { pretty: true, onError });
    }

    res.end(`<!DOCTYPE html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <title>Forgo SSR Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    ${html}
    <script src="main.js"></script>
  </body>
</html>
`);
    return;
  }

  fs.readFile(
    path.join(process.cwd(), "dist", req.url as string),
    function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      res.writeHead(200);
      res.end(data);
    }
  );
};

const server = http.createServer(requestListener);
server.listen(8080, () => console.log("App started on port 8080"));
