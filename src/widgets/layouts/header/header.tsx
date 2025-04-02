import { Flex } from "antd";
import { Link } from "./components/link/";
import { Header } from "antd/es/layout/layout";

const headerStyle = {
  background: "#ffffff",
};

export const HeaderWidget = () => {
  return (
    <Flex gap={"large"} vertical={false} align={"center"} justify={"center"}>
      <Header style={headerStyle}>
        <Link link={"/"} text={"Главная"} />
        <Link link={"/todo"} text={"Cписок дел"} />
        <Link link={"/blog"} text={"Блог"} />
      </Header>
    </Flex>
  );
};
