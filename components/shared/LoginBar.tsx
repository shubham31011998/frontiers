"use client";

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import LoginBtn from './LoginBtn';

const LoginBar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className='loginBar flex rounded-full bg-dark w-1/4 px-1.5 py-1.5'>
                    <LoginBtn />
                </div>
            </div>
        </>
    )
}

export default LoginBar