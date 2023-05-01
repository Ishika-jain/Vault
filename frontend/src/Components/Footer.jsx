import React from 'react'
import  "../index.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const Footer = () => {
  return (
    <div className='footer '> 
    <div className="thin-footer-container">
      <div className="social-icons">
        <a href="#" className="icon">
          <FacebookIcon size={20} />
        </a>
        <a href="#" className="icon">
          <TwitterIcon size={20} />
        </a>
        <a href="#" className="icon">
          <InstagramIcon size={20} />
        </a>
      </div>
      <div className="copyright">
        &copy; 2023 My Company. All rights reserved.
      </div>
    </div>
</div>
  )
}

export default Footer