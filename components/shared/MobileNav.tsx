"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/nextjs';
import { RiMenu2Line } from "react-icons/ri";
import { navLinks } from '@/constants';
import { AiOutlineHome } from "react-icons/ai";
import { PiImageSquare } from "react-icons/pi";
import { LiaFillDripSolid } from "react-icons/lia";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiSelectionBackgroundBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { BsCreditCard2Back } from "react-icons/bs";
import { usePathname } from 'next/navigation';


const MobileNav = () => {
    const pathName = usePathname();
    return (
        <header className='header'>
            <Link href="/" className='flex items-center gap-2 md:py-2'>
                <Image
                    src="/assets/images/logo-text1.png"
                    alt="Logo"
                    width={100}
                    height={28}
                />
            </Link>
            <nav className='flex gap-2'>
                <SignedIn>
                    <Sheet>
                        <SheetTrigger>
                            <RiMenu2Line size={"22px"} />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64'>
                            <>
                                <Image
                                    src="/assets/images/logo-text1.png"
                                    alt="Logo"
                                    width={100}
                                    height={23}
                                />
                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                        const isActive = link.route == pathName;
                                        return (
                                            <li 
                                                key={link.route} 
                                                className={`${isActive ? "text-white bg-black rounded-3xl w-full" : "text-black"} p-18 flex whitespace-nowrap `}
                                            >
                                                <Link className='sidebar-link sidebarUIlink' href={link.route}>
                                                    <span>
                                                        {
                                                            link.iconImport === "home" ? <AiOutlineHome size={"22px"} />
                                                            : link.iconImport === "imageRestore" ? <PiImageSquare size={"22px"} />
                                                            : link.iconImport === "generativeFill" ? <LiaFillDripSolid size={"22px"} />
                                                            : link.iconImport === "objectRemove" ? <FaRegObjectUngroup size={"22px"} />
                                                            : link.iconImport === "objectRecolor" ? <IoColorPaletteOutline size={"22px"} />
                                                            : link.iconImport === "backgroundRemove" ? <PiSelectionBackgroundBold size={"22px"} />
                                                            : link.iconImport == "profile" ?  <CgProfile size={"22px"} /> 
                                                            : <BsCreditCard2Back size={"22px"} />
                                                        }
                                                    </span>
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
            </nav>
        </header>
    )
}

export default MobileNav