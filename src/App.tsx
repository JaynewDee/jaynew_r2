import React from 'react';
import './App.css';
import { Main } from './pages/Main'
import CSS from 'csstype';

const mainContStyles: CSS.Properties = {
   display: 'flex',
}

interface mainType {
   style?: {}
}
export const App: React.FC = () => {
   return (
      <div>
         <Main></Main>
      </div>
   )
}


