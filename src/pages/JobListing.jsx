import JobCard from "../component/JobCard";
const JobListing = () => {
  return (
    <>
      <section className="py-4 my-5 px-3 bg-slate-100">
        <JobCard isHome={false} />
      </section>
    </>
  );
};
export default JobListing;
