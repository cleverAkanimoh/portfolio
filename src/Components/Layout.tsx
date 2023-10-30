import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout() {

  return (
    <main className="bg-black text-gray">
      <NavBar />
      <section className="min-h-[90vh]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
