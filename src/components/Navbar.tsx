import React, { useState } from 'react'
import NavItem from './navItem';
import { GiDivingDagger as dagger} from 'react-icons/gi'

const Navbar:React.FC = () => {
   const [icons, setIcons] = useState([
      { title: 'dagger', icon: dagger, id: 'dagger', key: 1},
      
   ])

  return (
     <>
    <div id="navbar">
       <NavItem icons={icons}/>
    </div>
    </>
  )
}

export default Navbar;



