import {memo} from "react";
const DeleteJob = memo(function DeleteJob({handleCancel, handledel}) {
  return (
    <>
      <div className="w-[80%] md:w-90 capitalize font-black rounded-ld bg-white fixed md:left-[20%] md:top-[30%] top-[50%] left-[10%]  transform-view translate-[-50%,50%] p-4 rounded-lg shadow-xl drop-shadow-md z-80">
        <p className="py-2 text-xl text-center mx-auto">
          are you sure to delete this ?
        </p>
        <div className=" w-full my-5 flex justify-around gap-4">
          <button
            onClick={handleCancel}
            className="bg-blue-400 rounded-full w-20 p-2 text-center  font-bold hover:bg-indigo-600 cursor-pointer text-white"
          >
            cancel
          </button>
          <button
            onClick={handledel}
            className="bg-red-400 rounded-xl text-center font-bold hover:bg-red-600 text-white p-3 w-20 cursor-pointer"
          >
            delete
          </button>
        </div>
      </div>
    </>
  );
});

export default DeleteJob;
