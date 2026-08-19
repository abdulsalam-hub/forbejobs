
import {useParams, Link, useNavigate} from "react-router-dom";
import DeleteJob from "../component/DeleteJob";
import {useState, useContext} from "react";

import {UnitContext} from "../storage/Context";
import {ArrowLeft, FileEdit, MapPinIcon, Wallet2Icon, X} from "lucide-react";
const ReviewJob = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const {jobState, removeJobs} = useContext(UnitContext);
  const job = jobState.find((work) => work.id === Number(id));
  const [del, setDel] = useState(false);

  function handleDelete() {
    removeJobs(Number(id));
    navigate("/jobs");
  }
  function handleCancel() {
    return setDel(false);
  }
  function handleDelModal() {
    return setDel(true);
  }
  return (
    <>
      <div className=" relative  h-screen w-full   bg-indigo-200 overflow-x-hidden">
        {del && (
          <DeleteJob handledel={handleDelete} handleCancel={handleCancel} />
        )}
        <div className="w-full py-2 top-11.5 left-0 shadow-lg bg-white fixed">
          <div className="group flex py-2 gap-x-2 capitalize font-bold  text-indigo-400 items-center hover:text-indigo-600 transition-all duration-400 hover:font-extrabold">
            <Link
              to="/jobs"
              className="h-8 w-8 hover:bg-slate-300 rounded-full items-center text-center flex justify-center ml-2"
            >
              <ArrowLeft className="text-xl  group-hover:text-blue-600 hover:text-sky-800 " />{" "}
            </Link>
            <span> done review</span>
          </div>
        </div>

        <div
          className="md:flex gap-5 py-8  h-full mt-22 px-2 w-full capitalize"
          key={job.id}
        >
          <div className="md:flex-1 md:w-1/2 w-full gap-y-5">
            <div>
              <div className="w-full h-auto bg-white p-4 my-4 rounded-lg">
                <p className="font-semibold p-2">{job.jobType}</p>
                <h1 className="font-extrabold  text-xl md:text-2xl ">
                  {job.jobName}
                </h1>
                <div className="flex items-center ">
                  <MapPinIcon className="h-5 w-5 text-blue-500 " />
                  <h3 className="text-red-500 font-bold p-2">{job.location}</h3>
                </div>
              </div>
              <div className="w-full bg-white p-4 h-auto capitalize rounded-xl">
                <h2 className="text-xl text-indigo-600 font-bold mb-2">
                  job description
                </h2>
                <p className="font-bold text-justify py-2 ">
                  {job.jobDescription}
                </p>
                <h5 className="flex items-center gap-x-2 font-bold text-indigo-600 py-2 text-xl">
                  <Wallet2Icon className="h-5 w-5 text-blue-700" /> salary
                </h5>
                <span className="font-bold ">{job.jobWage} per year.</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1 md:w-1/2 w-full my-4  px-2">
            <div>
              <div className="bg-white w-full p-4 text-justify items-center rounded-lg shadow-lg  break-after-auto whitespace-pre-wrap truncate">
                <h2 className="font-bold text-xl py-2 capitalize">
                  company info
                </h2>
                <span className="font-bold block pb-2">
                  {job.company.companyName}
                </span>
                <span className="text-justify py-1 ">
                  {job.company.companyDescription}
                </span>
                <h1 className="font-extrabold mt-5 text-xl font-[tahoma,arial,sans-serif]">
                  email :
                </h1>
                <p className="bg-indigo-300 items-center p-2 font-bold ">
                  {job.company.companyEmail}
                </p>
                <h1 className="font-extrabold pt-2 text-xl">contact :</h1>
                <p className="bg-indigo-300 items-center p-2 font-bold ">
                  {job.company?.companyContact?.companyEmail ||
                    " none provided"}
                </p>
              </div>
              <div className="bg-white p-3 items-center my-3 rounded-xl w-full">
                <h2 className="font-bold my-2 capitalize ">manage job</h2>
                <button
                  type="button "
                  className="flex justify-center cursor-pointer bg-blue-600 items-center w-full my-3 mx-auto text-white font-bold text-center p-2 py-3 gap-x-2 rounded-xl hover:text-indigo-600 hover:bg-sky-400"
                >
                  <Link to={`/edit/${Number(id)}`}>edit job </Link>
                  <FileEdit className="h-5 w-5 text-cyan-200" />
                </button>
                <button
                  type="button"
                  onClick={handleDelModal}
                  className="group flex gap-x-2 justify-center cursor-pointer bg-red-500 hover:bg-amber-500 w-full items-center mx-auto my-1 text-white font-bold text-center p-2  rounded-xl hover:text-red-500"
                >
                  <X className="text-white h-4 w-4 h group-hover:text-red-600" />{" "}
                  delete job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ReviewJob;
