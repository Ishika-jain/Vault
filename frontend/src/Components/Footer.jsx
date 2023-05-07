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
        <a href="https://www.google.com/search?q=rashi+khanna&rlz=1C1CHBF_enIN1044IN1044&sxsrf=APwXEdeUtZbpAER81eAGmw2j1apUO84A-w:1683143235160&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjV34yV9dn-AhWxa2wGHfmsD4EQ_AUoAXoECAEQAw&biw=1396&bih=649&dpr=1.38#imgrc=sg-1m-hhNtbYIM" className="icon">
          <FacebookIcon size={20} />
        </a>
        <a href="https://www.google.com/search?q=rashi+khanna&rlz=1C1CHBF_enIN1044IN1044&sxsrf=APwXEdeUtZbpAER81eAGmw2j1apUO84A-w:1683143235160&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjV34yV9dn-AhWxa2wGHfmsD4EQ_AUoAXoECAEQAw&biw=1396&bih=649&dpr=1.38#imgrc=sg-1m-hhNtbYIM" className="icon">
          <TwitterIcon size={20} />
        </a>
        <a href="https://www.google.com/search?q=rashi+khanna&rlz=1C1CHBF_enIN1044IN1044&sxsrf=APwXEdeUtZbpAER81eAGmw2j1apUO84A-w:1683143235160&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjV34yV9dn-AhWxa2wGHfmsD4EQ_AUoAXoECAEQAw&biw=1396&bih=649&dpr=1.38#imgrc=sg-1m-hhNtbYIM" className="icon">
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