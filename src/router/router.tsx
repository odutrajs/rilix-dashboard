import App from "@/App";
import NewsPage from "@/modules/news";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/news",
        element: <NewsPage />,
      },
    ],
  },
]);
