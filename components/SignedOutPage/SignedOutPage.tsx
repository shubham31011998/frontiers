import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Logo from '../ui/Logo';
import { Button } from '../ui/button';

const SignedOutPage = () => {
    return (
        <div className='mainWrap px-9'>
            <div className="grid className text-center heroSection md:grid-cols-2 ">
                {/* <Logo /> */}
                <div className="mx-auto flex justify-items-center flex-col heroSection_left">
                    <h1 className='md:text-5xl text-3xl font-semibold leading-relaxed'>Streamline Your Photo Editing With <br />Our <span className='font-bold text-black'><span className='tiltText'>AI</span> Powered Platform</span>.</h1>
                    <p className='text-gray-400 pt-2 pb-5'>We use AI to edit photos at lightning speed.
                    </p>
                    <div className="flex sm:grid-cols-1 items-center justify-center md:flex-row flex-col">
                        <div className="hero_card p-5 bg-white border-2 border-black rounded-xl m-4  md:w-1/4 text-left ring-pink-300 ring-8 ">
                            <h2 className='text-2xl font-semibold'>AI to create engaging photos at lightning speed.</h2>
                        </div>
                        <div className="hero_card p-5 bg-white border-2 border-black rounded-xl m-4 md:w-1/4 text-left ring-green-300 ring-8 ">
                            <h2 className='text-2xl font-semibold'>AI to create engaging photos at lightning speed.</h2>
                        </div>
                    </div>
                </div>
                <div className="mx-auto flex justify-items-center flex-col md:items-start items-center heroSection_right">
                    <Image
                        src={'/assets/images/heroimage.jpg'}
                        width={500}
                        height={500}
                        alt={"heroImage"}
                        style={{objectFit: "contain"}}
                        className='heroImage'
                    />
                    <div className="w-full flex sm:items-center md:justify-start justify-center">
                    <Button className="my-4 rounded-xl">Get Started</Button>
                    </div>
                </div>
            </div>
            {/* <ul className="flex-center w-full gap-20">
                {navLinks.slice(1, 5).map((link) => (
                    <Link
                        key={link.route}
                        href={''}
                        className="flex-center flex-col gap-2"
                    >
                        <li className="flex-center w-fit rounded-full bg-white p-4">
                            <Image src={link.icon} alt="image" width={24} height={24} />
                        </li>
                        <p className="p-14-medium text-center text-white">{link.label}</p>
                    </Link>
                ))}
            </ul> */}
        </div>
    )
}

export default SignedOutPage