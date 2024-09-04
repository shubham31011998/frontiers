"use client";

import React from 'react'
import LoginBtn from './LoginBtn';
import Marquee from '../ui/marquee';

const LoginBar = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className='loginBar flex rounded-full bg-dark w-1/4 px-1.5 py-1.5'>
                    <LoginBtn />
                    <Marquee speed={15}>
                        <h3 className="logo-txt">Pioneering the Future of Frontend Development Together.</h3>
                    </Marquee>

                    {/* <Image src={"/assets/images/logo-text1.png"} alt='Logo' width={100} height={28} /> */}
                </div>
            </div>
        </>
    )
}

export default LoginBar