import {useState, useContext} from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import {X} from "lucide-react";
import {UnitContext} from "../storage/Context";
import {toast} from "react-toastify";
const Apply = () => {
  const {id} = useParams();
  const {jobState} = useContext(UnitContext);
  const detail = jobState.find((job) => job.id === Number(id));
  const [disResume, setDisResume] = useState("");
  const navigate = useNavigate();

  function handleResume() {
    const put = document.getElementById("imgPut");
    const imgFile = put.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setDisResume(e.target.result);
    };
    reader.readAsDataURL(imgFile);
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    toast.info(`application sent.
      wait for feedback soon !`);
    navigate("/done");
  }

  return (
    <>
      <section className="h-auto md:h-full px-1 md:px-3 py-6 mt-10 bg-gray-200   ">
        <div
          title="leave page"
          className="w-full h-10 rounded-md py-auto sticky top-15 z-50 overflow-hidden  shadow-lg mb-3 items-center text-blue-400 font-bold bg-white "
        >
          <Link to={-1}>
            {" "}
            <X className=" h-8 w-8 my-auto ml-3 rounded-full cursor-pointer  hover:bg-gray-300" />
          </Link>
        </div>
        <div className="w-full bg-black/50 backdrop:blur-lg p-2 py-3  text-slate-200  font-black line-clamp-2 text-[min(10vw,35px)] text-center rounded-lg  items-center font-[arial, consolas ,monospace]">
          {detail.company.companyName}
        </div>
        <div className="md:px-8 px-4 my-4 py-2 mx-5 font-bold capitalize font-sans font-stretch-75% rounded-lg bg-white shadow-xl ">
          <span>you are applying for </span>
          <div className="flex justify-between md:px-5 items-center">
            <h2 className="font-bold md:text-[min(10vw,30px)]  text-xl md:text-center">
              {detail.jobName}
            </h2>
            <p>{detail.jobType}</p>
          </div>
        </div>
        <div className="px-6 my-3 w-full md:w-[70%] mx-auto">
          <h2 className="font-bold text-center py-3 text-xl uppercase underline underline-offset-1">
            application{" "}
          </h2>
          <form
            action=""
            className="p-2  border border-gray-400 rounded-xl "
            onSubmit={handleSubmit}
          >
            <h2 className="font-bold font-serif ">personal info</h2>
            <div className="w-full py-2">
              <label
                htmlFor="name"
                name="name"
                className=" font-bold py-2 after:items-center after:content-['*'] after:text-red-500 after:ml-1"
              >
                name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoFocus="true"
                autoComplete="name"
                required
                className="w-full h-8 outline-0 border-b indent-2 font-[400px] focus:bg-slate-100 rounded items-center"
              />
            </div>
            <div className="w-full py-1">
              <label
                htmlFor="email"
                name="email"
                className=" font-bold after:items-center after:content-['*'] after:text-red-500 after:ml-1"
              >
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoFocus="true"
                autoComplete="email"
                required
                className="w-full h-8 outline-0 border-b indent-2 font-[400px] focus:bg-slate-100 rounded items-center caret caret-indigo-500"
              />
            </div>
            <div className="w-full ">
              <label htmlFor="phone" name="tel" className=" font-bold py-2  ">
                phone
              </label>
              <input
                type="tel"
                name="tel"
                id="tel"
                autoFocus="true"
                autoComplete="tel"
                className="w-full h-8 outline-0 border-b indent-2 font-[400px] focus:bg-slate-100 rounded items-center invalid:border-red-500"
              />
            </div>

            <div className="w-full ">
              <h3 className="font-bold ml-3 text-xl font-[verdana,sans-serif] my-2 ">
                resume
              </h3>
              <span className="after:content-['*'] after:text-blue-500 mb-2 md:my-2 py-3">
                make sure it is an updated resume
              </span>
            </div>
            <div className="border  border-blue-600 p-2 rounded ">
              <div className=" w-full flex h-15 items-center ">
                <p className="h-full w-[90%] border after:font-bold shrink-0 object-top-left ">
                  {disResume.slice(0, 27)}
                </p>
                <input
                  type="file"
                  name=""
                  id="imgPut"
                  value=""
                  required
                  onChange={handleResume}
                  accept="doc,docx,pdf/*"
                  placeholder="your valid resume"
                  className=" w-[10%] h-full bg-blue-400 border-l-2  border-blue-800 rounded hover:file:bg-blue-800 hover:font-bold hover:file:text-white file:cursor-pointer file:h-full  file:text-slate-200"
                />
              </div>
              <p className="uppercase text-sm">doc,docx,pdf</p>
            </div>
            <h2 className="font-bold font-sans mt-2 ml-3 fot-bold text-xl capitalize">
              additional info
            </h2>
            <div>
              <p>how many years of experience you have in total </p>
              <input
                type="number"
                name=""
                id=""
                required
                className="peer w-full outline-0 border-b indent-5 mt-2 not-in-range:placeholder:text-red-300 out-of-range:border-red-500 shadow-red-300 out-of-range:shadow-lg"
                max={3}
                maxLength={3}
                min={0}
              />
              <span className="text-sm  text-red-500 hidden  peer-out-of-range:block">
                too long experience years numbers.
              </span>
            </div>
            <div className="my-4">
              <p className="truncate">
                do you have knowledge in other frameworks (vue,angular){" "}
              </p>
              <select
                role="option"
                type="select"
                name=""
                id=""
                className="border cursor-context-menu rounded-sm  py-2 capitalize font-bold w-full  indent-5 mt-2"
              >
                {" "}
                <option value="select an option ">select an option</option>
                <option value="yes">yes</option>
                <option value="no ">no</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-[50%] py-2 cursor-pointer hover:rounded-xl hover:capitalize hover:text-cyan-500 border bg-indigo-300 text-xl font-bold font-mono rounded-lg   my-3 hover:bg-blue-600 mx-auto flex justify-center"
            >
              apply
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Apply;
