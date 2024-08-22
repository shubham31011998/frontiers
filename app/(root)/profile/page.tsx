"use client";

import { SignedIn, SignOutButton, UserButton } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  let afterSignOut = ()=>{
    window.location.href = '/';
  }
  return (
    <>
      <SignedIn>
        {/* <UserButton  /> */}
        <SignOutButton signOutCallback={afterSignOut}></SignOutButton>
      </SignedIn>
    </>
  )
}

export default ProfilePage