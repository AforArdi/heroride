'use client'

import AvailableSelect from "@/components/utils/AvailableSelect";
import SelectCarType from "@/components/utils/SelectCarType";
import { AddCarAction } from "@/lib/action";
import { authClient } from "@/lib/auth-client";
import {
    Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField
} from "@heroui/react";
import { useRouter } from "next/navigation";
// import { useState } from "react";
import toast from "react-hot-toast";
import { CiCirclePlus } from "react-icons/ci";

const AddCarPage = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const user = session?.user;
    const { id } = user || {};

    const route = useRouter();
    // const [available, setAvailable] = useState(true);

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        // help from others
        data.availability = data.availability === 'yes';
        data.userId = id;

        // console.log(data);
        if (data) {
            await AddCarAction(data);
            toast.success("Car added successfully!");
            route.push('/my-added-cars');
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
                        <AvailableSelect defaultAvailability={true}></AvailableSelect>


                    </FieldGroup>
                    <Fieldset.Actions>
                        <Button type="submit" className={'w-full bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center'}>
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