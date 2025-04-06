import { useAppDispatch, useAppSelector } from "../../../../app/store/hook";
import { removeTodo, toggleTodo } from "../../../../app/store/todoSlice";
import { Checkbox, message, Popconfirm, PopconfirmProps } from "antd";
import "./item.modules.scss";
import { DeleteOutlined } from "@ant-design/icons";

interface TodoItemProps {
  id: string;
  title: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const completed = useAppSelector(
    (state) =>
      state.todos.list.find((todo: boolean) => todo?.id === id)?.completed
  );

  const handleChange = () => {
    dispatch(toggleTodo(id));
  };

  const deleteTask: PopconfirmProps["onConfirm"] = () => {
    if (completed) {
      dispatch(removeTodo(id));
      message.success("Задача удалена!");
    } else {
      message.error("Завершите задачу перед удалением!");
    }
  };

  const cancel: PopconfirmProps["onCancel"] = () => {
    message.error("Удаление задачи отменено!");
  };

  return (
    <li className="container__item" key={id}>
      <Checkbox checked={completed} onChange={handleChange} />
      <span
        className={
          completed ? "container__item-text-line" : "container__item-text"
        }
      >
        {title}
      </span>
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
