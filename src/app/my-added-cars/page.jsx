import { auth } from "@/lib/auth";
import { getAddedCarsById } from "@/lib/data";
import { Button, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import { FiEdit2, FiTrash2, FiTag, FiUsers, FiLink } from "react-icons/fi";
import { IoLocationOutline, IoCarOutline } from "react-icons/io5";
import { HiOutlineDocumentText } from "react-icons/hi2";

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const userId = user?.id;

    const addedCars = await getAddedCarsById(userId) || [];
    // console.log(addedCars);
    const {name, price, carType, imageUrl, seatCapacity, pickupLocation, description, availability} = addedCars || {};

    return (
        <div className="max-w-7xl mx-auto my-20 w-full">
            {/* My Added Cars is gonna show here: {addedCars.length} */}
            <div className="mb-6 flex items-center justify-between">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold">My Added Cars</h2>
                    <p className="text-muted">You can edit and update your car's info.</p>
                </div>
                <Link href={'/add-car'}>
                    <Button variant="outline" className={'rounded-none'}>
                        <CiCirclePlus></CiCirclePlus> Add New Car
                    </Button>
                </Link>
            </div>
            <div className="space-y-6">
                {addedCars.map((addedCar) => {
                    const { _id, name, price, carType, imageUrl, seatCapacity, pickupLocation, description, availability } = addedCar;

                    return (
                        <div key={_id} className="flex flex-col lg:flex-row gap-6 p-5 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                            
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
                                        {/* Color code the badge based on type if you want, using a generic purple/blue here as default */}
                                        <Chip size="sm" variant="flat" color="secondary" className="font-medium text-xs px-1">
                                            {carType}
                                        </Chip>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {/* You will add your onClick handlers to these buttons later */}
                                        <Button size="sm" variant="bordered" className="border-blue-600 text-blue-600 font-medium rounded-md">
                                            <FiEdit2 size={14} className="mr-1" /> Update
                                        </Button>
                                        <Button size="sm" variant="bordered" color="danger" className="font-medium rounded-md">
                                            <FiTrash2 size={14} className="mr-1" /> Delete
                                        </Button>
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
                                                <p className="text-sm font-medium text-gray-900 truncate max-w-[180px]">
                                                    {imageUrl}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Empty State Handler */}
                {addedCars.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500">You haven't added any cars yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyAddedCarsPage;