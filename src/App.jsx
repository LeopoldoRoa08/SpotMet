
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);

  return (
    <RouterProvider router={router}/>

   
  )
}

export default App
