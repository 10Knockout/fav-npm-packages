import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Master() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Master;
