import { NavLink } from "react-router-dom";
import "./link.modules.scss";

interface CustomLinkProps {
  link: string;
  text: string;
}

export const Link: React.FC<CustomLinkProps> = ({ link, text }) => {
  return (
    <NavLink className="container__header--link" to={link}>
      {text}
    </NavLink>
  );
};
