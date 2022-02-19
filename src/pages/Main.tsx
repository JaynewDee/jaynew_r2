import React from 'react';
import CSS from 'csstype';
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'




interface MainInterface {
   style?:  CSS.Properties
}

export const Main: React.FC<MainInterface> = () => {
   
   const mainContStyles: CSS.Properties = {
      display: 'flex',
      height: '5em',
      width: '100vw',
      background: 'rgb(50,50,50)',
      boxShadow: '0px 5px 8px rgb(20,30,40)',
      color: 'white',
      zIndex: '2'
   }

  return(
   <>
      <Navbar />
      <Sidebar />
      <div style={mainContStyles}></div>
   </>
  )
};




