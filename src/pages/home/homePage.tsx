import { Outlet } from "react-router-dom";
import { FooterPage, HeaderPage } from "..";
import "./home.modules.scss";

export const HomePage = () => {
  return (
    <>
      <HeaderPage />
      <div className="container">
        <Outlet />
      </div>
      <FooterPage />
    </>
  );
};
