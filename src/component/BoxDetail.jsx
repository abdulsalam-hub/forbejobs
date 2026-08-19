
import {Link} from "react-router-dom";
const BoxDetail = ({userType, userAct, userLink, userPage}) => {
  return (
    <div>
      <h1 className="text-[clamp(1.2rem,2vw,1.5rem)]  font-black text-justify py-2">
        {userType}
      </h1>
      <p className="font-bold  text-[min(10vw,15px)]  mb-4">{userAct}</p>
      <Link
        to={userLink}
        className="bg-black w-fit py-2 px-3 text-white font-bold  shadow-xs shadow-indigo-400  rounded-xl hover:translate-y-5 hover:rounded-lg mt-3 hover:bg-cyan-500 hover:scale-105"
      >
        {userPage}
      </Link>
    </div>
  );
};

export default BoxDetail;
