import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements
} from "react-router-dom"

import Layout from "./Components/Layout";

import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Projects, {loader as projectsLoader} from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/Error";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="portfolio" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />} />
      <Route
        path="projects"
        element={<Projects />}
        errorElement={<ErrorPage />}
        loader={projectsLoader}
      />
      <Route path="connect" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default () => <RouterProvider router={router} />
