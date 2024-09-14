import React from 'react'
import LoginBar from '@/components/shared/LoginBar'
import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { SignedIn, SignedOut, SignOutButton, UserButton } from '@clerk/nextjs'
import LoginBarfull from '@/components/shared/LoginBarfull'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='root'>
      <SignedIn>
        <Sidebar />
        <MobileNav />
      </SignedIn>
        <SignedOut>
          {/* <LoginBar /> */}
          <LoginBarfull />
        </SignedOut>
      <div className="root-container">
          <div>
            {children}
          </div>
      </div>
    </main>
  )
}

export default Layout