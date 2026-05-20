'use client'

import { DeleteBookingAction } from "@/lib/action";
import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CancelModal from "./CancelModal";

const BookedCarCard = ({ myBooking }) => {
    const router = useRouter();

    const { _id: bookingId, carName, date, image, pickupLocation, username, dailyRentPrice, driverNeeded, message } = myBooking;
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const handleCancelBooking=async()=>{
        await DeleteBookingAction(bookingId);
        router.push('/my-bookings');
    }

    return (
        <Card className="w-full items-stretch md:flex-row">
            <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
                <Image src={image}
                    alt={carName} height={400} width={500}
                ></Image>
            </div>
            <div className="flex flex-1 flex-col gap-4 justify-center">
                <Card.Header className="gap-1">
                    <Card.Title className="pr-8 text-xl font-bold">{carName}</Card.Title>
                    <Card.Description>
                        <span className="font-semibold">Notes:</span> {message}
                    </Card.Description>
                    <Card.Title className="pr-8 text-xl font-bold">${dailyRentPrice}/day</Card.Title>
                </Card.Header>
                <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">Pickup Location: {pickupLocation}</span>
                        <span className="text-xs text-muted">Pickup Date: {formattedDate}</span>
                        <span className="text-xs text-muted">Booked By: {username}</span>
                        <span className="text-xs text-muted">Driver Needed: {driverNeeded ? 'Yes' : 'No'}</span>
                    </div>
                    <CancelModal handleCancelBooking={handleCancelBooking} carName={carName}></CancelModal>
                </Card.Footer>
            </div>
        </Card>
    );
}

export default BookedCarCard;