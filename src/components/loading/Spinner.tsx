import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-25">
      <HashLoader color="#005FE2" size={40} />
    </div>
  );
};

export default Spinner;
