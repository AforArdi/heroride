"use client";
import { ListBox, Select } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const SelectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const filterWord = searchParams.get("filter") || "All";

    const handleFilter = (selectedCarType) => {
        const params = new URLSearchParams(searchParams.toString());

        if (selectedCarType && selectedCarType !== "All") {
            params.set("filter", selectedCarType);
        } else {
            params.delete("filter");
        }

        router.push(`/cars?${params.toString()}`);
    };

    return (
        <div className="w-full sm:w-50 shrink-0">
            <Select
                placeholder="Filter by"
                variant="bordered"
                size="md"
                radius="md"
                className="w-full bg-white"
                onChange={handleFilter}
                value={[filterWord]}
            >
                <Select.Trigger>
                    <Select.Value />
                    <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                    <ListBox>
                        <ListBox.Item id="All" textValue="All">
                            All
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="SUV" textValue="SUV">
                            SUV
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Sedan" textValue="Sedan">
                            Sedan
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Hatchback" textValue="Hatchback">
                            Hatchback
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Luxury" textValue="Luxury">
                            Luxury
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Pickup" textValue="Pickup">
                            Pickup
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Electric" textValue="Electric">
                            Electric
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Sports" textValue="Sports">
                            Sports
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Hybrid" textValue="Hybrid">
                            Hybrid
                            <ListBox.ItemIndicator />
                        </ListBox.Item>
                    </ListBox>
                </Select.Popover>
            </Select>
        </div>
    );
}

export default SelectFilter;