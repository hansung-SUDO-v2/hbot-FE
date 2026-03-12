import { useState } from "react";
import IconButton from "@components/IconButton";

import LOGO from "@assets/images/logo.svg";
import SMALL_LOGO from "@assets/images/logo-small.svg";
import LANGUAGE from "@assets/icons/layouts/language-icon.svg";
import MORE from "@assets/icons/layouts/more2-icon.svg";
import LESS from "@assets/icons/layouts/less2-icon.svg";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);

  return (
    <header className="w-full h-25.5 px-8 max-tablet:px-5 max-sm-tablet:pl-2 max-mobile:px-17.25 flex items-center justify-between shrink-0">
      {/* 로고: mobile 이하에서 small-logo로 교체 */}
      <a
        href="/"
        className="flex items-center outline-none hover:opacity-80 transition-opacity"
      >
        <img
          src={LOGO}
          alt="로고"
          className="w-51.25 max-tablet:w-40 max-sm-tablet:w-33 object-contain max-mobile:hidden"
        />
        <img
          src={SMALL_LOGO}
          alt="로고"
          className="hidden max-mobile:block object-contain"
        />
      </a>

      {/* 언어, 로그인 버튼: mobile 이하에서 숨김 */}
      <div className="flex items-center gap-10.25 max-tablet:gap-6 max-sm-tablet:gap-4 max-mobile:hidden">
        <button
          type="button"
          className="flex items-center gap-1 outline-none group cursor-pointer"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <IconButton
            src={LANGUAGE}
            alt="언어"
            className="pointer-events-none max-tablet:w-5 max-tablet:h-5 max-sm-tablet:w-4 max-sm-tablet:h-4"
          />
          <span className="text-h5-m max-tablet:text-sm max-sm-tablet:text-xs text-header-blue uppercase">
            Language
          </span>
          <IconButton
            src={isLangOpen ? LESS : MORE}
            alt="언어"
            className="pointer-events-none max-tablet:w-5 max-tablet:h-5 max-sm-tablet:w-4 max-sm-tablet:h-4"
          />
        </button>

        <a
          href="/login"
          className="text-h5-m max-tablet:text-sm max-sm-tablet:text-xs text-header-blue cursor-pointer"
        >
          로그인
        </a>
      </div>
    </header>
  );
};

export default Header;
