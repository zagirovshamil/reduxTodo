import { useAppDispatch } from "../../../app/store/hook";
import { removeTodo } from "../../../app/store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  return (
    <li key={id}>
      <input type="checkbox" />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(removeTodo(id))}>
        &times;
      </span>
    </li>
  );
};
