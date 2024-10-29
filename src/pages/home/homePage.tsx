import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../widgets/layouts";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
