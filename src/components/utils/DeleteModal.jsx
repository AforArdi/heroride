"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

const DeleteModal = ({ handleDelete, addedCar }) => {

    return (
        <AlertDialog>
            <Button size="sm" variant="bordered" color="danger" className="font-medium rounded-md">
                <FiTrash2 size={14} className="mr-1" /> Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete {addedCar?.name}?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                After you cancel this booking, you are gonna have to book again if you want to rent this car.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className={'w-full'} onClick={handleDelete} slot="close" variant="danger">
                                Confirm Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}

export default DeleteModal;