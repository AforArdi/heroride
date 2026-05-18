import { getCars } from "@/lib/data";
import CarCard from "../utils/CarCard";

const PopularCars = async () => {
    const cars = await getCars();
    // console.log(cars);

    return ( 
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Most Popular Cars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    cars.map(car => (
                        <CarCard key={car._id} car={car}></CarCard>
                    ))
                }
            </div>
        </div>
     );
}
 
export default PopularCars;