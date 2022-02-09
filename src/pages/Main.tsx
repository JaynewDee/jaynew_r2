import React from 'react';
import {StartButton} from '../components/startButton'
import CSS from 'csstype';

const mainContStyles = {
   display: 'flex',
}




export const Main: React.FC = () => {

  return(
   <>
      <div>
         <StartButton style={mainContStyles} id={1}></StartButton>
      </div>
   </>
  )
};




