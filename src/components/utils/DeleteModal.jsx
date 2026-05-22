"use client";
import { AlertDialog, Button } from "@heroui/react";
import { FiTrash2 } from "react-icons/fi";

const DeleteModal = ({ handleDelete, addedCar }) => {

    return (
        <AlertDialog>
            <Button size="sm" variant="bordered" color="danger" className="border-[#2D4059] text-[#2D4059] font-medium rounded-md">
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
                            <Button className={'bg-red-500 font-bold text-white shadow-md shadow-red-500/10 px-6 rounded-none hover:bg-white hover:text-red-500 border border-red-500 hover:border-red-500 transition-colors duration-300 flex items-center gap-2 justify-center w-full'} onClick={handleDelete} slot="close" variant="danger">
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