import { hydrate } from "forgo";

import App from "./App";

const vnode = <App />;

hydrate(vnode, document.body, {
  root: document.body.firstElementChild as HTMLElement,
});
