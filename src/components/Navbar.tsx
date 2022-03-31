import React, { useState } from 'react'
import { IconType } from 'react-icons/lib';
import NavItem from './navItem';

interface navigation {
   icons: IconType[]
}


const Navbar:React.FC<navigation> = () => {
   

  return (
     <>
    <div id="navbar">
       <NavItem />
    </div>
    </>
  )
}

export default Navbar;