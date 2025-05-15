import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout.jsx";
import Login from "./pages/Login.jsx";
import Registration from "./pages/Registration.jsx";
import Home from "./pages/Home.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./privateRoutes/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: '/profile',
        element: <ProtectedRoute> <Profile/></ProtectedRoute>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
