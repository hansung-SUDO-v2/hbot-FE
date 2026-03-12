import { useState } from "react";
import IconButton from "@/components/button/IconButton";
import SidebarItem from "./SidebarItem";

import MENU_BASIC from "@assets/icons/layouts/menu-basic-icon.svg";
import MENU_OPEN from "@assets/icons/layouts/menu-open-icon.svg";
import ADD from "@assets/icons/layouts/add-icon.svg";
import SEARCH from "@assets/icons/layouts/search-icon.svg";
import HISTORY from "@assets/icons/layouts/history-icon.svg";
import SETTING from "@assets/icons/layouts/settings-icon.svg";
import PROFILE from "@assets/icons/layouts/profile-icon.svg";
import MORE from "@assets/icons/layouts/more-icon.svg";
import LESS from "@assets/icons/layouts/less-icon.svg";

const chatHistory = [
  { id: "chat_001", title: "학점은행제 질문 리스트" },
  {
    id: "chat_002",
    title: "UXUI 디자인 트렌드 2026 매우매우매우매우매ㅜ 긴 제목",
  },
  { id: "chat_003", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_004", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_005", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_006", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_007", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_008", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_009", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_010", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_011", title: "리액트 사이드바 컴포넌트 구조" },
  { id: "chat_012", title: "리액트 사이드바 컴포넌트 구조" },
];

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
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isListVisible, setIsListVisible] = useState<boolean>(true);

  const expanded = isMobileOverlay ? isSidebarOpen : isExpanded;
  const handleToggle = isMobileOverlay
    ? onToggle
    : () => setIsExpanded(!isExpanded);

  const isMobileOnly = isMobileOverlay;

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
          src={expanded ? MENU_OPEN : MENU_BASIC}
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
            icon={ADD}
            label="새 채팅"
            isExpanded={expanded}
            onClick={() => {}}
          />
          <SidebarItem
            icon={SEARCH}
            label="검색"
            isExpanded={expanded}
            onClick={() => {}}
          />
          <SidebarItem
            icon={HISTORY}
            label="기록"
            isExpanded={expanded}
            onClick={() => setIsListVisible(!isListVisible)}
            rightElement={
              <IconButton
                src={isListVisible ? LESS : MORE}
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
              className="flex flex-col gap-2 w-full px-2 animate-fadeIn overflow-y-auto shrink-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ maxHeight: "calc(100vh - 31rem)" }}
            >
              {chatHistory.map((chat) => (
                <button
                  key={chat.id}
                  type="button"
                  className="w-full h-7.25 px-3.5 text-left text-h5-r text-list hover:text-list-blue truncate shrink-0 hover:bg-sub-blue rounded-[20px] active:scale-95 transition-colors cursor-pointer"
                >
                  {chat.title}
                </button>
              ))}
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
          <IconButton src={SETTING} alt="setting" size={26} />
          {expanded && (
            <div className="flex items-center gap-2 animate-fadeIn overflow-hidden">
              <span className="text-h5-r text-chat-text shrink-0">설정</span>
            </div>
          )}
        </button>

        <button
          type="button"
          className={`flex items-center w-full h-12.5 transition-all duration-300 cursor-pointer ${
            expanded ? "px-3 gap-2" : "px-0"
          }`}
          onClick={handleProfileClick}
        >
          <IconButton src={PROFILE} alt="profile" />
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
