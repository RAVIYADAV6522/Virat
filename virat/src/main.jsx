import React from "react"; // Use default import for React
import ReactDOM from "react-dom/client"; // Use 'client' for React 18
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestroPage from "./RestaurantsPage/RestroPage";
import Login from "./LoginPage/Login"

// Import your App component
import App from './App'; // Make sure this path is correct

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Your App component should be here
  },
  {
    path:'/Restaurants',
    element:<RestroPage></RestroPage>
  },
  {
    path:'/signup-login',
    element:<Login></Login>
  }
]);

// Ensure there's a div with id="root" in your HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
