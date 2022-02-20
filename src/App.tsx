import React from 'react';
import './App.scss';
// import { Main } from './pages/Main'
import CSS from 'csstype';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

interface MainType {
   style?: CSS.Properties,
   name: string
}

export const App: React.FC<MainType> = (props) => {
   
   
   return (
      <>
         <Navbar/>
         <Sidebar />

         <div id="mainCont">

            Hello, world!

         </div>
         
      </>

   )
}


