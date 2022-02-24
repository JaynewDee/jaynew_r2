import React from 'react'
import dayjs from 'dayjs';


const DateTick:React.FC = () => {
   // function byTheSecond() {
   //    return setInterval((
          
   //    ), 1000)
   // }
   function getTime() {
      return dayjs()
   }
   let now = getTime();

   // let timestamp = byTheSecond()
   console.log(now)

  return (
    <div id="dateBox">{now[5]}</div>
  )
}

export default DateTick;