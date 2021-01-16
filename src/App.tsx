import { ForgoComponent, ForgoElementProps, rerender } from "forgo";

import { TodoList } from "./todos";

interface AppProps extends ForgoElementProps {}

function App(props: AppProps): ForgoComponent<AppProps> {
  return {
    render(props, args) {
      return <TodoList />;
    },
  };
}

export default App;
