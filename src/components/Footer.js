import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import Resume from '@mui/icons-material/CloudDownload';
import Call from '@mui/icons-material/Call';
import Twitter from '@mui/icons-material/X';


import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href='https://www.linkedin.com/in/khalid-haider-jafri-78368220a/'  >
          <LinkedInIcon  />
          </a>
          <a href="mailto:khalidhaiderjafri@gmail.com"   >
          <EmailIcon />
          </a>  
            <a href='https://github.com/xayyeem'   >
          <GithubIcon />
            </a>
            <a href='https://drive.google.com/file/d/1IuGtL54igl7O360saNkqjfh2sqG_yMq_/view?usp=sharing'   >
          <Resume />
            </a>
            <a href='tel:9696668689'>
          <Call />
            </a>
            <a href='https://x.com/khalidjafri11'   >
          <Twitter/>
            </a>
      </div>
      <p> &copy; khalidhaiderjafri@gmail.com</p>
    </div>
  );
}

export default Footer;
