import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage";

export const routers = createBrowserRouter([
    {
        path: "/", // Əsas yol (root route)
        element: <HomePage />,
    }
]);
