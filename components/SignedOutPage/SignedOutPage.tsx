"use client"
import { navLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoImageOutline } from "react-icons/io5";
import { Button } from '../ui/button';
// Import Swiper React components
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';



const SignedOutPage = () => {
    const options = {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        autoScroll: {
            speed: 1,
        },
        gap: '1.5rem',
        pauseOnHover: false, // Ensure this is set to false
        pauseOnFocus: false, // Add this line if needed
        resetProgress: false,
        perPage: 4,
        pagination: false,
        arrows: false,
    };
    return (
        <div className='mainWrap px-9'>
            <div className="grid className text-center heroSection md:grid-cols-2 ">
                {/* <Logo /> */}
                <div className="mx-auto flex justify-items-center flex-col heroSection_left">
                    <h1 className='md:text-5xl text-3xl font-semibold leading-relaxed'>Streamline Your Photo Editing With <br />Our <span className='font-bold text-black'><span className='tiltText colorAnimation'>AI</span> Powered Platform</span>.</h1>
                    <p className='text-gray-700 pt-2 pb-5'>We use AI to edit photos at lightning speed.
                    </p>
                    <div className="flex sm:grid-cols-1 items-center justify-center md:flex-row flex-col">
                        <div className="hero_card p-5 text-white  rounded-xl m-4 md:w-1/2 text-left colorAnimation">
                            <div className="flex justify-start items-center">
                                <Image src={'/assets/images/profile1.jpeg'}
                                    width={30}
                                    height={30}
                                    alt="profile1"
                                    className='ring ring-black m-1 ring-offset-2 ring-2 rounded-full'
                                />
                                <Image src={'/assets/images/profile2.jpg'}
                                    width={40}
                                    height={40}
                                    alt="profile1"
                                    className='relative ring ring-black m-1 ring-offset-2 ring-2 rounded-full -left-6'
                                />
                                <Image src={'/assets/images/profile3.jpg'}
                                    width={50}
                                    height={50}
                                    alt="profile1"
                                    className='relative ring ring-black m-1 ring-offset-2 ring-2 rounded-full -left-14'
                                />
                            </div>
                            <h2 className='text-xl font-bold pt-2 mb-2'>1000+ Active User</h2>
                            <h2 className='text-sm font-normal'>Our online photo editor offers everything you need to enhance and edit photos effortlessly.</h2>
                        </div>

                        <div className="hero_card p-5 bg-white border-2 border-black rounded-xl m-4 md:w-1/2 text-left staticShadow_black">
                            <h2 className='text-2xl font-bold'>AI to create & edit engaging photos at lightning speed.</h2>
                            <div className="flex justify-center items-center border-t-2 mt-2 pt-2">
                                <div className="flex justify-center items-center">
                                    <Image src={'/assets/images/profile1.jpeg'}
                                        width={25}
                                        height={25}
                                        alt="profile1"
                                        className='ring ring-black m-1 ring-offset-2 ring-2 rounded-full'
                                    />
                                    <Image src={'/assets/images/profile2.jpg'}
                                        width={25}
                                        height={25}
                                        alt="profile1"
                                        className='relative ring ring-black m-1 ring-offset-2 ring-2 rounded-full -left-4'
                                    />
                                </div>
                                <div className=''>
                                    <p className="text-gray-700 text-sm">Thousands of designer are using this tool.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto py-4 flex justify-items-center flex-col md:items-start items-center heroSection_right">
                    <Image
                        src={'/assets/images/heroimage.jpg'}
                        width={500}
                        height={500}
                        alt={"heroImage"}
                        style={{ objectFit: "contain" }}
                        className='heroImage'
                    />
                    <div className="w-full flex sm:items-center md:justify-start justify-center">
                        <Button className="my-4 rounded-xl px-9">Get Started</Button>
                    </div>
                </div>
            </div>
            <div className="brandsWrap py-6">
                <Splide
                    aria-label="My Favorite Images"
                    extensions={{ AutoScroll }}
                    options={options}
                >
                    {navLinks.slice(1, 5).map((link) => (
                        <SplideSlide key={link.route}>
                            <div className="hero_card p-5 text-white  rounded-xl m-4 md:w-full text-left colorAnimation">
                                <div className="flex justify-start items-center">
                                    <Image src={'/assets/images/profile1.jpeg'}
                                        width={30}
                                        height={30}
                                        alt="profile1"
                                        className='ring ring-black m-1 ring-offset-2 ring-2 rounded-full'
                                    />
                                    <Image src={'/assets/images/profile2.jpg'}
                                        width={40}
                                        height={40}
                                        alt="profile1"
                                        className='relative ring ring-black m-1 ring-offset-2 ring-2 rounded-full -left-6'
                                    />
                                    <Image src={'/assets/images/profile3.jpg'}
                                        width={50}
                                        height={50}
                                        alt="profile1"
                                        className='relative ring ring-black m-1 ring-offset-2 ring-2 rounded-full -left-14'
                                    />
                                </div>
                                <h2 className='text-xl font-bold pt-2 mb-2'>1000+ Active User</h2>
                                <h2 className='text-sm font-normal'>Our online photo editor offers everything you need to enhance and edit photos effortlessly.</h2>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>

        </div>
    )
}

export default SignedOutPage