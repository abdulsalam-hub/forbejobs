import {Link} from "react-router-dom";
const ViewAll = () => {
  return (
    <>
      <div
        title="view all jobs"
        className="w-full my-5 mx-auto self-center flex justify-center bg-white hover:rounded-xl transition-all duration-250 ease-in-out"
      >
        <Link
          to="/jobs"
          className="w-[80%] max-w-70 h-15 bg-black  text-center rounded-lg   items-center text-xl font-bold cursor-pointer hover:scale-105 flex justify-center hover:bg-blue-400"
        >
          {" "}
          <button className=" text-neutral-200  capitalize">view all</button>
        </Link>
      </div>
    </>
  );
};
export default ViewAll;
