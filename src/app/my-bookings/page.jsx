import BookedCarCard from "@/components/utils/BookedCarCard";
import { auth } from "@/lib/auth";
import { getMyBookings } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@heroui/react";
import { IoCarOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";

const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers() 
    });
    const userId = session?.user?.id;
    // Added a fallback to an empty array so .map and .length don't break
    const myBookings = await getMyBookings(userId) || []; 

    return (
        <div className="max-w-7xl mx-auto my-20 w-full px-4 xl:px-0">
            {/* Page Header */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-slate-900">My Bookings</h2>
                    <p className="text-muted">Manage and view the cars you have booked for your trips.</p>
                </div>
                <Link href={'/cars'}>
                    <Button className="bg-[#0a192f] text-white rounded-md font-medium px-6 py-2 h-auto">
                        <CiCirclePlus size={20} className="mr-1" /> Book Another Car
                    </Button>
                </Link>
            </div>

            <div className="space-y-6">
                {/* Map over the bookings */}
                {myBookings.map(myBooking => (
                    <BookedCarCard key={myBooking._id} myBooking={myBooking} />
                ))}

                {/* Empty State Handler */}
                {myBookings.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-24 px-4 bg-gray-50/80 rounded-2xl border-2 border-dashed border-gray-200">
                        <div className="bg-white p-5 rounded-full shadow-sm mb-5 border border-gray-100">
                            <IoCarOutline className="text-gray-400" size={48} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No Bookings Yet</h3>
                        <p className="text-gray-500 text-center max-w-sm mb-6 leading-relaxed">
                            You haven't booked any cars yet. Explore our collection and find the perfect ride for your next journey!
                        </p>
                        <Link href={'/explore'}>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium shadow-sm px-6 py-2">
                                <IoCarOutline size={20} className="mr-1.5" /> Explore Cars
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyBookings;