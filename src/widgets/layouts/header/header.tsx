import { Link } from "react-router-dom";
import "./header.modules.css";

export const Header = () => {
  return (
    <header>
      <Link to="/">Переход на главную</Link>;
      <Link to="/todo">Переход на страницу Todo</Link>;
      <Link to="/blog">Переход на страницу Blog</Link>;
    </header>
  );
};
