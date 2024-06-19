import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GithubIcon from '@mui/icons-material/GitHub';
import Resume from '@mui/icons-material/CloudDownload';
import Call from '@mui/icons-material/Call';
import Twitter from '@mui/icons-material/X';
import './Home.css'



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
      {/* <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, Scss, NPM,
               BootStrap, MaterialUI, TailwindCSS, StyledComponents, ShadCDN
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
          
          <li className="item">
            <h2>Tools</h2>
            <span>Postman, Firebase, Git/Github, VSCode, Sublime Text, IntelliJ IDEA
</span>
          </li>
        </ol>
      </div> */}

<div class="skills-section">
    <div class="skills-header">
     <h1>Front End</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"     alt="" class="skills-icons"/>
        </div>
         <h3>HTML 5</h3>
        </div>
        
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="" class="skills-icons"/>
        </div>
        <h3>CSS3</h3>
        </div>
            
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>JAVASCRIPT</h3>
        </div>
       </div>
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>Tailwind Css</h3>
        </div>
       </div>
       
         
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="" class="skills-icons"/>
        </div>
        <h3>REACT</h3>
        </div>
       </div>
       
          <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png" alt="" class="skills-icons"/>
        </div>
        <h3>Redux</h3>
        </div>
       </div>
       
       
       </div>
    
     </div>

     <div class="skills-section">
    <div class="skills-header">
     <h1>Back End</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"     alt="" class="skills-icons"/>
        </div>
         <h3>Nodejs</h3>
        </div>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://qph.cf2.quoracdn.net/main-qimg-b20998d8ea63ef0b6ca2a79c936d469b" alt="" class="skills-icons"/>
        </div>
        <h3>Expressjs</h3>
        </div>
            
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Mongo-db-logo.png" alt="" class="skills-icons"/>
        </div>
        <h3>MongoDB</h3>
        </div>
       </div>
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1448px-Database-mysql.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>My SQL</h3>
        </div>
       </div>
       
       </div>
    
     </div>


     <div class="skills-section">
    <div class="skills-header">
     <h1>Programming Language</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"     alt="" class="skills-icons"/>
        </div>
         <h3>C++</h3>
        </div>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Javascript_badge.svg/1200px-Javascript_badge.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>JavaScript</h3>
        </div>
            
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUL5to-278TgL4limI2aCeH_cSzNOnnv9a4g&s" alt="" class="skills-icons"/>
        </div>
        <h3>Java</h3>
        </div>
       </div>
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>Python</h3>
        </div>
       </div>
       
       </div>
    
     </div>

     <div class="skills-section">
    <div class="skills-header">
     <h1>Tools</h1>   
     </div>
     <div class="skills-container">
       
      <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPmNWAtnroI424NFmJBwNtUs6YIL_eVXHjA&s"     alt="" class="skills-icons"/>
        </div>
         <h3>Postman</h3>
        </div>
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>FireBase</h3>
        </div>
            
       </div>

       <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Visual_Studio_Code_1.35_icon.png" alt="" class="skills-icons"/>
        </div>
        <h3>VSCode</h3>
        </div>
            
       </div>
       
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" alt="" class="skills-icons"/>
        </div>
        <h3>Github</h3>
        </div>
        
       </div>
       
        <div class="skills-box">
       <div class="skills-title">
       <div class="skills-img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png" alt="" class="skills-icons"/>
        </div>
        <h3>Git</h3>
        </div>
       
       </div>
       
       </div>
    
     </div>


    </div>
  );
}

export default Home;
