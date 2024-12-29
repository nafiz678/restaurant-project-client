import SectionTitle from '@/components/SectionTitle';
import React from 'react';
import featuredImage  from "@/assets/home/featured.jpg"
import "./featured.css"
import useParallax from '@/hooks/useParralex';

const FeaturedItem = () => {
    // const offset = useParallax();
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'
        >
            <SectionTitle heading={"FROM OUR MENU"} subHeading={"---Check it out---"}></SectionTitle>
            <div className='md:flex justify-center bg-slate-700 bg-opacity-40 items-center pb-20 pt-12 px-36 '>
                <div>
                    <img src={featuredImage} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>Aug 20, 2029</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quia.</p>
                    <button className="btn btn-outline border-0 border-b-4 text-white hover:border-0">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedItem;