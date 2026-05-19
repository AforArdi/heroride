import BookedCarCard from "@/components/utils/BookedCarCard";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { getMyBookings } from "@/lib/data";
import { headers } from "next/headers";

const MyBookings = async () => {
    // const {
    //     data: session,
    //     isPending, //loading state
    //     error, //error object
    //     refetch //refetch the session
    // } = authClient.useSession()
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const userId = session?.user?.id;

    const myBookings = await getMyBookings(userId);
    console.log(myBookings);

    return (
        <div className="max-w-7xl w-[70%] mx-auto mt-10 mb-20">
            <h2 className="text-3xl font-bold text-center">List of Cars You Booked</h2>
            <div className="space-y-4">
                {
                    myBookings.map(myBooking=>
                        <BookedCarCard key={myBooking._id} myBooking={myBooking}></BookedCarCard>
                    )
                }
            </div>
        </div>
    );
}

export default MyBookings;