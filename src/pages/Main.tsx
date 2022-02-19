import React from 'react';
import {StartButton} from '../components/startButton'
import CSS from 'csstype';

const mainContStyles: CSS.Properties = {
   display: 'flex',
}



export const Main: React.FC = () => {

  return(
   <>
      <div>
         <StartButton id={1}></StartButton>
      </div>
   </>
  )
};




