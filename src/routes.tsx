import { Route } from "react-router-dom";

import Layout from "./components/Layout";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ErrorPage from "./pages/Error";

export default (
    <>
        <Route path="" element={<Layout />}>
            <Route index element={<Home />} />
            
            <Route
                path="about"
                element={<About />}
            />

            <Route
                path="skills"
                element={<Skills />}
            />

            <Route
                path="projects"
                element={<Projects />}
                errorElement={<ErrorPage />}
                 />

            <Route
                path="connect"
                element={<Contact />}
            />

            <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </>
)