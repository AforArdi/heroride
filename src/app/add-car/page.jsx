'use client'

import SelectCarType from "@/components/utils/SelectCarType";
import { AddCarAction } from "@/lib/action";
import { FloppyDisk } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    FieldGroup,
    Fieldset,
    Form,
    Input,
    Label,
    TextArea,
    TextField,
    Checkbox
} from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

const AddCarPage = () => {
    const [available, setAvailable] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // help from others
        data.availability = available;

        console.log(data);
        await AddCarAction(data);

        if(data){
            alert("Car added successfully!");
            redirect('/my-added-cars');
        }
    }

    return (
        <div className="my-20">
            <div className="mb-6 space-y-2">
                <h2 className="text-3xl font-bold text-center">Add New Car</h2>
                <p className="text-muted text-center">Fill in the details to add a new car to our fleet.</p>
            </div>
            <Form className="max-w-96 mx-auto" onSubmit={onSubmit}>
                <Fieldset>
                    <FieldGroup>
                        {/* car name */}
                        <TextField
                            isRequired
                            name="name"
                            validate={(value) => {
                                if (value.length < 3) {
                                    return "Name must be at least 3 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Car Name</Label>
                            <Input placeholder="BMW S Class" />
                            <FieldError />
                        </TextField>
                        {/* car price */}
                        <TextField
                            isRequired
                            name="price"
                            type="number"
                            validate={(value) => {
                                if (value <= 0) {
                                    return "Price must be a positive number";
                                }
                                return null;
                            }}
                        >
                            <Label>Car Price</Label>
                            <Input placeholder="$100" />
                            <FieldError />
                        </TextField>

                        {/* car type */}
                        <SelectCarType></SelectCarType>

                        {/* car image url */}
                        <TextField
                            isRequired
                            name="imageUrl"
                            type="url"
                        >
                            <Label>Car Image URL</Label>
                            <Input placeholder="Paste Car Image URL" />
                            <FieldError />
                        </TextField>

                        {/* seat capacity */}
                        <TextField
                            isRequired
                            name="seatCapacity"
                            type="number"
                            validate={(value) => {
                                if (value <= 0) {
                                    return "Seat capacity must be a positive number";
                                }
                                return null;
                            }}
                        >
                            <Label>Seat Capacity</Label>
                            <Input placeholder="Total number of seats" />
                            <FieldError />
                        </TextField>

                        {/* Pickup Location */}
                        <TextField
                            isRequired
                            name="pickupLocation"
                            validate={(value) => {
                                if (value.length < 4) {
                                    return "Pickup location must be at least 4 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Pickup Location</Label>
                            <Input placeholder="Enter pickup location" />
                            <FieldError />
                        </TextField>

                        {/* description */}
                        <TextField
                            isRequired
                            name="description"
                            validate={(value) => {
                                if (value.length < 10) {
                                    return "Description must be at least 10 characters";
                                }
                                return null;
                            }}
                        >
                            <Label>Description</Label>
                            <TextArea placeholder="About the car" />
                            <Description>Minimum 10 characters</Description>
                            <FieldError />
                        </TextField>

                        {/* Availability status */}
                        <Checkbox id="basic-terms" name="availability"
                            isSelected={available}
                            onChange={() => setAvailable(!available)}
                        >
                            <Checkbox.Control>
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Content>
                                <Label htmlFor="basic-terms">Car is available</Label>
                            </Checkbox.Content>
                        </Checkbox>


                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit" className={'w-full'}>
                            <CiCirclePlus></CiCirclePlus>
                            Add Car
                        </Button>
                    </Fieldset.Actions>
                </Fieldset>
            </Form>
        </div>
    );
}

export default AddCarPage;