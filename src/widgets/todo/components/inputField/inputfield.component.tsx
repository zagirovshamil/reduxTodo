import React from "react";

interface InputFieldProps {
  addTodo: () => void;
  text: string;
  setText: (str: string) => void;
  buttonText: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  addTodo,
  text,
  setText,
  buttonText,
}) => {
  return (
    <label>
      <input
        placeholder="Новая задача"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="container__input"
      />
      <button className="container__button" onClick={addTodo}>
        {buttonText}
      </button>
    </label>
  );
};
