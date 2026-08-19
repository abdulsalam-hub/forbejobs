const Hero = ({title, subtitle}) => {
  return (
    <>
      <section className=" overflow-hidden bg-indigo-700 w-full h-auto py-15 mt-13 mb-4 items-center text-center border-t border-t-white flex justify-center ">
        <div className="w-full flex justify-between flex-col px-1 py-auto ">
          <h1 className="text-[clamp(1rem,7vw,3rem)] my-4 font-black text-white capitalize">
            {title}
          </h1>
          <p className=" text-[min(10vw,18px)] text-white font-mono">
            {subtitle}
          </p>
        </div>
      </section>
    </>
  );
};
export default Hero;
