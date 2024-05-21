import "./App.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Teams from "./components/Teams";
import {
  BrowserRouter,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Dashboard />}></Route>)
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
