import {useEffect, useState} from "react";
import {UnitContext} from "./Context";
import {jobs} from "../api/JobList";
import {toast} from "react-toastify";
const JobContext = ({children}) => {
  const [jobState, setJobState] = useState(() => {
    const savedJobs = window.localStorage.getItem("jobs");
    return savedJobs ? JSON.parse(savedJobs) : jobs;
  });

  const postJobs = (jobId) => {
    setJobState([...jobState, jobId]);
    toast.success(`job added successfully🎇.
        review it again. `);
  };
  const removeJobs = (jobId) => {
    const filtered = jobState.filter((job) => {
      return job.id !== jobId;
    });
    setJobState(filtered);
    toast.error("job deleted successfully.");
  };
  const editJobs = (jobId, jobContent) => {
    const edited = jobState.map((job) => {
      return job.id === jobId ? jobContent : job;
    });

    setJobState(edited);
    toast.info("job done was  edited.");
  };

  useEffect(() => {
    window.localStorage.setItem("jobs", JSON.stringify(jobState));
  }, [jobState]);


  return (
    <>
      <UnitContext.Provider value={{jobState, postJobs, removeJobs, editJobs}}>
        {children}
      </UnitContext.Provider>
    </>
  );
};
export default JobContext;
