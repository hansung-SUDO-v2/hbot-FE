import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import BG from "@assets/images/main-bg.webp";

import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="relative flex w-full h-screen overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-10 w-full h-full"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* 좌: 사이드바 */}
      <Sidebar />

      <div className="flex flex-col flex-1">
        {/* 상: 헤더 */}
        <Header />

        {/* 메인 콘텐츠 */}
        <main className="flex-1 overflow-auto bg-transparent">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
