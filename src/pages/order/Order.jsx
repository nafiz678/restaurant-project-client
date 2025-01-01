import React, { useState } from "react";
import orderCover from "@/assets/shop/banner2.jpg";
import Cover from "@/components/shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tab.css"
import useMenu from "@/hooks/useMenu";
import FoodCard from "@/components/shared/FoodCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ["salad", "pizza", 'soup', "dessert", "offered"]
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);


    const [menu] = useMenu()
    const desserts = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")

    return (
        <div>
            <Helmet>
                <title>Order || Bistro Boss</title>
            </Helmet>
            <Cover
                bgImage={orderCover}
                title={"OUR SHOP"}
                subTitle={"Would you like to try a dish?"}
            ></Cover>

            <div className="flex items-center justify-center mt-10">
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    className="custom-tabs"
                >
                    <TabList className="flex items-center justify-center gap-6">

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 0 ? "text-orange-500 underline !important" : "text-gray-500"
                                }`}
                        >
                            salad
                        </Tab>

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 1 ? "text-orange-500 underline !important" : "text-gray-500"
                                }`}
                        >
                            pizza
                        </Tab>

                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 2 ? "text-orange-500 underline !important" : "text-gray-500"
                                }`}
                        >
                            soup
                        </Tab>


                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 3 ? "text-orange-500 underline !important" : "text-gray-500"
                                }`}
                        >
                            Dessert
                        </Tab>


                        <Tab
                            className={`border-none cursor-pointer text-lg font-medium uppercase p-2 ${tabIndex === 4 ? "text-orange-500 underline !important" : "text-gray-500"
                                }`}
                        >
                            Offered
                        </Tab>

                    </TabList>
                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {salad.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {pizza.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {soup.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {desserts.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-10/12 mx-auto mt-6 gap-5 ">
                            {offered.map(item => <FoodCard key={item._id} item={item} ></FoodCard>)}
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Order;
