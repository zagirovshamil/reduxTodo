import { TodoItem } from "../index";
import { useAppSelector } from "../../../app/store/hook";

export const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.list);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
