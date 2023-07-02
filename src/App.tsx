import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"

import routes from "./routes";

const router = createBrowserRouter(createRoutesFromElements(routes))

export default () => <RouterProvider router={router} />
