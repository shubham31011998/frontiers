"use client";

import React, { useState } from 'react'
import { Button } from '../ui/button';
import { CgMenuLeft } from "react-icons/cg";



const SideMenuToggleBtn = ({onClickHandler}:any) => {

  return (
    <>
      <CgMenuLeft className='cursor-pointer' onClick={onClickHandler} size={"30px"} />
    </>
  )
}

export default SideMenuToggleBtn