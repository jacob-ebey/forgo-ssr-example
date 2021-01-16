import * as fs from "fs";
import * as path from "path";
import * as http from "http";

import { renderToString } from "forgo-render-to-string";

import App from "./App";

const requestListener = (
  req: http.IncomingMessage,
  res: http.ServerResponse
) => {
  if (req.url === "/") {
    res.writeHead(200);
    const html = renderToString(<App />, { pretty: true });

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
