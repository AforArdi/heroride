'use client'
import { Button } from "@heroui/react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import ProfileDropDown from "../utils/ProfileDropDown";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const navLinks = <>
    <li><NavLinks href="/">Home</NavLinks></li>
    <li><NavLinks href="/cars">Explore Cars</NavLinks></li>
    <li><NavLinks href="/add-car">Add Car</NavLinks></li>
    <li><NavLinks href="/my-bookings">My Bookings</NavLinks></li>
</>

const Navbar = () => {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession();
    const user = session?.user;

    return (
        <div className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <nav className=" max-w-7xl mx-auto">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>
                        <Image src={'https://i.postimg.cc/3N0WPDg6/logo.png'}
                            alt="Logo" width={100} height={40} referrerPolicy="no-referrer" />
                    </div>
                    <ul className="hidden md:flex items-center gap-4">
                        {navLinks}
                    </ul>
                    <div>
                        {user ? <ProfileDropDown user={user}></ProfileDropDown> :
                            <div className="flex items-center gap-4">
                                <Link className={'no-underline'} href="/login"><Button className={'bg-[#2D4059]'}>Login</Button></Link>
                                <Link className={'no-underline'} href="/register"><Button className={'bg-[#2D4059]'}>Register</Button></Link>
                            </div>}
                    </div>
                </header>
            </nav>
        </div>
    );
}

export default Navbar;