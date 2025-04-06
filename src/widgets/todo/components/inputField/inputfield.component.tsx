import { Button, Input } from "antd";
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
      <Input
        variant="outlined"
        placeholder="Новая задача"
        value={text}
        onChange={(e) => setText(e.target.value)}
        size="middle"
      />
      <Button color="pink" variant="solid" onClick={addTodo}>
        {buttonText}
      </Button>
    </label>
  );
};
