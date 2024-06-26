"use client";

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';
import { AiOutlineHome } from "react-icons/ai";
import { PiImageSquare } from "react-icons/pi";
import { LiaFillDripSolid } from "react-icons/lia";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { PiSelectionBackgroundLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { BsCreditCard2Back } from "react-icons/bs";



const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className='sidebar'>
      <div className="flex size-full flex-col gap-4">
        <Link href={'/'} className='sidebar-logo'>
          <Image src={"/assets/images/logo-text.svg"} alt='Logo' width={180} height={28} />
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route == pathName;
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                    <Link className='sidebar-link' href={link.route}>
                      <span className={`${isActive && 'brightness-200'}`}>
                      {
                        link.iconImport === "home" ? <AiOutlineHome size={"22px"} />
                          : link.iconImport === "imageRestore" ? <PiImageSquare size={"22px"} />
                          : link.iconImport === "generativeFill" ? <LiaFillDripSolid size={"22px"} />
                          : link.iconImport === "objectRemove" ? <FaRegObjectUngroup size={"22px"} />
                          : link.iconImport === "objectRecolor" ? <IoColorPaletteOutline size={"22px"} />
                          : link.iconImport === "backgroundRemove" ? <PiSelectionBackgroundLight size={"22px"} />
                          : null
                      }
                      </span>
                      {link.label}
                    </Link>
                  </li>
                )
              })}


            </ul>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route == pathName;
                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                    }`}>
                    <Link className='sidebar-link' href={link.route}>
                    {
                      link.iconImport == "profile" ?  <CgProfile size={"22px"} /> :  <BsCreditCard2Back size={"22px"} />
                     }
                      {/* <Image
                        src={link.icon}
                        alt='Logo'
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      /> */}
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              <li className={'flex-center cursor-pointer gap-2 p-4'}>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar