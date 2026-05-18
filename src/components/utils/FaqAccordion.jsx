import { ChevronDown } from "@gravity-ui/icons";
import { Accordion } from "@heroui/react";
import { FaIdCard } from "react-icons/fa";
import { IoCarSportOutline } from "react-icons/io5";
import { MdEditCalendar } from "react-icons/md";
import { RiRoadsterLine } from "react-icons/ri";

const items = [
    {
        content:
            "To rent a car with Hero Ride, you’ll typically need a valid driving license, a national ID or passport, and a payment method. Some premium vehicles may require additional verification before confirmation.",
        icon: <FaIdCard />,
        title: "What documents do I need to rent a car?",
    },
    {
        content:
            "Yes, bookings can usually be modified or canceled before the scheduled rental time. Availability and pricing may change depending on the selected vehicle and booking period.",
        icon: <MdEditCalendar />,
        title: "Can I cancel or modify my booking later?",
    },
    {
        content: "Most vehicles are available instantly, but some cars may become temporarily unavailable due to maintenance, ongoing rentals, or owner approval requirements. You can always check the live availability status directly from the car details page.",
        icon: <IoCarSportOutline />,
        title: "Are all cars available for instant booking?",
    },
    {
        content: "Yes, Hero Ride offers vehicles suitable for long-distance trips, family tours, and business travel. Before confirming your booking, you can review each car’s features, seating capacity, and comfort options to choose the best fit for your journey.",
        icon: <RiRoadsterLine />,
        title: "Do you offer cars for long-distance travel?",
    },
]

const FaqAccordion = () => {
    return (
        <Accordion className="w-full max-w-xl">
            {items.map((item, index) => (
                <Accordion.Item key={index}>
                    <Accordion.Heading>
                        <Accordion.Trigger className={'text-2xl font-semibold text-[#1e293b] flex items-center gap-3 hover:bg-[#FF7F6E] hover:text-white px-4 py-3 transition-colors duration-300'}>
                            {item.icon ? (
                                <span className="mr-3 size-4 shrink-0 text-muted">{item.icon}</span>
                            ) : null}
                            {item.title}
                            <Accordion.Indicator>
                                <ChevronDown />
                            </Accordion.Indicator>
                        </Accordion.Trigger>
                    </Accordion.Heading>
                    <Accordion.Panel>
                        <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Panel>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}

export default FaqAccordion;