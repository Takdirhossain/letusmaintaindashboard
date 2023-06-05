import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AdminDashboard from "./componenets/AdminDashboard";
import Loginadmin from "./componenets/loginadmin";
import Passwords from "./componenets/passwords";
import Partner from "./routes/Partner";
import ChatForm from "./routes/message";
function App() {
  const router = createBrowserRouter([
    {path: "/", element:<Loginadmin/>},
    {path: "/admindashboard", element:<AdminDashboard/>},

    {path: "/passwords", element: <Passwords/>},
    {path: "/partner", element: <Partner/>},
    {path: "/Message", element: <ChatForm/>},

  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
