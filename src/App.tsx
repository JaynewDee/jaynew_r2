import React, { useState } from 'react';

import CSS from 'csstype';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Sphere from './components/Sphere'
import Ornate from './components/Ornate'
import { GiOwl, GiFox } from 'react-icons/gi'
import { IconType } from 'react-icons';


interface MainType {
   style?: CSS.Properties,
   name: string,
   
}

export const App: React.FC<MainType> = () => {
  const [icons, setIcons] = useState([GiOwl, GiFox])
   
   
   return (
      <>
         <Sphere />
         <Navbar icons={icons}/>
         <Sidebar />

         <div id="mainCont">
            <Ornate/>
            
               

         </div>
         
      </>

   )
}


