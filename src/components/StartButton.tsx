import React from 'react';
import Button from '@material-ui/core/Button';

const btnStyles = {
   margin: 'auto',
   height: '100px',
   width: '150px',
   backgroundColor: 'black',
   color: 'white',
   fontSize: '20px',
   borderRadius: '20px'
}

interface btnType {
   id: number;
   style?: {};
}

export const StartButton: React.FC<btnType> = () => {
  return(  
  
  <div>
     <Button style={btnStyles}>ENTER</Button>
  </div>
  )
};



