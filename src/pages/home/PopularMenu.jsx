import SectionTitle from '@/components/SectionTitle';
import MenuItemCard from '@/components/shared/MenuItemCard';
import useMenu from '@/hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    console.log(menu)

    const popular = menu.filter(item=> item.category === "popular" )
    console.log(popular)

    return (
        <section>
            <SectionTitle heading={"---From our menu---"} subHeading={"POPULAR ITEMS"}></SectionTitle>
            <div className='grid grid-cols-2 gap-10 items-center justify-between w-8/12 mx-auto'>
                {
                    popular?.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='flex items-center justify-center mt-4'>
                <button className="btn btn-outline border-0 border-b-4 text-black   hover:border-0">View full menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;