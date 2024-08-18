import LoginBar from '@/components/shared/LoginBar'
import { Button } from '@/components/ui/button'
import { SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <p>Home</p>
      {/* <UserButton afterSignOutUrl='/' /> */}
      <SignedOut>
        <LoginBar />
      </SignedOut>
    </div>
  )
}

export default Home