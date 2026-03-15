import clsx from "clsx";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import BG from "@/assets/images/main-bg.webp";
import { Z_INDEX } from "@/constants/zIndex";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const RootLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

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

      {/* tablet 초과: 일반 사이드바 */}
      <div className="block max-tablet:hidden">
        <Sidebar />
      </div>

      {/* tablet 이하: overlay 사이드바 */}
      <div className="hidden max-tablet:block">
        {isSidebarOpen && (
          <button
            type="button"
            className="fixed inset-0 cursor-default"
            style={{ zIndex: Z_INDEX.SIDEBAR_BACKDROP }}
            aria-label="사이드바 닫기"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <div
          className="fixed left-0 top-0 h-screen"
          style={{ zIndex: isSidebarOpen ? Z_INDEX.SIDEBAR_OPEN : Z_INDEX.SIDEBAR_CLOSED }}
        >
          <Sidebar
            isMobileOverlay={true}
            isSidebarOpen={isSidebarOpen}
            onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 max-tablet:ml-17.5 max-mobile:ml-0">
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
