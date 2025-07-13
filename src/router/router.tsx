import App from "@/App";
import NewsCreate from "@/pages/news/NewsCreate";
import NewsEdit from "@/pages/news/NewsEdit";
import News from "@/pages/news/NewsList";
import NotFound from "@/pages/notFound";
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
      {
        path: "/news/create",
        element: <NewsCreate />,
      },
      {
        path: "/news/:id/edit",
        element: <NewsEdit />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
