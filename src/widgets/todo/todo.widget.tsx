import { useState } from "react";
import { TodoList, InputField } from "./index";
import { addTodo } from "../../app/store/todoSlice";
import { useAppDispatch } from "../../app/store/hook";
import "./todo.modules.scss";

export const TodoWidget = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const addTask = (): void => {
    if (text == "") return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <main className="container__todo-main">
      <h1>Список дел</h1>

      <InputField
        addTodo={addTask}
        text={text}
        setText={setText}
        buttonText="Добавить задачу"
      />
      <TodoList />
    </main>
  );
};
