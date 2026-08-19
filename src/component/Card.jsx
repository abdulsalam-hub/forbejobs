import CardBox from "./CardBox";
import BoxDetail from "./BoxDetail";
const Card = () => {
  return (
    <>
      <section className="py-4 md:py-5 md:px-2">
        <div className=" text-justify grid grid-cols-1 md:grid-cols-2 gap-y-4  md:gap-4 p-3">
          <CardBox>
            <BoxDetail
              userType=" for developers"
              userAct="browse our react jobs and start your career now.
            "
              userLink="/jobs"
              userPage="browse jobs"
            />
          </CardBox>
          <CardBox bg="bg-indigo-200">
            <BoxDetail
              userType="for employers"
              userAct="list your vacancy to find the perfect developer for the jobs."
              userLink="/addjobs"
              userPage=" add jobs"
            />
          </CardBox>
        </div>
      </section>
    </>
  );
};
export default Card;
