import { getReviews } from "@/lib/data";
import ReviewCard from "../utils/ReviewCard";
import Marquee from "react-fast-marquee";
import { Chip } from "@heroui/react";

const Reviews = async () => {
    const reviews = await getReviews();
    // console.log(reviews);

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="flex justify-center mb-3">
                <Chip color="success" className="px-4 py-1">
                    <Chip.Label>Customer's Feedback</Chip.Label>
                </Chip>
            </div>
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