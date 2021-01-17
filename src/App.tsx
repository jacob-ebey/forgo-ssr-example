import { ForgoComponent, ForgoElementProps, rerender } from "forgo";

import { TodoList } from "./todos";

import Suspense from "./Suspense";

interface AppProps extends ForgoElementProps {}

function App(props: AppProps): ForgoComponent<AppProps> {
  return {
    render(props, args) {
      return (
        <div>
          <Suspense fallback="loading (a, b)">
            <TodoList label="a" timeout={2000} />
            <TodoList label="b" timeout={1000} />
          </Suspense>

          <Suspense fallback="(c, d)">
            <TodoList label="c" timeout={500} />
            <TodoList label="d" timeout={0} />
          </Suspense>
        </div>
      );
    },
  };
}

export default App;
