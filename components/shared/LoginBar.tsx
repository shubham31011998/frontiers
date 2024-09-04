"use client";

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import LoginBtn from './LoginBtn';
import Image from 'next/image';

const LoginBar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className='loginBar flex rounded-full bg-dark w-1/4 px-1.5 py-1.5'>
                    <LoginBtn />
                    <marquee><h3 className="logo-txt">Pioneering the Future of Frontend Development Together.</h3></marquee>
                    {/* <Image src={"/assets/images/logo-text1.png"} alt='Logo' width={100} height={28} /> */}
                </div>
            </div>
        </>
    )
}

export default LoginBar