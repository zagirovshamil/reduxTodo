import { Outlet } from "react-router-dom";
import { FooterPage, HeaderPage } from "..";

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
