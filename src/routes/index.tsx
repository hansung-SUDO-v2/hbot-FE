import { createBrowserRouter } from "react-router-dom";

import QueryBoundary from "../components/boundary/QueryBoundary";
import RootLayout from "../layouts/RootLayout";
import ChatPage from "../pages/chatPage/ChatPage";
import MainPage from "../pages/mainPage/MainPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/chat",
        element: (
          <QueryBoundary>
            <ChatPage />
          </QueryBoundary>
        ),
      },
      {
        path: "/chat/:chatId",
        element: (
          <QueryBoundary>
            <ChatPage />
          </QueryBoundary>
        ),
      },
    ],
  },
]);

export default router;
