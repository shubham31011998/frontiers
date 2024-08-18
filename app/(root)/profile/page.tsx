"use client";

import { SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'

const ProfilePage = () => {
  return (
    <SignedIn>
      <UserButton showName />
    </SignedIn>
  )
}

export default ProfilePage