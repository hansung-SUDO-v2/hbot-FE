import HomePageButtonImg from "@/assets/images/homepage-btn.svg";

const HomePageButton = () => {
  return (
    <button
      type="button"
      className="fixed bottom-11.25 right-12.25 w-80.75 h-23 cursor-pointer hover:opacity-80 active:scale-95 transition-all duration-150"
    >
      <span className="absolute top-4 left-10.5 text-h5-m text-body-blue">
        학교 홈페이지 바로가기!
      </span>
      <img
        src={HomePageButtonImg}
        alt="학교 홈페이지 바로가기"
        className="w-full h-full"
      />
    </button>
  );
};

export default HomePageButton;
