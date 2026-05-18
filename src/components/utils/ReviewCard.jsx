import {Separator} from "@heroui/react";
import {Card, Link} from "@heroui/react";
import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const {name, message} = review;

    return (
        <Card className="w-100 space-y-2">
            <Card.Header>
                <FaQuoteLeft className="mb-2" size={30} color="#FF7F6E" />
                <Card.Description className="text-[#2D4059] text-lg">
                    {message}
                </Card.Description>
            </Card.Header>
            <Separator />
            <Card.Footer className="text-xl text-[#2D4059] font-bold">
                {name}
            </Card.Footer>
        </Card>
    );
}

export default ReviewCard;