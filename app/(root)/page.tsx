import LoginBar from '@/components/shared/LoginBar'
import { Button } from '@/components/ui/button'
import { navLinks } from '@/constants'
import { SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeMain = () => {
  return (
    <>
      <SignedOut>
        <section className="home">
          <Image src={"/assets/images/logo-text1.png"} className={"comingSoonLogo"} alt='Logo' width={100} height={28} />
          <h2 className="home-heading">
            Coming Soon
          </h2>
          <h1 className="home-heading">
            Empower Your Craft, Elevate Your Code with Web Frontiers.
          </h1>
          <ul className="flex-center w-full gap-20">
            {navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={''}
                className="flex-center flex-col gap-2"
              >
                <li className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt="image" width={24} height={24} />
                </li>
                <p className="p-14-medium text-center text-white">{link.label}</p>
              </Link>
            ))}
          </ul>
        </section>
      </SignedOut>
    </>
  )
}

export default HomeMain