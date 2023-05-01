import React from 'react'
import  '../index.css'

import logo from "../images/logog.png"
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';



const Sidebar = (props) => {
  return (
    <div className='sidebar' style={{borderRight:"1px solid black"}}>
  <div style={{height: "10.1%", background: "white", display: "flex"}}>
    <img src={logo} alt='haha' style={{width: "6rem"}}></img>
    <div>ham</div>
  </div> 
  <div style={{marginTop:"3rem"}}>
      <div className='options'><FolderSharedIcon/>Docs</div> 
      <div className='options'><AccountCircleIcon/>Profile</div>
      <div className='options'><WorkHistoryIcon/>Projects</div>
      <div className='options'><NewspaperIcon/>Certificates</div>
      <div className='options'><AssignmentIndIcon/>Referrals</div>
      <div className='options'><CalendarMonthIcon/>Calendar</div>
      <div className='options'><NotesIcon/>Notes</div> 
      <div className='options'><ArtTrackIcon/></div> 
  </div>
   </div> 
   

  )
}

export default Sidebar