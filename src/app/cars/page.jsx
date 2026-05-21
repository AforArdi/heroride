import CarCard from "@/components/utils/CarCard";
import SearchBar from "@/components/utils/SearchBar";
import SelectFilter from "@/components/utils/SelectFilter";
import { getCars } from "@/lib/data";

const ExploreCarsPage = async ({searchParams}) => {
    const searchP = await searchParams;
    // console.log(searchP);

    const cars = await getCars(searchP?.searchWord || '');

    return (
        <div className="max-w-7xl mx-auto my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Choose Your Next Ride</h2>
            {/* search and filter */}
            <div className="flex items-center justify-between my-6">
                <SearchBar></SearchBar>
                <div className="w-full sm:w-auto flex justify-end">
                    <SelectFilter></SelectFilter>
                </div>
            </div>
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

export default ExploreCarsPage;