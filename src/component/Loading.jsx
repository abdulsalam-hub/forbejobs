
const Loading = () => {
  return (
    <div className="w-srceen   h-full flex items-center justify-center mx-auto py-5  flex-col ">
      <div className="   animate-spin border-2  border-blue-200 border-t-blue-400 bg-slate-100 h-15 w-15 rounded-full "></div>
      <p className="font-bold font-[popping,consolas,arial] text-xs capitalize text-center ">
        loading jobs<span className="animate-ping ">...</span>
      </p>
    </div>
  );
};

export default Loading;
