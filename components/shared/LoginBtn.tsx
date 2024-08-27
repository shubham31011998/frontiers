"use client";
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const LoginBtn = () => {
    return (
        <>
            <Button asChild className='rounded-full px-6 py-1 text-sm font-medium'>
                <Link href='/sign-in'>Login</Link>
            </Button>
        </>
    )
}

export default LoginBtn