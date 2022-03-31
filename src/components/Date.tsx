import React from 'react'
import dayjs from 'dayjs';


const DateTick:React.FC = () => {

   let now = dayjs().format('MMM D YYYY hh:mm a')

  return (
    <div id="dateBox">{now}</div>
  )
}

export default DateTick;