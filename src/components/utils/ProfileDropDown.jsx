"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import {Avatar} from "@heroui/react";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";

const ProfileDropDown = () => {
    return (
        <Dropdown>
            <Button aria-label="Menu" variant="ghost" isIconOnly>
                <Avatar>
                    <Avatar.Image alt="John Doe" src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3" />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
            </Button>
            <Dropdown.Popover>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                    <Dropdown.Item id="new-file" textValue="New file">
                        <Label>
                            <Link href={'/add-car'}>Add Car</Link>
                        </Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Label>
                            <Link href={'/my-bookings'}>My Bookings</Link>
                        </Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Label>
                            <Link href={'/my-added-cars'}>My Added Cars</Link>
                        </Label>
                    </Dropdown.Item>
                    <Dropdown.Item id="delete-file" textValue="Delete file" variant="danger">
                        <Label className="flex items-center gap-2 text-red-500"><CiLogout></CiLogout> Logout</Label>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}

export default ProfileDropDown;