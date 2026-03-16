import ImgHomePageBtn from "@/assets/images/homepage-btn.svg";
import { URLS } from "@/constants/urls";
import useNavigation from "@/hooks/useNavigation";

const HomePageButton = () => {
  const { goTo } = useNavigation();

  return (
    <button
      type="button"
      onClick={() => goTo(URLS.HOMEPAGE, { isNewTab: true })}
      className="fixed bottom-11.25 right-12.25 w-80.75 h-23 cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
    >
      <span className="absolute top-4 left-10.5 text-h5-m text-body-blue">
        학교 홈페이지 바로가기!
      </span>
      <img
        src={ImgHomePageBtn}
        alt="학교 홈페이지 바로가기"
        className="w-full h-full"
      />
    </button>
  );
};

export default HomePageButton;
