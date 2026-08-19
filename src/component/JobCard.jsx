import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {UnitContext} from "../storage/Context";
import Loading from "./Loading";
import {MapPin, WalletIcon} from "lucide-react";
const JobCard = ({isHome = true}) => {
  const {jobState} = useContext(UnitContext);

  const jobSlice = isHome ? jobState : jobState.slice(0, 3);
  const [showFull, setShowFull] = useState(null);
  return (
    <>
      <h1 className="text-center capitalize font-extrabold text-indigo-400 py-3 my-4 text-2xl font-[tahoma-arial,sans-serif]">
        {isHome ? "match jobs" : "latest jobs"}
      </h1>

      {jobSlice.length > 0 ? (
        <div
          className={`grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 `}
        >
          {jobSlice.map((job, id) => {
            const {jobType, jobName, jobWage, jobDescription, location} = job;

            return (
              <div
                key={id}
                className={`bg-white rounded-xl shadow-md relative p-4 ${!isHome === true && ""}`}
              >
                <span className="md:text-sm text-xs font-bold capitalize">
                  {jobType}
                </span>
                <h1 className="font-extrabold capitalize md:text-2xl text-xl">
                  {jobName}
                </h1>
                <p className="font-semibold wrap-break-word my-2">
                  {showFull === id
                    ? jobDescription
                    : jobDescription.slice(0, 60) + "..."}
                </p>

                <button
                  className="text-indigo-600 font-bold cursor-pointer"
                  onClick={() => setShowFull(id)}
                >
                  {jobDescription.toString().split("").length > 50 &&
                  showFull === id
                    ? " "
                    : "more"}
                </button>
                <h4 className="text-indigo-300 py-2 flex gap-x-3 items-center">
                  {" "}
                  <WalletIcon className="h-5 w-5 font-bold" />
                  {jobWage} per year
                </h4>
                <h5 className="font-bold text-red-700 flex items-center gap-x-2 mb-2 capitalize truncate">
                  <MapPin className="h-5 w-5 text-blue-600" /> {location}
                </h5>
                <Link to={`/job/${id + 1}`} className=" font-semibold">
                  <div className="p-2 items-center my-2 cursor-pointer hover:text-slate-200  border text-center border-indigo-300 capitalize bg-indigo-700 rounded-md w-full shadow-lg hover:translate-2 transition-all duration-200 ">
                    find more
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default JobCard;
