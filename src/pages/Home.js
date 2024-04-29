import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import Resume from '@mui/icons-material/CloudDownload';
import Call from '@mui/icons-material/Call';
import Twitter from '@mui/icons-material/X';




// import MailIcon from '@mui/icons-material/Mail';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Khalid Haider Jafri</h2>
        <div className="prompt">
          <p>Documenting my growth, skills, and passion
through my personal Portfolio.</p>
          <a href='https://www.linkedin.com/in/khalid-haider-jafri-78368220a/' title="LinkedIn"  >
          <LinkedInIcon  />
          </a>
          <a href="mailto:khalidhaiderjafri@gmail.com" title="Mail"  >
          <EmailIcon />
          </a>  
            <a href='https://github.com/xayyeem' title="Github"   >
          <GithubIcon />
            </a>
            <a title="Resume" href='https://drive.google.com/file/d/1IuGtL54igl7O360saNkqjfh2sqG_yMq_/view?usp=sharing'   >
          <Resume />
            </a>
            <a title="Call" href='tel:9696668689'>
          <Call />
            </a>
            <a href='https://x.com/khalidjafri11' title="Twitter"   >
          <Twitter/>
            </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Scss, NPM,
               BootStrap, MaterialUI, TailwindCSS, StyledComponents, ShdaCDN
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS,
              MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C#, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
