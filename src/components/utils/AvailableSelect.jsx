import { Description, Label, ListBox, Select } from "@heroui/react";

const AvailableSelect = ({available, setAvailable}) => {
    return (
        <Select className="w-full" placeholder="Select one" name="availability"
        onChange={() => setAvailable(!available)}
        >
            <Label>Available for booking?</Label>
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
        </Select>
    );
}

export default AvailableSelect;