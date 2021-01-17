import { ForgoComponent, ForgoElementProps, rerender } from "forgo";

import { ProfileDetails, ProfileTimeline } from "./profile";
import { TodoList } from "./todos";

import Suspense from "./Suspense";

interface AppProps extends ForgoElementProps {}

function App(props: AppProps): ForgoComponent<AppProps> {
  return {
    render(props, args) {
      return (
        <div>
          <Suspense fallback="loading (a, b)">
            <TodoList label="a" />
            <TodoList label="b" />
          </Suspense>

          <Suspense fallback={<h1>Loading profile...</h1>}>
            <ProfileDetails />
            <Suspense fallback={<h1>Loading posts...</h1>}>
              <ProfileTimeline />
            </Suspense>
          </Suspense>
        </div>
      );
    },
  };
}

export default App;
