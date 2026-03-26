import { useState } from "react";
import IcAdd from "@/assets/icons/layouts/add-icon.svg?react";
import IcHistory from "@/assets/icons/layouts/history-icon.svg?react";
import IcLess from "@/assets/icons/layouts/less-icon.svg?react";
import IcMenuBasic from "@/assets/icons/layouts/menu-basic-icon.svg?react";
import IcMenuOpen from "@/assets/icons/layouts/menu-open-icon.svg?react";
import IcMore from "@/assets/icons/layouts/more-icon.svg?react";
import IcProfile from "@/assets/icons/layouts/profile-icon.svg?react";
import IcSearch from "@/assets/icons/layouts/search-icon.svg?react";
import IcSetting from "@/assets/icons/layouts/settings-icon.svg?react";
import QueryBoundary from "@/components/boundary/QueryBoundary";
import IconButton from "@/components/button/IconButton";
import useNavigation from "@/hooks/useNavigation";
import ChatListContents from "./ChatListContents";
import SidebarItem from "./SidebarItem";
import { SidebarSkeleton } from "./SidebarSkeleton";

interface SidebarProps {
  isMobileOverlay?: boolean;
  isSidebarOpen?: boolean;
  onToggle?: () => void;
}

const Sidebar = ({
  isMobileOverlay = false,
  isSidebarOpen = false,
  onToggle,
}: SidebarProps) => {
  const { goTo } = useNavigation();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isListVisible, setIsListVisible] = useState<boolean>(true);

  // 검색어 상태
  const [searchTerm /*setSearchTerm*/] = useState<string>("");

  const expanded = isMobileOverlay ? isSidebarOpen : isExpanded;

  const closeSidebar = () => {
    if (isMobileOverlay) {
      if (onToggle && isSidebarOpen) onToggle();
    } else {
      setIsExpanded(false);
    }
  };

  const handleToggle = isMobileOverlay
    ? onToggle
    : () => setIsExpanded(!isExpanded);

  const isMobileOnly = isMobileOverlay;

  // 새 채팅 버튼 핸들러
  const handleNewChat = () => {
    goTo("/");
    closeSidebar();
  };

  // 기록 버튼 핸들러
  const handleHistoryClick = () => {
    if (!expanded) {
      // 닫힘: 사이드바를 열고, 리스트도 무조건 보이게
      if (handleToggle) handleToggle();
      setIsListVisible(true);
    } else {
      // 열림: 사이드바는 그대로 두고 리스트만 토글
      setIsListVisible(!isListVisible);
    }
  };

  const handleSettingClick = () => {};
  const handleProfileClick = () => {};

  return (
    <aside
      className={`h-screen flex flex-col justify-between py-9.5 shrink-0 transition-all duration-300 ease-in-out ${
        expanded
          ? "w-69 max-mobile:w-[90vw] px-4 items-start"
          : "w-17.5 px-5.75 items-start bg-transparent"
      }`}
      style={
        expanded
          ? {
              boxShadow: "0.19rem -0.06rem 0.82rem 0 #002E6E0A",
              backdropFilter: "blur(0.99rem)",
            }
          : undefined
      }
    >
      {/* 상단 아이콘 4개 */}
      <div className="flex flex-col gap-14.5 w-full items-start">
        {/* 메뉴 버튼 */}
        <IconButton
          icon={expanded ? IcMenuOpen : IcMenuBasic}
          alt="menu"
          onClick={handleToggle}
        />

        {/* ADD / SEARCH / HISTORY: mobile 이하이고 닫혔을 때만 숨김 */}
        <div
          className={`flex flex-col gap-2 w-full mt-4 items-start ${
            isMobileOnly && !expanded ? "max-mobile:hidden" : ""
          }`}
        >
          <SidebarItem
            icon={IcAdd}
            label="새 채팅"
            isExpanded={expanded}
            onClick={handleNewChat}
          />
          <SidebarItem
            icon={IcSearch}
            label="검색"
            isExpanded={expanded}
            onClick={() => {}}
          />
          <SidebarItem
            icon={IcHistory}
            label="기록"
            isExpanded={expanded}
            onClick={handleHistoryClick}
            rightElement={
              <IconButton
                icon={isListVisible ? IcLess : IcMore}
                alt="toggle"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsListVisible(!isListVisible);
                }}
              />
            }
          />
          {expanded && isListVisible && (
            <div
              className="flex flex-col gap-2 w-full px-2 animate-fadeIn overflow-y-auto shrink-0"
              style={{ maxHeight: "calc(100vh - 31rem)" }}
            >
              <QueryBoundary loadingFallback={<SidebarSkeleton />}>
                <ChatListContents
                  keyword={searchTerm}
                  onItemClick={closeSidebar}
                />
              </QueryBoundary>
            </div>
          )}
        </div>
      </div>

      {/* 하단 아이콘 2개: mobile 이하이고 닫혔을 때만 숨김 */}
      <div
        className={`flex flex-col gap-2 w-full items-start ${
          isMobileOnly && !expanded ? "max-mobile:hidden" : ""
        }`}
      >
        <button
          type="button"
          className={`flex items-center w-full h-12.5 transition-all duration-300 cursor-pointer group ${
            expanded ? "px-3 gap-2" : "px-0"
          }`}
          onClick={handleSettingClick}
        >
          <IconButton as="div" icon={IcSetting} alt="setting" size={26} />
          {expanded && (
            <span className="text-h5-r text-chat-text shrink-0">설정</span>
          )}
        </button>

        <button
          type="button"
          className={`flex items-center w-full h-12.5 transition-all duration-300 cursor-pointer ${
            expanded ? "px-3 gap-2" : "px-0"
          }`}
          onClick={handleProfileClick}
        >
          <IconButton as="div" icon={IcProfile} alt="profile" />
          {expanded && (
            <div className="flex items-center gap-2 animate-fadeIn overflow-hidden">
              <span className="text-h5-m text-sub shrink-0">홍길동</span>
              <span className="text-r-12 text-chat-sub truncate w-32">
                UXUI디자인 / 미디어디자인
              </span>
            </div>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
