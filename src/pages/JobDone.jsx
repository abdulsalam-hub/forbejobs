import {Medal} from "lucide-react";
import {Link} from "react-router-dom";
const JobDone = () => {
  return (
    <div className="h-screen w-full bg-slate-200 px-auto flex items-center justify-center flex-col overflow-hidden">
      <Medal className="h-20 w-20 text-[min(10vw,23px)] font-black text-emerald-300" />
      <p className="font-bold my-3 text-[min(10vw,25px)] capitalize  text-center mx-auto">
        you've just successfully apply for the job
      </p>

      <div className="absolute bottom-0  my-2 bg-emerald-500 text-slate-100 rounded w-[70%] md:w-80 items-center text-center mx-auto flex justify-center py-4 font-bold uppercase  self-center">
        <Link to="/jobs" className="w-full h-full backdrop-blur-lg">
          {" "}
          done
        </Link>
      </div>
    </div>
  );
};
export default JobDone;
