import { auth } from "@/lib/auth";
import { getAddedCarsById } from "@/lib/data";
import { Button, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { CiCirclePlus } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import AddedCarCard from "@/components/utils/AddedCarCard";

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });
    const user = session?.user;
    const userId = user?.id;

    const addedCars = await getAddedCarsById(userId) || [];


    return (
        <div className="max-w-7xl mx-auto my-20 w-full px-4 xl:px-0">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-slate-900">My Added Cars</h2>
                    <p className="text-muted">Manage the cars you have added to HeroRide.</p>
                </div>
                <Link href={'/add-car'}>
                    <Button className="bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center">
                        <CiCirclePlus size={20} className="mr-1" /> Add New Car
                    </Button>
                </Link>
            </div>

            <div className="space-y-6">
                {addedCars.map((addedCar) => {
                    return <AddedCarCard key={addedCar._id} addedCar={addedCar}></AddedCarCard>;
                })}

                {/* Empty State Handler */}
                {addedCars.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 px-4 bg-gray-50/80 rounded-2xl border-2 border-dashed border-gray-200">
                        <div className="bg-white p-5 rounded-full shadow-sm mb-5 border border-gray-100">
                            <IoCarOutline className="text-gray-400" size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Your Garage is Empty</h3>
                        <p className="text-gray-500 text-center max-w-sm mb-6 leading-relaxed">
                            You haven't listed any cars on HeroRide yet. Add your first vehicle to start receiving bookings and earning money!
                        </p>
                        <Link href={'/add-car'}>
                            <Button className="bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center">
                                <CiCirclePlus size={20} className="mr-1.5" /> Add Your First Car
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyAddedCarsPage;