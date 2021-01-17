import { ForgoComponent, ForgoElementProps, rerender } from "forgo";

/*
  The main Todo List component
*/
interface TodoListProps extends ForgoElementProps {
  label: string;
}

export function TodoList(props: TodoListProps): ForgoComponent<TodoListProps> {
  let todos: string[] = [];
  let c = 0;

  return {
    render(props, args) {
      function onTodoAdd(text: string) {
        todos.push(text);
        rerender(args.element);
      }

      return (
        <div>
          <h1>Forgo Todos {props.label}</h1>
          <ul>
            {todos.map((t) => (
              <TodoListItem text={t} />
            ))}
          </ul>
          <AddTodo onAdd={onTodoAdd} />
        </div>
      );
    },
  };
}

/*
  Display a Todo list item
*/
interface TodoListItemProps extends ForgoElementProps {
  text: string;
}

export function TodoListItem(
  props: TodoListItemProps
): ForgoComponent<TodoListItemProps> {
  return {
    render(props) {
      return <li>{props.text}</li>;
    },
  };
}

/*
  Add a Todo Box
*/
type AddTodoProps = {
  onAdd: (text: string) => void;
};

function AddTodo(props: AddTodoProps) {
  const input: { value?: HTMLInputElement } = {};

  function saveTodo() {
    const inputEl = input.value;
    if (inputEl) {
      props.onAdd(inputEl.value);
      inputEl.value = "";
      inputEl.focus();
    }
  }

  // Add the todo when enter is pressed
  function onKeyPress(e: KeyboardEvent) {
    if (e.key === "Enter") {
      saveTodo();
    }
  }

  return {
    render() {
      return (
        <div>
          <input onkeypress={onKeyPress} type="text" ref={input} />
          <button onclick={saveTodo}>Add me!</button>
        </div>
      );
    },
  };
}
