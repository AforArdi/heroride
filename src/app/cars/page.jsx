import CarCard from "@/components/utils/CarCard";
import SearchBar from "@/components/utils/SearchBar";
import SelectFilter from "@/components/utils/SelectFilter";
import { getCars } from "@/lib/data";

const ExploreCarsPage = async ({ searchParams }) => {
    const sParams = await searchParams;

    const searchP = await sParams?.searchWord || '';
    const filterP = await sParams?.filter || '';
    // console.log(searchP);
    // console.log(filterP);

    const cars = await getCars(searchP, filterP);

    return (
        <div className="max-w-7xl mx-auto w-full my-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Choose Your Next Ride</h2>
            {/* search and filter */}
            <div className="flex flex-col sm:flex-row items-center justify-between my-6 gap-4">
                <SearchBar></SearchBar>
                <div className="w-full sm:w-auto flex justify-end">
                    <SelectFilter></SelectFilter>
                </div>
            </div>
            {cars.length === 0 ?
                <div className="flex flex-col items-center justify-center py-20 text-center bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-2xl font-bold text-[#2D4059] mb-2">
                        No rides found
                    </h3>
                    <p className="text-gray-500 max-w-md">
                        We couldn't find any cars matching your current search or filter. Try selecting a different category or clearing your search!
                    </p>
                </div>
                : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        cars.map(car => (
                            <CarCard key={car._id} car={car}></CarCard>
                        ))
                    }
                </div>}
        </div>
    );
}

export default ExploreCarsPage;