import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements
} from "react-router-dom"

import routes from "./routes";

const router = createHashRouter(
  createRoutesFromElements(
    routes
  )
)

export default () => <RouterProvider router={router} />
