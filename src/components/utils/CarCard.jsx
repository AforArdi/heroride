'use client'
import { Card, Chip, Button } from "@heroui/react";
import { CircleFill } from "@gravity-ui/icons";
import Image from "next/image";
import { FaCarSide, FaRegUser, FaGasPump } from "react-icons/fa";
import { TbManualGearbox } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { MdSevereCold, MdOutlineBluetooth, MdVideocam, MdGpsFixed } from "react-icons/md";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

// Helper map to quickly render matching icons for the feature chips at the bottom
const featureIconMap = {
    "AC": <MdSevereCold className="text-blue-500" size={14} />,
    "Bluetooth": <MdOutlineBluetooth className="text-blue-500" size={14} />,
    "Reverse Camera": <MdVideocam className="text-blue-500" size={14} />,
    "GPS": <MdGpsFixed className="text-blue-500" size={14} />
};

const CarCard = ({ car }) => {
    const {
        carName, carType, availability, image, seatCapacity, transmission, fuelType, pickupLocation, dailyRentPrice, features, _id } = car;

    return (
        <Card className="relative overflow-hidden max-w-xl w-full bg-white dark:bg-[#1E293B] shadow-sm border border-gray-100 rounded-2xl p-0">
            <Chip
                className="absolute top-4 left-4 z-10 bg-white/95 text-[#1e40af] font-semibold text-xs border border-gray-100 shadow-sm px-2"
            >
                <Chip.Label>{carType}</Chip.Label>
            </Chip>
            <Chip
                color="success"
                className={'absolute top-4 right-4 z-10 font-semibold text-xs border shadow-sm px-2'}
            >
                <Chip.Label>{availability ? 'Available' : 'Not Available'}</Chip.Label>
            </Chip>

            <div className="relative w-full h-56 bg-[#f8fafc]">
                <Image
                    src={image}
                    alt={carName}
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                />
            </div>

            <div className="p-6 space-y-5">
                <div className="flex justify-between items-start gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-[#1e293b] tracking-tight">{carName}</h2>
                    </div>
                    <div className="text-right">
                        <span className="block text-xs font-medium text-gray-400">Daily Rent</span>
                        <div className="flex items-baseline justify-end">
                            <span className="text-3xl font-black text-[#2D4059]">${dailyRentPrice}</span>
                            <span className="text-xs font-semibold text-gray-500 ml-1">/ day</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-gray-500 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-1.5">
                        <FaRegUser size={14} className="text-gray-400" />
                        <span>{seatCapacity} Seats</span>
                    </div>
                    <span className="text-gray-200">|</span>
                    <div className="flex items-center gap-1.5">
                        <TbManualGearbox size={16} className="text-gray-400" />
                        <span>{transmission}</span>
                    </div>
                    <span className="text-gray-200">|</span>
                    <div className="flex items-center gap-1.5">
                        <FaGasPump size={14} className="text-gray-400" />
                        <span>{fuelType}</span>
                    </div>
                    <span className="text-gray-200">|</span>
                    <div className="flex items-center gap-1.5">
                        <IoLocationOutline size={16} className="text-gray-400" />
                        <span>{pickupLocation}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-1">
                    {/* Dynamic Feature Badges */}
                    <div className="flex flex-wrap gap-2">
                        {features?.map((feature, index) => (
                            <Chip
                                key={index}
                                variant="flat"
                                size="sm"
                                className="bg-[#f1f5f9] text-[#475569] font-semibold text-xs border border-gray-200/60 rounded-lg p-1.5"
                            >
                                {/* Render the icon and text safely inside the Chip as children */}
                                <div className="flex items-center gap-1.5">
                                    {featureIconMap[feature]}
                                    <span>{feature}</span>
                                </div>
                            </Chip>
                        ))}
                    </div>

                    <Link href={`/cars/${_id}`}>
                        <Button
                            color="primary"
                            size="md"
                            className="bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-xl hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center"
                            endContent={<HiOutlineArrowNarrowRight size={18} />}
                        >
                            View Details
                        </Button>
                    </Link>
                </div>

            </div>
        </Card>
    );
}

export default CarCard;