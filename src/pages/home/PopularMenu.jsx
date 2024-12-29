import SectionTitle from '@/components/SectionTitle';
import MenuItemCard from '@/components/shared/MenuItemCard';
import React, { useEffect, useState } from 'react';

const PopularMenu = () => {
    const [menu, setMenu] = useState()
    const [loading , setLoading] = useState(true)

    useEffect(()=>{
        fetch("menu.json")
        .then(res=> res.json())
        .then(data=>{
            const popularItems = data.filter(item=> item.category === "popular")
            setMenu(popularItems)
            setLoading(false)
        })
    }, [])
    if(!loading)
    {
        console.log(menu)
    }

    return (
        <section>
            <SectionTitle heading={"---From our menu---"} subHeading={"POPULAR ITEMS"}></SectionTitle>
             <div className='grid grid-cols-2 gap-10 items-center justify-between w-8/12 mx-auto'>
                {
                    menu?.map(item=> <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
             </div>
        </section>
    );
};

export default PopularMenu;