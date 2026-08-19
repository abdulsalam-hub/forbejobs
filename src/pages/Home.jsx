import ViewAll from "../component/ViewAll";
import Card from "../component/Card";
import Hero from "../component/Hero";
import JobListing from "./JobListing";

const Home = () => {
  return (
    <>
      <Hero
        title="Become a react developer"
        subtitle="find the react jobs that fits your skills set."
      />
      <Card />
      <JobListing />
      <ViewAll />
    </>
  );
};
export default Home;
