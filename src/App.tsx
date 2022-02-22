import React from 'react';
import './App.scss';
import CSS from 'csstype';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Sphere from './components/Sphere'
import Ornate from './components/Ornate'

interface MainType {
   style?: CSS.Properties,
   name: string
}

export const App: React.FC<MainType> = () => {
  
   
   
   return (
      <>
         <Sphere/>
         <Navbar/>
         <Sidebar />

         <div id="mainCont">
            <Ornate/>
               

         </div>
         
      </>

   )
}


