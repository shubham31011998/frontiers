"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useUser } from '@clerk/nextjs';



const ProfileIcon = () => {
    const [profileImage, setProfileImage] = useState("false");
    const { user } = useUser();

    useEffect(() => {
        if (user?.imageUrl) {
            setProfileImage(user?.imageUrl);
        }
    }, [user])


    return (
        <>
            {profileImage != "false" &&
                <Image
                    src={profileImage}
                    alt='Logo'
                    width={32}
                    height={32}
                />
            }
        </>
    )
}

export default ProfileIcon