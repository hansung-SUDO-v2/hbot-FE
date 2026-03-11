import { useState } from "react";
import IconButton from "@components/IconButton";

import LOGO from "@assets/images/logo.svg";
import LANGUAGE from "@assets/icons/layouts/language-icon.svg";
import MORE from "@assets/icons/layouts/more2-icon.svg";
import LESS from "@assets/icons/layouts/less2-icon.svg";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="w-full h-28.25 px-8 flex items-center justify-between shrink-0">
      {/* 로고 */}
      <button
        type="button"
        className="flex items-center outline-none hover:opacity-80 transition-opacity"
      >
        <img src={LOGO} alt="로고" className="w-51.25 object-contain" />
      </button>

      {/* 언어, 로그인 버튼 */}
      <div className="flex items-center gap-10.25">
        <button
          type="button"
          className="flex items-center gap-1 outline-none group cursor-pointer"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <IconButton
            src={LANGUAGE}
            alt="언어"
            className="pointer-events-none"
          />
          <span className="text-h5-m text-header-blue uppercase">Language</span>
          <IconButton
            src={isLangOpen ? LESS : MORE}
            alt="언어"
            className="pointer-events-none"
          />
        </button>

        <button
          type="button"
          className="text-h5-m text-header-blue cursor-pointer"
        >
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
