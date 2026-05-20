"use client";

import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
// import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    const router = useRouter();

    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    // console.log(searchParams)

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString());
        if (search) {
            params.set('searchWord', search);
        } else {
            params.delete('searchWord');
        }
        router.push(`/cars?${params.toString()}`);
    }
    return (
        <div className="flex items-center gap-2 w-full sm:max-w-md">
            <Input
                placeholder="Search for your next ride..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                // startContent={<FiSearch className="text-gray-400" size={18} />}
                className="w-full"
                size="md"
                variant="bordered"
                radius="md"
            />
            <Button
                onClick={handleSearch}
                className="bg-[#2D4059] text-white font-medium rounded-md px-6 shadow-sm hover:bg-[#1a2636] transition-colors"
                size="md"
            >
                Search
            </Button>
        </div>
    );
}

export default SearchBar;