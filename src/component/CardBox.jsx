const CardBox = ({children, bg = "bg-gray-200"}) => {
  return (
    <>
      <div
        className={` ${bg} w-full  px-4 py-4 rounded-lg capitalize  shadow-lg`}
      >
        {children}
      </div>
    </>
  );
};
export default CardBox;
