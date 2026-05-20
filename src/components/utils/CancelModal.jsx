"use client";
import {AlertDialog, Button} from "@heroui/react";

const CancelModal = ({handleCancelBooking, carName}) => {
    return (
        <AlertDialog>
            <Button variant="danger-soft">Cancel</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Cancel {carName}'s booking?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                After you cancel this booking, you are gonna have to book again if you want to rent this car.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className={'w-full'} onClick={handleCancelBooking} slot="close" variant="danger">
                                Confirm Cancellation
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default CancelModal;