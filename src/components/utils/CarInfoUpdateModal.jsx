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
import { BiEdit } from "react-icons/bi";

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
            <Button size="sm" variant="bordered" className="border-[#2D4059] text-[#2D4059] font-medium rounded-md">
                <FiEdit2 size={14} className="mr-1" /> Edit
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiEdit className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Edit Car Information</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Update the details of your car listing to keep it accurate and appealing to potential renters.
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
                                        <Button type="submit" className='bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center w-full'>Update</Button>
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