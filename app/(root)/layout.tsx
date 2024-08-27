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
        </SignedOut>
        <div className="wrapper">
          {children}
        </div>
      </div>
    </main>
  )
}

export default Layout