import React from "react";

interface InputFieldProps {
  addTodo: () => void;
  text: string;
  setText: (str: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  addTodo,
  text,
  setText,
}) => {
  return (
    <label>
      <input
        placeholder="Новая задача"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add todo</button>
    </label>
  );
};
