import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || Bistro Boss</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Banner></Banner>

            <div className="">
                <Slider></Slider>
            </div>
            <PopularMenu></PopularMenu>
            <FeaturedItem></FeaturedItem>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;