import {useNavigate} from "react-router-dom";
import {TriangleAlertIcon} from "lucide-react";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center w-full h-screen  capitalize">
        <TriangleAlertIcon className="text-yellow-200 fill-amber-300 font-extrabold text-5xl h-18 w-18 text-center my-4" />
        <h1 className="text-4xl text-amber-900 font-black ">404</h1>
        <h2 className="text-[min(10vw,42px)] font-bold mb-4 capitalize font-[tahoma,arial,sans-serif] text-red-400">
          jobs Not Found
        </h2>
        <p className="text-xl mb-4">this page does not exit.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-white cursor-pointer hover:capitalize bg-indigo-400 hover:bg-indigo-900 hover:font-bold b rounded-md px-3 py-2 mt-4"
        >
          go back
        </button>
      </div>
    </>
  );
};
export default NotFound;
