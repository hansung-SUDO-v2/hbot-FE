import { useState } from "react";
import IconButton from "@/components/button/IconButton";
import useNavigation from "@/hooks/useNavigation";
import { URLS } from "@/constants/urls";

import IcLogo from "@/assets/images/logo.svg";
import IcSmallLogo from "@/assets/images/logo-small.svg";
import IcLanguage from "@/assets/icons/layouts/language-icon.svg";
import IcMore from "@/assets/icons/layouts/more2-icon.svg";
import IcLess from "@/assets/icons/layouts/less2-icon.svg";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const { goTo } = useNavigation();

  return (
    <header className="w-full h-25.5 px-8 max-tablet:px-5 max-sm-tablet:pl-2 max-mobile:px-17.25 flex items-center justify-between shrink-0">
      {/* 로고: mobile 이하에서 small-logo로 교체 */}
      <button
        type="button"
        onClick={() => goTo(URLS.HOME)}
        className="flex items-center outline-none hover:opacity-80 transition-opacity cursor-pointer"
      >
        <img
          src={IcLogo}
          alt="로고"
          className="w-51.25 max-tablet:w-40 max-sm-tablet:w-33 object-contain max-mobile:hidden"
        />
        <img
          src={IcSmallLogo}
          alt="로고"
          className="hidden max-mobile:block object-contain"
        />
      </button>

      {/* 언어, 로그인 버튼: mobile 이하에서 숨김 */}
      <div className="flex items-center gap-10.25 max-tablet:gap-6 max-sm-tablet:gap-4 max-mobile:hidden">
        <button
          type="button"
          className="flex items-center gap-1 outline-none group cursor-pointer"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <IconButton
            src={IcLanguage}
            alt="언어"
            className="pointer-events-none max-tablet:w-5 max-tablet:h-5 max-sm-tablet:w-4 max-sm-tablet:h-4"
          />
          <span className="text-h5-m max-tablet:text-sm max-sm-tablet:text-xs text-header-blue uppercase">
            Language
          </span>
          <IconButton
            src={isLangOpen ? IcLess : IcMore}
            alt="언어"
            className="pointer-events-none max-tablet:w-5 max-tablet:h-5 max-sm-tablet:w-4 max-sm-tablet:h-4"
          />
        </button>

        <button
          type="button"
          onClick={() => goTo(URLS.LOGIN)}
          className="text-h5-m max-tablet:text-sm max-sm-tablet:text-xs text-header-blue cursor-pointer"
        >
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
