import { createBrowserRouter } from "react-router-dom";

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
        path: "/chat/:chatId",
        element: <ChatPage />,
      },
    ],
  },
]);

export default router;
