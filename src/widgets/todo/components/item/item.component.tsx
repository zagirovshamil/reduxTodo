import { useState } from "react";
import { useAppDispatch } from "../../../../app/store/hook";
import { removeTodo } from "../../../../app/store/todoSlice";
import { Checkbox } from "antd";
import "./item.modules.scss";

interface TodoItemProps {
  id: string;
  title: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(Boolean);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <li className="container__item" key={id}>
      <Checkbox onChange={(event) => handleChange(event)} />
      <span className={"container__item-deleteButton"}>{title}</span>
      <span
        className="container__item-deleteButton"
        onClick={() => dispatch(removeTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};
