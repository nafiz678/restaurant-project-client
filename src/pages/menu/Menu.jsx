import Cover from "@/components/shared/Cover";
import { Helmet } from "react-helmet-async"
import menuBg from "@/assets/menu/banner3.jpg"
import pizzaBg from "@/assets/menu/pizza-bg.jpg"
import saladBg from "@/assets/menu/salad-bg.jpg"
import soupBg from "@/assets/menu/soup-bg.jpg"
import useMenu from "@/hooks/useMenu";
import SectionTitle from "@/components/SectionTitle";
import MenuCategory from "./MenuCategory";
import dessertBg from "@/assets/menu/dessert-bg.jpeg"

const Menu = () => {
    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Menu || Bistro Boss</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover bgImage={menuBg} subTitle={"WOULD U LIKE TO TRY OUR DISH?"} title={"OUR MENU"}></Cover>

            <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
            {/* offered section */}
            <div>
                <MenuCategory items={offered}></MenuCategory>
            </div>

            {/* dessert section */}
            <div className="my-16">
                <MenuCategory items={desserts} title={"dessert"} menuBg={dessertBg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>


            {/* pizza section */}
            <div className="my-16">
                <MenuCategory items={pizza} title={"pizza"} menuBg={pizzaBg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>


            {/* salad section */}
            <div className="my-16">
                <MenuCategory items={salad} title={"salad"} menuBg={saladBg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>

            {/* soup section */}
            <div className="my-16">
                <MenuCategory items={soup} title={"soup"} menuBg={soupBg} subTitle={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></MenuCategory>
            </div>

        </div>
    );
};

export default Menu;