'use client'

import { DeleteBookingAction } from "@/lib/action";
import { Chip } from "@heroui/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CancelModal from "./CancelModal";

// Icons 
import { FiTag, FiUser, FiCalendar } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiSteeringWheel } from "react-icons/pi";

const BookedCarCard = ({ myBooking }) => {
    const router = useRouter();

    const { _id: bookingId, carName, carType, date, image, pickupLocation, username, dailyRentPrice, driverNeeded, message } = myBooking;
    
    const formattedDate = new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const handleCancelBooking = async () => {
        await DeleteBookingAction(bookingId);
        router.refresh(); // Instantly updates the list without a full page reload!
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
            
            {/* Left Side: Car Image */}
            <div className="relative w-full lg:w-70 h-50 lg:h-auto rounded-lg overflow-hidden shrink-0 bg-gray-100">
                {image ? (
                    <Image 
                        src={image} 
                        alt={carName} 
                        fill 
                        className="object-cover"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
            </div>

            {/* Right Side: Booking Details */}
            <div className="flex flex-col grow w-full">
                
                {/* Top Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{carName}</h3>
                        {carType && (
                            <Chip size="sm" variant="flat" color="primary" className="font-medium text-xs px-1">
                                {carType}
                            </Chip>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        {/* Custom Modal cleanly integrated into the header! */}
                        <CancelModal handleCancelBooking={handleCancelBooking} carName={carName} />
                    </div>
                </div>

                {/* Bottom Grid: Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">
                    
                    {/* Column 1 */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <FiTag className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Daily Rent</p>
                                <p className="text-sm font-medium text-gray-900">${dailyRentPrice}/day</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <FiCalendar className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Pickup Date</p>
                                <p className="text-sm font-medium text-gray-900">{formattedDate}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <IoLocationOutline className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Pickup Location</p>
                                <p className="text-sm font-medium text-gray-900">{pickupLocation}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <PiSteeringWheel className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Driver Needed</p>
                                <p className={`text-sm font-semibold ${driverNeeded ? 'text-blue-600' : 'text-gray-600'}`}>
                                    {driverNeeded ? 'Yes, Chauffeur Required' : 'No, Self-Drive'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pr-2">
                            <HiOutlineDocumentText className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Special Notes</p>
                                <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                                    {message || "No special requests."}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <FiUser className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Booked By</p>
                                <p className="text-sm font-medium text-gray-900">{username}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-blue-500" />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Booking Status</p>
                                <p className="text-sm font-semibold text-blue-600">Confirmed</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default BookedCarCard;