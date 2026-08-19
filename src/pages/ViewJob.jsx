import {useParams, Link} from "react-router-dom";
import {toast} from "react-toastify";
import {
  ArrowLeftIcon,
 // FileEdit,
  FileInputIcon,
  MapPinIcon,
  SaveIcon,
  Wallet2Icon
} from "lucide-react";
import {useContext} from "react";
import {UnitContext} from "../storage/Context";
import NotFound from "../component/NotFound";
const ViewJob = () => {
  const {id} = useParams();
  const {jobState} = useContext(UnitContext);

  const job = jobState.find((work) => {
    return work.id === Number(id);
  });

  if (job === undefined) {
    return <NotFound />;
  }
  return (
    <>
      <div className="items-center  h-auto md:h-full  w-full bg-indigo-200">
        <div className="w-full text-justify  top-11.5 py-2 left-0 items-center shadow-lg bg-white fixed">
          <Link
            to="/jobs"
            className="group flex gap-x-2 capitalize font-bold ml-2 pt-2 text-indigo-400 items-center hover:text-indigo-600 transition-all duration-400 hover:font-extrabold"
          >
            <div className="h-8 w-8 hover:bg-slate-300 rounded-full items-center text-center flex justify-center">
              <ArrowLeftIcon className="text-xl  group-hover:text-blue-600" />{" "}
            </div>
            back to jobs
          </Link>
        </div>
        <div className="md:flex gap-5 py-8  h-full  mt-22 px-4 w-full capitalize">
          <div className="flex-1 md:w-[70%] w-full gap-y-5">
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
          <div className="flex-1 md:w-[20%] w-full my-4  px-2">
            <div>
              <div className="bg-white p-4 text-justify items-center rounded-lg shadow-lg">
                <h2 className="font-bold text-xl py-2 capitalize">
                  company info
                </h2>
                <span className="font-bold block pb-2">
                  {job.company.companyName}
                </span>
                <span className="text-justify py-1">
                  {job.company.companyDescription}
                </span>
                <h1 className="font-extrabold mt-5 text-xl font-[tahoma,arial,sans-serif]">
                  email :
                </h1>
                <p className="w-full bg-indigo-300  p-2 font-bold tracking-tight font-[popping]">
                  {job.company.companyEmail || " we will email you."}
                </p>
                <h1 className="font-extrabold pt-2 text-xl">contact :</h1>
                <p className="bg-indigo-300 p-2 font-bold ">
                  {job.company.companyContact || " none provided"}
                </p>
              </div>
              {/**  task here */}
              <div className="w-full backdrop-blur-lg bg-slate-200 py-4 px-2 font-[verdana,consolas,sans-serif] h-auto capitalize rounded-xl shadow-sm hover:shadow-blue-400 my-3 transition">
                <h3 className="font-bold text-[min(10vw,22px)] font-sans mb-3 ">
                  application
                </h3>
                <Link to={`/apply/${id}`}>
                  <button className="flex justify-center gap-x-2 w-full p-3 my-2 bg-emerald-400 rounded-lg items-center text-center  cursor-pointer  hover:bg-emerald-600  mx-auto  text-white font-bold">
                    easy apply{" "}
                    <FileInputIcon className="  font-bold items-center  text-blue-700 " />
                  </button>
                </Link>
                <button
                  onClick={() => toast.success("job saved successfully")}
                  className="flex gap-x-1.5 justify-center cursor-pointer bg-indigo-500 hover:bg-cyan-600 w-full items-center mx-auto my-3 text-white font-bold text-center p-3  rounded-xl  "
                >
                  <SaveIcon /> save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// function HandleTask({handleDelete, id}) {
//   return (
//     <>
//       <div className="bg-white p-3 items-center my-3 rounded-xl ">
//         <h2 className="font-bold my-2 capitalize ">manage job</h2>
//         <Link to={`/edit/${id}`} className="cursor-pointer">
//           {" "}
//           <button
//             type="button "
//             className="flex justify-center bg-blue-600 items-center w-full my-3 mx-auto text-white font-bold text-center p-2 py-3 gap-x-2 rounded-xl"
//           >
//             edit job
//             <FileEdit className="h-5 w-5 text-cyan-400" />
//           </button>{" "}
//         </Link>
//         <button
//           type="button"
//           onClick={handleDelete}
//           className="group flex gap-x-2 justify-center cursor-pointer bg-red-500 hover:bg-amber-600 w-full items-center mx-auto my-1 text-white font-bold text-center p-2  rounded-xl"
//         >
//           <X className="text-white h-4 w-4 h group-hover:text-red-500" /> delete
//           job
//         </button>
//       </div>
//     </>
//   );
// }
export default ViewJob;
