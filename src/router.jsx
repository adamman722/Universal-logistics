import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BaseInfo from "./components/BaseInfo";
import DataDashboard from "./components/DataDashboard";
import GlobalLogisticsTrends from "./components/GlobalLogisticsTrends";
import SendEmail from "./components/SendEmail";
import LandingPage from "./LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    children: [
      { path: "/", element: <BaseInfo /> },
      { path: "/Send Email", element: <SendEmail /> },
      { path: "/Tracking", element: <DataDashboard /> },
      { path: "/Global Logistics", element: <GlobalLogisticsTrends /> },
    ],
  },
]);
