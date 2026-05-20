'use client'
import Image from "next/image";
import { FiEdit2, FiTrash2, FiTag, FiUsers, FiLink } from "react-icons/fi";
import { IoLocationOutline, IoCarOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";
import DeleteModal from "@/components/utils/DeleteModal";
import { Button, Chip } from "@heroui/react";
import { DeleteAddedCarAction } from "@/lib/action";
import { redirect } from "next/navigation";
import CarInfoUpdateModal from "./CarInfoUpdateModal";

const AddedCarCard = ({ addedCar }) => {
    const { _id: addedCarId, name, price, carType, imageUrl, seatCapacity, pickupLocation, description, availability } = addedCar;

    const handleDelete = async ()=>{
        await DeleteAddedCarAction(addedCarId);
        redirect('/my-added-cars');
    }

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">

            {/* Left Side: Car Image */}
            <div className="relative w-full lg:w-70 h-50 lg:h-auto rounded-lg overflow-hidden shrink-0 bg-gray-100">
                {imageUrl ? (
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
            </div>

            {/* Right Side: Car Details */}
            <div className="flex flex-col grow w-full">

                {/* Top Header Row: Title, Badge, and Action Buttons */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                        <Chip size="sm" variant="flat" color="secondary" className="font-medium text-xs px-1">
                            {carType}
                        </Chip>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* update car info modal */}
                        <CarInfoUpdateModal addedCar={addedCar}></CarInfoUpdateModal>
                        {/* delete this car modal */}
                        <DeleteModal handleDelete={handleDelete} addedCar={addedCar}></DeleteModal>
                    </div>
                </div>

                {/* Bottom Grid: Specifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-4">

                    {/* Column 1 */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <FiTag className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Price</p>
                                <p className="text-sm font-medium text-gray-900">${price}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <FiUsers className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Seat Capacity</p>
                                <p className="text-sm font-medium text-gray-900">{seatCapacity}</p>
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
                            <div className="mt-1.5 shrink-0 w-2 h-2 rounded-full bg-green-500" />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Availability</p>
                                <p className={`text-sm font-semibold ${availability ? 'text-green-600' : 'text-red-500'}`}>
                                    {availability ? 'Available' : 'Unavailable'}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2 pr-2">
                            <HiOutlineDocumentText className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Description</p>
                                <p className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <IoCarOutline className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div>
                                <p className="text-xs text-gray-500 mb-0.5">Car Type</p>
                                <p className="text-sm font-medium text-gray-900">{carType}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-2">
                            <FiLink className="text-gray-400 mt-1 shrink-0" size={16} />
                            <div className="w-full overflow-hidden">
                                <p className="text-xs text-gray-500 mb-0.5">Image URL</p>
                                <p className="text-sm font-medium text-gray-900 truncate max-w-45">
                                    {imageUrl}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default AddedCarCard;