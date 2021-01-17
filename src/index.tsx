import { render } from "forgo";

import App from "./App";

const { node } = render(<App />);

document.body.firstElementChild!.replaceWith(node);
