import { auth } from "@/lib/auth";
import { getAddedCarsById } from "@/lib/data";
import { headers } from "next/headers";

const MyAddedCarsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    const userId = user?.id;

    const addedCars = await getAddedCarsById(userId);
    console.log(addedCars);

    return (
        <div className="max-w-7xl mx-auto">
            My Added Cars is gonna show here
        </div>
    );
}

export default MyAddedCarsPage;