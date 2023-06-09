import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
        <Helmet>Go-Lingo | Home</Helmet>
        <Banner></Banner>
        <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;