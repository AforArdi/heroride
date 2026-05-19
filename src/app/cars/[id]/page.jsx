import { getCarById } from "@/lib/data";

const CarsDetailsPage = async ({ params }) => {
    const { id } = await params;
    const car = await getCarById(id);
    const {carName, dailyRentPrice, carType, image, seatCapacity, transmission, fuelType, pickupLocation, description, availability, mileage, bookingCount, owner, features} = car;
    // console.log(car);

    return ( 
        <div className="max-w-7xl mx-auto">
            Cars Details Page
        </div>
     );
}
 
export default CarsDetailsPage;