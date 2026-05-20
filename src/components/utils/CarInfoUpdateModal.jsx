"use client";
import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Input,
    Label,
    TextArea,
    TextField,
    Modal,
    Surface
} from "@heroui/react";
import { FiEdit2 } from "react-icons/fi";
import AvailableSelect from "./AvailableSelect";
import SelectCarType from "./SelectCarType";
import { UpdateAddedCarAction } from "@/lib/action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CarInfoUpdateModal = ({addedCar}) => {
    const router = useRouter();

    const { _id: addedCarId, name, price, carType, imageUrl, seatCapacity, pickupLocation, description, availability } = addedCar;

    const onSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedData = Object.fromEntries(formData.entries());
        updatedData.availability = updatedData.availability === 'yes';

        // console.log(updatedData);
        if(updatedData){
            await UpdateAddedCarAction(addedCarId, updatedData);
            toast.success("Car info updated successfully!");
            router.refresh();
        }    
    }

    return (
        <Modal>
            <Button size="sm" variant="bordered" className="border-blue-600 text-blue-600 font-medium rounded-md">
                <FiEdit2 size={14} className="mr-1" /> Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we'll get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    {/* price */}
                                    <TextField
                                        isRequired
                                        name="price"
                                        type="number"
                                        defaultValue={price}
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

                                    {/* description */}
                                    <TextField
                                        isRequired
                                        name="description"
                                        defaultValue={description}
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

                                    {/* availability */}
                                    <AvailableSelect defaultAvailability={availability}></AvailableSelect>

                                    {/* Image */}
                                    <TextField
                                        isRequired
                                        name="imageUrl"
                                        type="url"
                                        defaultValue={imageUrl}
                                    >
                                        <Label>Car Image URL</Label>
                                        <Input placeholder="Paste Car Image URL" />
                                        <FieldError />
                                    </TextField>

                                    {/* Type */}
                                    <SelectCarType carType={carType}></SelectCarType>

                                    {/* location */}
                                    <TextField
                                        isRequired
                                        name="pickupLocation"
                                        defaultValue={pickupLocation}
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


                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Update</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}

export default CarInfoUpdateModal;