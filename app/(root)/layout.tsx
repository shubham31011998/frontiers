import React from 'react'
import LoginBar from '@/components/shared/LoginBar'
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <SignedIn>
        <Sidebar />
        <MobileNav />
      </SignedIn>
      <div className="root-container">
        <SignedOut>
          <LoginBar />
          <div className="">
            {children}
          </div>
        </SignedOut>
        <SignedIn>
          <div className="wrapper">
            {children}
          </div>
        </SignedIn>
      </div>
    </main>
  )
}

export default Layout