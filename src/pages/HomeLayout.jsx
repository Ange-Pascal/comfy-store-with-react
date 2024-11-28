import { Outlet } from "react-router-dom"; 
import { Header, NavBar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header /> 
      <NavBar/>
      {/* class tailwind personnalisé */}
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};

export default HomeLayout;
