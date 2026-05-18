import { getReviews } from "@/lib/data";
import ReviewCard from "../utils/ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = async () => {
    const reviews = await getReviews();
    console.log(reviews);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-bold mb-6 text-center">What Our Customers Say</h2>
            <p className="text-center text-muted">Real experiences from real people who chose Hero Ride for their journeys.</p>
            <div className="flex items-center gap-6">
                <Marquee speed={40} pauseOnHover gradient={false}>
                    {
                        reviews.map((review) => (
                            <ReviewCard key={review._id} review={review} />
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
}

export default Reviews;