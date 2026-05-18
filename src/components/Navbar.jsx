import { Link, Button } from "@heroui/react";
import NavLinks from "./NavLinks";
import Image from "next/image";

const navLinks = <>
    <li><NavLinks href="/">Home</NavLinks></li>
    <li><NavLinks href="/cars">Explore Cars</NavLinks></li>
    <li><NavLinks href="/add-car">Add Car</NavLinks></li>
    <li><NavLinks href="/my-bookings">My Bookings</NavLinks></li>
</>

const Navbar = () => {
    return (
        <div>
            {/* With right-aligned content */}
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div>
                        <Image src={'https://i.postimg.cc/3N0WPDg6/logo.png'} 
                        alt="Logo" width={100} height={40} />
                    </div>
                    <ul className="flex items-center gap-4">
                        {navLinks}
                    </ul>
                    <div className="flex items-center gap-4">
                        <Link className={'no-underline'} href="/login"><Button className={'bg-[#2D4059]'}>Login</Button></Link>
                        <Link className={'no-underline'} href="/register"><Button className={'bg-[#2D4059]'}>Register</Button></Link>
                    </div>
                </header>
            </nav>
        </div>
    );
}

export default Navbar;