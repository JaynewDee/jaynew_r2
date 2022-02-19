import React from 'react';
import './App.css';
import { Main } from './pages/Main'
import CSS from 'csstype';

interface MainType {
   style?: CSS.Properties,
   name: string
}

export const App: React.FC<MainType> = (props) => {
   const mainStyles = {
      color: 'white'
   }
   
   return (
         <Main style={mainStyles}>{props.name}</Main>
   )
}


