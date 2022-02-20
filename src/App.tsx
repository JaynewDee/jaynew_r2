import React from 'react';
import './App.scss';
import CSS from 'csstype';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Sphere from './components/Sphere'

interface MainType {
   style?: CSS.Properties,
   name: string
}

export const App: React.FC<MainType> = (props) => {
   
   
   return (
      <>
         <Sphere/>
         <Navbar/>
         <Sidebar />

         <div id="mainCont">

            Hello, world!

         </div>
         
      </>

   )
}


