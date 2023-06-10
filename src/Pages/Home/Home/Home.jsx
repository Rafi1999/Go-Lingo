import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import Statistics from "../Statistics/Statistics";

const Home = () => {
    return (
        <div>
        <Helmet>Go-Lingo | Home</Helmet>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        <Statistics></Statistics>
        </div>
    );
};

export default Home;