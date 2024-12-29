import Banner from "./Banner";
import FeaturedItem from "./FeaturedItem";
import PopularMenu from "./PopularMenu";
import Slider from "./Slider";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
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