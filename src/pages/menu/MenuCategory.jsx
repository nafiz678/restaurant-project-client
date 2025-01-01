import Cover from "@/components/shared/Cover";
import MenuItemCard from "@/components/shared/MenuItemCard";
import { Link } from "react-router-dom";


const MenuCategory = ({ items, title, subTitle, menuBg }) => {
    return (
        <div>
            {title && subTitle && <Cover bgImage={menuBg} subTitle={subTitle} title={title}></Cover>}
            <div className='grid mt-16 grid-cols-2 gap-10 items-center justify-between w-8/12 mx-auto'>
                {
                    items?.map(item => <MenuItemCard key={item._id} item={item}></MenuItemCard>)
                }
            </div>
            <div className='flex items-center justify-center mt-4'>
                <Link to={`/order/${title || "offered"}`}>
                    <button className="btn btn-outline border-0 border-b-4 text-black   hover:border-0">View full menu</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;