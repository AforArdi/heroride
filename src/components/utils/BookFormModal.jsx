'use client'

import { AddBookingAction } from "@/lib/action";
import { Button, Input, Label, DateField, Modal, Surface, TextArea, TextField, Description, ListBox, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const BookFormModal = ({ car, user }) => {
    const router = useRouter();
    const { _id, carName, dailyRentPrice, carType, image, pickupLocation, availability } = car;
    const { id, name } = user;

    const handleBooking = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const bookingModalData = Object.fromEntries(formData.entries());

        const bookingData = {
            carName,
            carId: _id,
            dailyRentPrice,
            carType,
            image,
            pickupLocation,
            userId: id,
            username: name,
            date: new Date(bookingModalData.bookingDate),
            message: bookingModalData.message,
            driverNeeded: bookingModalData.driverNeeded === "yes",
        }
        // console.log(bookingData);
        if (bookingData) {
            await AddBookingAction(bookingData);
            toast.success('Car Booked!');
            router.push('/my-bookings');
        }
    }

    return (
        <Modal>
            <Button
            isDisabled={!availability}
                size="lg"
                className="bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center w-full"
            >
                <MdOutlineDateRange size={20} className="mr-1" /> {availability ? "Book Now" : "Currently Unavailable"}
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <FaBookmark />
                            </Modal.Icon>
                            <Modal.Heading>Book This Car</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                By clicking on confirm, you agree to our terms and conditions. We will contact you shortly to confirm your booking and provide further details.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleBooking} className="flex flex-col gap-4">
                                    {/* driver needed */}
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
                                        <Description>Select whether you need a driver or not</Description>
                                    </Select>

                                    {/* booking date */}
                                    <DateField isRequired className="w-full" name="bookingDate">
                                        <Label>Date</Label>
                                        <DateField.Group>
                                            <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                        </DateField.Group>
                                    </DateField>

                                    {/* special notes */}
                                    <TextField className="w-full" name="message">
                                        <Label>Special Note</Label>
                                        <TextArea className="h-32" placeholder="Any special requests or notes" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button type="submit"
                                        className={'bg-[#2D4059] font-bold text-white shadow-md shadow-blue-500/10 px-6 rounded-none hover:bg-white hover:text-[#2D4059] border border-[#2D4059] hover:border-[#2D4059] transition-colors duration-300 flex items-center gap-2 justify-center w-full'}
                                        >Confirm Booking</Button>
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

export default BookFormModal;