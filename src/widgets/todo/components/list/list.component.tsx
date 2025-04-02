import { useAppSelector } from "../../../../app/store/hook";
import { Todo } from "../../../../app/store/todoSlice";
import { TodoItem } from "../item";
import "./list.modules.scss";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list as Todo[]);
  return (
    <ul className="todo-lists">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
