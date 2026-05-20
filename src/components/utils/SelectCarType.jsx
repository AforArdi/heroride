"use client";
import { ComboBox, Description, Input, Label, ListBox } from "@heroui/react";

const SelectCarType = ({defaultCarType}) => {
    return (
        <ComboBox className="w-full" isRequired name="carType"
        defaultSelectedKeys={[defaultCarType ? defaultCarType.toLowerCase() : ""]}
        >
            <Label>Car Type</Label>
            <ComboBox.InputGroup>
                <Input placeholder="Search car type" />
                <ComboBox.Trigger />
            </ComboBox.InputGroup>
            <ComboBox.Popover>
                <ListBox>
                    <ListBox.Item id="suv" textValue="SUV">
                        SUV
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="sedan" textValue="Sedan">
                        Sedan
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="hatchback" textValue="Hatchback">
                        Hatchback
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="luxury" textValue="Luxury">
                        Luxury
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="pickup" textValue="Pickup">
                        Pickup
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="electric" textValue="Electric">
                        Electric
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="sports" textValue="Sports">
                        Sports
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="hybrid" textValue="Hybrid">
                        Hybrid
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </ComboBox.Popover>
            <Description>Search and select your car type</Description>
        </ComboBox>
    );
}

export default SelectCarType;