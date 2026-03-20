import { useState } from "react";
import IcLanguage from "@/assets/icons/layouts/language-icon.svg?react";
import IcLess from "@/assets/icons/layouts/less2-icon.svg?react";
import IcMore from "@/assets/icons/layouts/more2-icon.svg?react";

import Logo from "@/assets/images/logo.svg?react";
import SmallLogo from "@/assets/images/logo-small.svg?react";
import IconButton from "@/components/button/IconButton";
import { URLS } from "@/constants/urls";
import useNavigation from "@/hooks/useNavigation";

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState<boolean>(false);
  const { goTo } = useNavigation();

  return (
    <header
      className="
    w-full flex items-center justify-between shrink-0
    px-8 py-9 
    max-laptop:pb-7.5 
    max-tablet:px-5 max-tablet:pb-5 
    max-sm-tablet:pl-2 
    max-mobile:px-17.25 max-mobile:pt-10.5
  "
    >
      {/* 로고: mobile 이하에서 small-logo로 교체 */}
      <button
        type="button"
        onClick={() => goTo(URLS.HOME)}
        className="flex items-center outline-none hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Logo className="w-51.25 max-tablet:w-40 max-sm-tablet:w-33 object-contain max-mobile:hidden" />
        <SmallLogo className="hidden max-mobile:block object-contain" />
      </button>

      {/* 언어, 로그인 버튼: mobile 이하에서 숨김 */}
      <div className="flex items-center gap-10.25 max-tablet:gap-6 max-sm-tablet:gap-4 max-mobile:hidden">
        <button
          type="button"
          className="flex items-center gap-1 outline-none group cursor-pointer"
          onClick={() => setIsLangOpen(!isLangOpen)}
        >
          <IconButton
            as="div"
            icon={IcLanguage}
            alt="언어"
            className="pointer-events-none max-tablet:w-5 max-tablet:h-5 max-sm-tablet:w-4 max-sm-tablet:h-4"
          />
          <span className="text-h5-m max-tablet:text-sm max-sm-tablet:text-xs text-header-blue uppercase">
            Language
          </span>
          <IconButton
            as="div"
            icon={isLangOpen ? IcLess : IcMore}
            alt="언어 토글"
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
