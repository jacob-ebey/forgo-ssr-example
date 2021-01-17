import { ForgoComponent, ForgoElementProps, ForgoNode, rerender } from "forgo";

interface SuspenseProps extends ForgoElementProps {
  fallback?: ForgoNode;
  errorFallback?: ForgoNode;
  state?: { promises: Promise<any>[] };
}

function Suspense(): ForgoComponent<SuspenseProps> {
  return {
    render(props) {
      return <div>{props.children}</div>;
    },
    error(props, { error, element }) {
      if (error && error.then) {
        if (props.state) {
          props.state.promises.push(error);
        } else {
          error.then(() => rerender(element));
        }

        return props.fallback || "";
      }

      // TODO: Figure out why ts doesn't like returning a string
      return props.errorFallback || ("Internal Error" as any);
    },
  };
}

export default Suspense;
