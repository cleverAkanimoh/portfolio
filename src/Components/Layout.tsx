import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout() {
  const location = useLocation()
  const key = location.key

  return (
    <main className="bg-black text-gray">
      <NavBar />
      <section className="min-h-[95vh]">
        <Outlet />
      </section>
      <Footer />
    </main>
  );
}
