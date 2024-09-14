"use client";

import React from 'react'
import LoginBtn from './LoginBtn';
import Marquee from '../ui/marquee';
import Image from 'next/image';
import Link from 'next/link';

const LoginBarfull = () => {
    return (
        <nav>
            <div className="w-full border-b-2 border-slate-100 py-3 bg-gray-100">
                <div className='px-8 loginBarFull flex w-full justify-between'>
                    <Link href={'/'} className='sidebar-logo'>
                        <Image src={"/assets/images/logo-text1.png"} alt='Logo' width={90} height={24} />
                    </Link>
                    <div className="flex">
                        <LoginBtn />

                    </div>

                    {/* <Image src={"/assets/images/logo-text1.png"} alt='Logo' width={100} height={28} /> */}
                </div>
            </div>
        </nav>
    )
}

export default LoginBarfull