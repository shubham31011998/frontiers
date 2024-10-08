"use client";

import { navLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { PiImageSquare } from "react-icons/pi";
import { LiaFillDripSolid } from "react-icons/lia";
import { FaRegObjectUngroup } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { VscLayoutMenubar } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { BsCreditCard2Back } from "react-icons/bs";
import SideMenuToggleBtn from '../ui/sideMenuToggleBtn';



const Sidebar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);


  const sideBarToggle = () => {
    setIsSideMenuOpen((prev) => !prev);
  }
  const pathName = usePathname();

  return (
    <aside className={`sidebar ${isSideMenuOpen ? "" : "closedSidebar"}`}>
      <div className="flex size-full flex-col gap-4">
        <div className={`flex items-center ${isSideMenuOpen ? "" : "justify-center"}`}>
          <SideMenuToggleBtn onClickHandler={sideBarToggle} />
          {isSideMenuOpen &&
            <Link href={'/'} className='sidebar-logo'>
              <Image src={"/assets/images/logo-text1.png"} alt='Logo' width={100} height={28} />
            </Link>
          }
        </div>

        <nav className='sidebar-nav'>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route == pathName;
              return (
                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-black text-white activeNavLink' : 'text-gray-700'}`}>
                  <Link className='sidebar-link sidebarUIlink' href={link.route}>
                    <span className={`${isActive && 'brightness-200'}`}>
                      {
                        link.iconImport === "home" ? <AiOutlineHome size={"22px"} />
                          : link.iconImport === "imageRestore" ? <PiImageSquare size={"22px"} />
                            : link.iconImport === "generativeFill" ? <LiaFillDripSolid size={"22px"} />
                              : link.iconImport === "objectRemove" ? <FaRegObjectUngroup size={"22px"} />
                                : link.iconImport === "objectRecolor" ? <IoColorPaletteOutline size={"22px"} />
                                  : link.iconImport === "backgroundRemove" ? <VscLayoutMenubar size={"22px"} />
                                    : null
                      }
                    </span>
                    {isSideMenuOpen && link.label}
                  </Link>
                </li>
              )
            })}


          </ul>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(6).map((link) => {
              const isActive = link.route == pathName;
              return (
                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-black text-white' : 'text-gray-700'
                  }`}>
                  <Link className='sidebar-link sidebarUIlink' href={link.route}>
                    {
                      link.iconImport == "profile"
                        ? <CgProfile size={'22px'} />
                        : <BsCreditCard2Back size={"22px"} />
                    }
                    {isSideMenuOpen && link.label}
                  </Link>
                </li>
              )
            })}
            {/* <li className={'sidebar-nav_element group'}>
              <UserButton showName={isSideMenuOpen} />
            </li> */}
          </ul>

          {/* <SignedOut>
            <LoginBtn />
          </SignedOut> */}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar