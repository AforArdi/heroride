'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({children, href}) => {
    const pathname = usePathname();
    const isActivePath = pathname === href;

    return ( 
        <div>
            <Link href={href} className={isActivePath ? "text-[#2D4059] font-bold" : "text-foreground"}>
                {children}
            </Link>
        </div>
     );
}
 
export default NavLinks;