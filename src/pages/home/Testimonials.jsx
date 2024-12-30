import SectionTitle from "@/components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState();


    useEffect(() => {
        fetch("reviews.json")
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20 w-9/12 mx-auto">
            <SectionTitle subHeading={"---What our client say---"} heading={"TESTIMONIALS"}></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => 
                    <SwiperSlide key={review._id}>

                        <div className="mx-24 flex flex-col items-center my-16">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                onChange={setRating}
                                isRequired
                            />
                            <p>{review.details}</p>
                            <h3 className="text-3xl text-orange-400  ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;