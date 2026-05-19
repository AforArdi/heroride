import { Description, Label, ListBox, Select } from "@heroui/react";

const DriverNeeded = () => {
    return (
        <Select className="w-full" isRequired name="driverNeeded" placeholder="Select one">
            <Label>Driver Needed</Label>
            <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
                <ListBox>
                    <ListBox.Item id="yes" textValue="Yes">
                        Yes
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="no" textValue="No">
                        No
                        <ListBox.ItemIndicator />
                    </ListBox.Item>
                </ListBox>
            </Select.Popover>
            <Description>Select whether you need a driver</Description>
        </Select>
    );
}

export default DriverNeeded;