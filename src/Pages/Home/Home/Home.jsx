import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Community from "../Community/Community";

const Home = () => {
    return (
        <div className="bg-white">
        <Helmet>
        <title>Go-Lingo | Home</title>
      </Helmet>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <PopularInstructor></PopularInstructor>
        <Community></Community>
        </div>
    );
};

export default Home;