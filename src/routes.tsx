import { Route } from "react-router-dom";

import Layout from "./Components/Layout";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Projects, { loader as projectsLoader } from "./Pages/Projects";
import Skills from "./Pages/Skills";
import ErrorPage from "./Pages/Error";

export default (
    <>
        <Route path="portfolio" element={<Layout />}>
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
                loader={projectsLoader} />
                
            <Route
                path="connect"
                element={<Contact />}
            />

        </Route>
        <Route path="*" element={<NotFound />} />
    </>
)