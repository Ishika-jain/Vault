import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const Notes = () => {

  const [value, onChange] = useState(new Date());


  return (
    <div style={{ height:"80vh", width:"80vw", display:"flex", alignItems:"center", justifyContent:"center"}}>

   <div  style={{ background: "red"}}>
      <Calendar onChange={onChange} value={value} />
    </div>
    </div>
  )
}

export default Notes

