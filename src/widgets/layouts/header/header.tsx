import { Flex } from "antd";
import { Link } from "./components/link/";
import { Header } from "antd/es/layout/layout";
import "./header.modules.scss";

export const HeaderWidget = () => {
  return (
    <Flex
      className="header__container"
      gap={"large"}
      vertical={false}
      align={"center"}
      justify={"center"}
    >
      <Header className="header__container--allLinks">
        <Link link={"/"} text={"Главная"} />
        <Link link={"/todo"} text={"Cписок дел"} />
        <Link link={"/blog"} text={"Блог"} />
      </Header>
    </Flex>
  );
};
