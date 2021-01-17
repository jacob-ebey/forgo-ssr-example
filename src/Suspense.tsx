import { ForgoComponent, ForgoElementProps, ForgoNode, rerender } from "forgo";

interface SuspenseProps extends ForgoElementProps {
  fallback?: ForgoNode;
}

function Suspense(props: SuspenseProps): ForgoComponent<SuspenseProps> {
  return {
    render(props, args) {
      return <div>{props.children}</div>;
    },
    error(props, { error, element }) {
      if (error && error.then) {
        error.then(() => rerender(element));
        return props.fallback || "";
      }

      return <p>Error :(</p>;
    },
  };
}

export default Suspense;
