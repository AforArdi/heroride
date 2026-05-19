import { getCarById } from "@/lib/data";
import { Button, Card, Chip, Separator, Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { 
    FaStar, 
    FaRegHeart, 
    FaChevronLeft, 
    FaChevronRight 
} from "react-icons/fa";
import { 
    IoLocationOutline, 
    IoCarOutline, 
    IoSpeedometerOutline 
} from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { TbManualGearbox } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { MdOutlineDateRange, MdOutlineCheckCircleOutline, MdOutlineSecurity, MdOutlineHeadsetMic } from "react-icons/md";
import BookFormModal from "@/components/utils/BookFormModal";

const CarsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const car = await getCarById(id);
    
    const {
        carName, dailyRentPrice, carType, image, seatCapacity, transmission, fuelType, pickupLocation, description, availability, mileage, bookingCount, owner, features
    } = car;

    return ( 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500 mb-6">
                <Link href="/" className="hover:text-gray-900">Home</Link>
                <span>›</span>
                <Link href="/cars" className="hover:text-gray-900">Explore Cars</Link>
                <span>›</span>
                <span className="text-gray-900">{carName}</span>
            </div>

            {/* layout parent */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* left side */}
                <div className="lg:col-span-2 space-y-6">
                    
                    {/* Main Featured Image */}
                    <div className="relative w-full h-100 md:h-125 bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                        <Chip className="absolute top-5 left-5 z-10 bg-white font-semibold text-blue-700 shadow-sm px-2">
                            {carType}
                        </Chip>
                        <Chip className="absolute top-5 right-5 z-10 font-semibold shadow-sm px-2 bg-green-50 text-green-700">
                            {availability ? 'Available' : 'Not Available'}
                        </Chip>

                        <Image 
                            src={image} 
                            alt={carName} fill className="object-cover" priority unoptimized
                        />
                    </div>

                    {/* features section */}
                    <Card className="p-6 shadow-sm border border-gray-100 rounded-2xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Features</h3>
                        <div className="flex flex-wrap gap-3">
                            {features?.map((feature, idx) => (
                                <Chip key={idx} variant="bordered" className="border-gray-200 text-gray-700 font-medium py-4 px-2">
                                    {feature}
                                </Chip>
                            ))}
                        </div>
                    </Card>

                    {/* about car section */}
                    <Card className="p-6 shadow-sm border border-gray-100 rounded-2xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">About This Car</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {description}
                        </p>
                    </Card>
                </div>


                {/* right side */}
                <div className="space-y-6">
                    
                    {/* Main Action Card */}
                    <Card className="p-6 shadow-sm border border-gray-100 rounded-2xl">
                        {/* Title & Booking Count Badge */}
                        <div className="flex flex-col gap-2 items-start">
                            <h1 className="text-2xl font-bold text-gray-900">{carName}</h1>
                            <Chip size="sm" variant="flat" color="primary" className="font-semibold text-xs px-2">
                                🔥 {bookingCount} {bookingCount === 1 ? 'Booking' : 'Bookings'}
                            </Chip>
                        </div>

                        {/* Price per day */}
                        <div className="mt-6">
                            <span className="text-xs text-gray-500 font-medium">Daily Rent</span>
                            <div className="flex items-baseline gap-1 mt-1">
                                <span className="text-4xl font-extrabold text-gray-900">${dailyRentPrice}</span>
                                <span className="text-gray-500 font-medium text-sm">/ day</span>
                            </div>
                        </div>

                        {/* Book Now Modal */}
                        <div className="mt-6">
                            {/* need to add modal later */}
                            <BookFormModal car={car}></BookFormModal>
                        </div>

                        <Separator className="my-6 bg-gray-100" />

                        {/* Specifications */}
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><IoCarOutline size={18}/> Car Type</span>
                                <span className="font-semibold text-gray-900">{carType}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><FiUsers size={18}/> Seats</span>
                                <span className="font-semibold text-gray-900">{seatCapacity} Seats</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><TbManualGearbox size={18}/> Transmission</span>
                                <span className="font-semibold text-gray-900">{transmission}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><BsFuelPump size={18}/> Fuel Type</span>
                                <span className="font-semibold text-gray-900">{fuelType}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><IoSpeedometerOutline size={18}/> Mileage</span>
                                <span className="font-semibold text-gray-900">{mileage}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-2 text-gray-500 font-medium"><IoLocationOutline size={18}/> Pick-up Location</span>
                                <span className="font-semibold text-gray-900">{pickupLocation}</span>
                            </div>
                        </div>
                    </Card>

                    {/* Trust Badges Card */}
                    <Card className="p-6 shadow-sm border border-gray-100 rounded-2xl flex flex-row justify-between text-center">
                        <div className="flex flex-col items-center gap-2">
                            <MdOutlineCheckCircleOutline size={24} className="text-gray-700" />
                            <div>
                                <p className="text-[10px] font-bold text-gray-900">Free Cancellation</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">Up to 24 hours</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MdOutlineSecurity size={24} className="text-gray-700" />
                            <div>
                                <p className="text-[10px] font-bold text-gray-900">No Hidden Charges</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">Transparent pricing</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <MdOutlineHeadsetMic size={24} className="text-gray-700" />
                            <div>
                                <p className="text-[10px] font-bold text-gray-900">24/7 Support</p>
                                <p className="text-[10px] text-gray-400 mt-0.5">We are here to help</p>
                            </div>
                        </div>
                    </Card>

                    {/* Owner Details */}
                    <Card className="p-5 shadow-sm border border-gray-100 rounded-2xl flex flex-row items-center gap-4 bg-gray-50/50">
                        <div className="flex flex-col">
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Hosted By</span>
                            <span className="text-base font-bold text-gray-900 leading-tight">{owner?.name}</span>
                            <a href={`mailto:${owner?.email}`} className="text-xs text-blue-600 hover:underline mt-0.5">
                                {owner?.email}
                            </a>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default CarsDetailsPage;