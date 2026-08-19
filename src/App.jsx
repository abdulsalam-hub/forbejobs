import {BrowserRouter, Routes, Route} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {useContext} from "react";
import {UnitContext} from "./storage/Context";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home"
import NavBar from "./component/NavBar";
import AddJob from "./pages/AddJob";
import Jobs from "./component/Jobs";
import ViewJob from "./pages/ViewJob";
import NotFound from "./component/NotFound";
import EditJob from "./pages/EditJob";
import Apply from "./pages/Apply";
import JobDone from "./pages/JobDone";
import Reviewjob from "./pages/Reviewjob";



function App() {
  const {jobState} = useContext(UnitContext);
  const id = jobState.length + 1;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <ToastContainer
          position="top-right"
          autoClose="3000"
          hideProgressBar={false}
          newestOnTop={true}
          closeButton
          closeOnClick={true}
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/addjobs" element={<AddJob id={id} />} />
          <Route path="/job/:id" element={<ViewJob />} />
          <Route path="/edit/:id" element={<EditJob />} />
          <Route path="/apply/:id" element={<Apply />} />
          <Route path="/done" element={<JobDone />} />
          <Route path="/review/:id" element={<Reviewjob />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
