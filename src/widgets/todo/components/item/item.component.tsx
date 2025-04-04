import { useState } from "react";
import { useAppDispatch } from "../../../../app/store/hook";
import { removeTodo } from "../../../../app/store/todoSlice";
import { Checkbox, message, Popconfirm, PopconfirmProps } from "antd";
import "./item.modules.scss";
import { DeleteOutlined } from "@ant-design/icons";

interface TodoItemProps {
  id: string;
  title: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const [checked, setChecked] = useState(Boolean);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const deleteTask: PopconfirmProps["onConfirm"] = () => {
    dispatch(removeTodo(id));
    message.success("Task deleted successfully!");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    message.error("Click on No");
  };

  return (
    <li className="container__item" key={id}>
      <Checkbox onChange={(event) => handleChange(event)} />
      <span className={checked ? "line" : ""}>{title}</span>
      <Popconfirm
        title="Удалить задачу?"
        description="Действительно хотите удалить задачу?"
        onConfirm={deleteTask}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <DeleteOutlined />
      </Popconfirm>
    </li>
  );
};
