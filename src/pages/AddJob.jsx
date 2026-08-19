import {PlusIcon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {UnitContext} from "../storage/Context";
const AddJob = ({id}) => {
  const {postJobs} = useContext(UnitContext);
  const [job, setJob] = useState("");
  const [type, setType] = useState("fulltime");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [wage, setWage] = useState("50k - 90k");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [companyContact, setCompanyContact] = useState("");

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const newJobs = {
      id: id,
      jobType: type,
      jobName: job,
      jobDescription: description,
      jobWage: wage,
      location: location,
      company: {
        companyName: companyName,
        companyDescription: companyDescription,
        companyEmail: companyEmail,
        companyContact: companyContact
      }
    };
    postJobs(newJobs);
    navigate(`/review/${id}`);
  };
  return (
    <>
      <section className="bg-indigo-200 mt-12 md:h-full h-auto  py-10 px-4 md:px-10 w-full">
        <div className="w-full md:w-[70%] p-4 mx-auto bg-white rounded-xl shadow-lg items-center font-black font-[tahoma,verdana]">
          <h1 className="text-center mx-auto p-3 text-xl items-center flex  justify-center w-full hover:border">
            <PlusIcon className="font-bold text-xl text-indigo-500"></PlusIcon>{" "}
            add job
          </h1>
          <form
            onSubmit={submitForm}
            action=""
            autoComplete="on"
            autoCapitalize="sentences"
            autoFocus
            autoCorrect=""
            className="w-full capitalize m-auto my-2 text-justify caret-blue-500"
          >
            <label
              htmlFor="jobType"
              className="text-sm font-bold capitalize inline"
            >
              jobType:
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setType(() => e.target.value)}
              className="font-bold items-center p-2 w-full rounded-lg border border-gray-200 mb-3"
            >
              <option
                value="fullTime"
                className="w-18 md:w-20 border-b hover:bg-indigo-300  capitalize"
              >
                fullTime
              </option>
              <option
                value="remote"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                remote
              </option>
              <option
                value="partTime"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                part time
              </option>
            </select>
            <label
              htmlFor="jobName"
              className="text-sm font-bold capitalize my-3"
            >
              jobName:
            </label>
            <input
              type="text"
              required
              placeholder="job name"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="font-semibold items-center h-12 p-2 w-full my-2 rounded-xl indent-3 border border-gray-400 text-lg"
            />
            <label
              htmlFor="jobDescription"
              className="text-sm font-bold capitalize my-3"
            >
              jobDescription:
            </label>
            <textarea
              name=""
              id=""
              cols="8"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="enter job description ..."
              className="font-semibold items-center p-2 w-full my-2 rounded-lg indent-3 border border-gray-400 text-[14px] md:text-lg outline-0 resize-none"
            ></textarea>
            <label
              htmlFor="salary"
              className="text-sm font-bold capitalize inline"
            >
              salary:
            </label>
            <select
              name=""
              id=""
              onChange={(e) => setWage(() => e.target.value)}
              className="font-bold items-center p-2 w-full rounded-lg border border-gray-200 mb-3"
            >
              <option
                value="90k-100+k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300  capitalize"
              >
                90k - 100k+
              </option>
              <option
                value="80k -90k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                80k - 90k
              </option>
              <option
                value="70k-80k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                70k - 80k
              </option>
              <option
                value="60k-70k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                50k - 60k
              </option>
              <option
                value="50k-60k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                50k - 60k
              </option>
              <option
                value="40k-50k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                40k - 50k
              </option>
              <option
                value="30k-40k"
                className="w-18 md:w-20 border-b hover:bg-indigo-300 capitalize"
              >
                30k - 40k
              </option>
            </select>
            <label
              htmlFor="jobLocation"
              className="text-sm font-bold capitalize my-3"
            >
              location:
            </label>
            <input
              type="text"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="job location"
              className="font-semibold items-center h-12 p-2 w-full my-2 rounded-xl indent-3 border border-gray-400 text-lg"
            />

            <h2 className="text-xl font-black my-5 px-2">companyInfo:</h2>
            <label
              htmlFor="companyName"
              className="text-sm font-bold capitalize my-3"
            >
              CompanyName:
            </label>
            <input
              type="text"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="company Name"
              className="font-semibold items-center h-12 p-2 w-full my-2 rounded-xl indent-3 border border-gray-400 text-lg"
            />
            <label
              htmlFor="companyDescription"
              className="text-sm font-bold capitalize my-3"
            >
              CompanyDescription
            </label>
            <textarea
              name=""
              id=""
              cols="8"
              rows="3"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
              placeholder="enter description (What your company does) ..."
              className="font-semibold items-center p-2 w-full my-2 rounded-lg indent-3 border border-gray-400 text-[14px] md:text-lg outline-0 resize-none"
            ></textarea>
            <label
              htmlFor="companyEmail"
              className="text-sm font-bold capitalize my-3"
            >
              CompanyEmail:
            </label>
            <input
              type="email"
              required
              value={companyEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
              placeholder="company Email"
              className="font-semibold items-center h-12 p-2 w-full my-2 rounded-xl indent-3 border border-gray-400 text-lg"
            />
            <label
              htmlFor="companyContact"
              className="text-sm font-bold capitalize my-3"
            >
              CompanyContact:
            </label>
            <input
              max={12}
              minLength={3}
              type="tel"
              value={companyContact}
              onChange={(e) => setCompanyContact(e.target.value)}
              placeholder=" (optional)company contact for applicants"
              className="font-semibold items-center h-12 p-2 w-full my-2 rounded-xl indent-3 border border-gray-400 text-lg"
            />

            <button
              type="submit"
              className="bg-indigo-500 cursor-pointer hover:translate-0.5 rounded-lg text-center items-center w-full capitalize font-bold my-4 py-4"
            >
              add job
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default AddJob;
