import App from "@/App";
import News from "@/assets/pages/News";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
