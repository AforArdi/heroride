"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import { Avatar } from "@heroui/react";
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
                <Dropdown.Menu>
                    <Dropdown.Item id="add-car" as={Link} href="/add-car">
                        Add Car
                    </Dropdown.Item>

                    <Dropdown.Item id="my-bookings" as={Link} href="/my-bookings">
                        My Bookings
                    </Dropdown.Item>

                    <Dropdown.Item id="my-added-cars" as={Link} href="/my-added-cars">
                        My Added Cars
                    </Dropdown.Item>

                    <Dropdown.Item id="rate-us" as={Link} href="/rate-us">
                        Rate Us
                    </Dropdown.Item>

                    <Dropdown.Item id="logout" variant="danger" className="text-red-500">
                        <div className="flex items-center gap-2">
                            <CiLogout size={16} />
                            <span>Logout</span>
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}

export default ProfileDropDown;