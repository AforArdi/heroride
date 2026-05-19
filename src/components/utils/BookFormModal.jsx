'use client'

import { Button, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { FaBookmark } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import DriverNeeded from "./DriverNeeded";
import { getCarById } from "@/lib/data";

const BookFormModal = ({car}) => {
    const {carName, dailyRentPrice, carType, image, pickupLocation} = car;

    const onSubmit = async () => {
        const bookingData = {
            carName,
            dailyRentPrice,
            carType,
            image, 
            pickupLocation,
            message
        }
        
    }

    return (
        <Modal>
            <Button
                size="lg"
                className="w-full bg-[#0a192f] hover:bg-[#112a4d] text-white font-bold rounded-xl py-6"
            >
                <MdOutlineDateRange size={20} className="mr-1" /> Book Now
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
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    {/* driver needed */}
                                    <DriverNeeded></DriverNeeded>

                                    {/* special notes */}
                                    <TextField className="w-full" name="message">
                                        <Label>Special Note</Label>
                                        <TextArea className="h-32" placeholder="Any special requests or notes" />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Send Message</Button>
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