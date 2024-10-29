import { useState } from "react";
import { useAppDispatch } from "../../app/store/hook";
import "./todo.modules.css";
import { TodoList, InputField } from "./index";
import { addTodo } from "../../app/store/todoSlice";

export const TodoPage = () => {
  const [text, setText] = useState<string>("");

  const dispatch = useAppDispatch();
  const addTask = (): void => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <main className="container__todo-main">
      <h1 style={{ color: "black" }}>TODO</h1>
      <InputField addTodo={addTask} text={text} setText={setText} />
      <TodoList />
    </main>
  );
};
