import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"

import routes from "./routes";

const router = createBrowserRouter(createRoutesFromElements(routes))

const App = () => <RouterProvider router={router} />
export default App;