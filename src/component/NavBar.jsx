import logo from "../assets/react.svg";
import { NavLink} from "react-router-dom";
const NavBar = () => {
  const navClass = ({isActive, isPending}) =>
    isActive
      ? "flex items-center hover:text-blue-800 justify-center text-black/80 text-center font-bold h-full py-auto border-b-2 border-b-black  ease transition-transform duration-900"
      : isPending
        ? "text-black hover:text-blue-800"
        : "hover:font-bold hover:text-blue-800";

  return (
    <>
      <nav className="w-full fixed top-0 left-0  px-4 z-50 flex justify-between md:justify-around border-b-2 border-b-white text-neutral-100 bg-blue-500 items-center">
        <div className="flex gap-x-1 md:gap-x-3">
          <img src={logo} alt="" className="w-6 h-6" />
          <h1 className="capitalize  font-bold font-[roboto,sans-serif]">
            ForbeJobs
          </h1>
        </div>
        <div className="flex justify-around md:justify-between items-center capitalize md:gap-x-5 gap-x-3 text-white font-bold h-14">
          <NavLink to="/" className={navClass}>
            home
          </NavLink>
          <NavLink to="/jobs" className={navClass}>
            jobs
          </NavLink>
          <NavLink to="/addjobs" className={navClass}>
            addJobs
          </NavLink>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
