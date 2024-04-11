import DP1 from './DP1.png';
import DPP from './DP.png';
import Cert1 from './Cert1.png';
import Cert2 from './Cert2.png';
import Cert3 from './Cert3.png';
import Cert4 from './Cert4.png';
import Cert5 from './Cert5.png';
import LogoKVS from './logokvs.jpg';
import LogoVIT from './logovit.png';
import Involve from './involve.jpg';
import IEEE from './ieee.png';
import IEEECs from './ieeecs.png';
import DSDProj from './dsdproj.png';
import DP from './DP.png';
import AI from './AI.jpg';
import Img1 from './Img1.png';
import Img2 from './Img2.png';
import Img3 from './Img3.png';
import Img4 from './Img4.png';
import Img5 from './Img5.png';
import Ravi from './ravi1.jpg';
import Test2 from './dp2.JPG';
import Test3 from './DP1.png';
import Test4 from './PPP.png';

function App() {
  return (
  <div classname="App">
    <div className="navbar">
      <div className="MAIN-BUTTON">
        <a className="btn btn1" href="index.html" target="_self">
          THARUN RAVI
        </a>
      </div>
      <div className="NAV-BUTTONS">
        <a className="btn btn2" href="#about-me" target="_self">
          🧒 ABOUT ME
        </a>
        <a className="btn btn3" href="#project-page" target="_self">
          👨‍💻 PROJECTS
        </a>
        <a className="btn btn4" href="#skill-set" target="_self">
          🔧 SKILLS
        </a>
        <a className="btn btn5" href="#testimonial-page" target="_self">
          🎓 TESTIMONIALS
        </a>
        <a className="btn btn6" href="#resume-page" target="_self">
          📄 RESUME
        </a>
        <a className="btn btn7" href="#contact-page" target="_self">
          📞 CONTACT
        </a>
      </div>
    </div>
    <div className="homepage">
      <div className="dp-img">
      <img src={DPP} alt="DP1" />
      </div>
      <div className="welcome">
        <div className="box3">
          <h2 id="name" style={{ animation: "mymove 5s infinite" }}>
            Hello 👋! I am THARUN!
          </h2>
        </div>
        <h2 id="para"> &lt; CS Sophomore @ VIT Vellore /&gt;</h2>
        <h2> Aspiring Research Scientist </h2>
      </div>
    </div>
    <div className="about" id="about-me">
      <h3>
        <span> About Me </span>
      </h3>
      <div className="container">
        <div className="aboutme">
          <div className="dp">
          <img src={DP1} alt="DP1" />
          </div>
          <div className="para">
            Hey, I'm Tharun R, a sophomore at VIT Vellore studying CSE. I'm
            still figuring out this tech world, but I'm really into AI, ML,
            Computer Vision, Data Science, and Software Development. Slowly
            getting the hang of things and trying to improve bit by bit.
            Dreaming of becoming a Research Scientist or a Software Developer –
            aiming high, you know? It's all a bit overwhelming, but I'm excited
            about the journey. Join me on this bumpy ride as I try to make sense
            of the coding and tech stuff. Cheers to learning and growing, one
            step at a time!
          </div>
        </div>
      </div>
      <p>
        <span>CERTIFICATIONS</span>
      </p>
      <div className="img-container" style={{ marginTop: 40 }}>
        <div className="img-proj">
        <img src={Cert1} alt="Cert1" />
        </div>
        <div className="img-proj">
        <img src={Cert2} alt="Cert2" />
        </div>
        <div className="img-proj">
        <img src={Cert3} alt="Cert3" />
        </div>
        <div className="img-proj">
        <img src={Cert4} alt="Cert4" />
        </div>
        <div className="img-proj">
        <img src={Cert5} alt="Cert5" />
        </div>
      </div>
      <p style={{ margin: "40px 0px" }}>
        <span>EDUCATION</span>
      </p>
      <div className="TIMELINE-BOX">
        <div className="line"></div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={LogoKVS} alt="Logo KVS" />
          </div>
          <div className="DETAIL">
            <h5>Kendriya Vidyalaya IIT Madras</h5>
            <p>Class X - 94.8%</p>
            <p>
              <span>2010-2020</span>
            </p>
          </div>
        </div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={LogoKVS} alt="Logo KVS" />
          </div>
          <div className="DETAIL">
            <h5>Kendriya Vidyalaya IIT Madras</h5>
            <p>Class XII - 92.8%</p>
            <p>
              <span>2021-2022</span>
            </p>
          </div>
        </div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={LogoVIT} alt="Logo VIT" />
          </div>
          <div className="DETAIL">
            <h5>Vellore Institute of Technology, Vellore</h5>
            <p>CGPA - 9.32/10</p>
            <p>
              <span>2022-2026</span>
            </p>
          </div>
        </div>
      </div>
      <p style={{ margin: "40px 0px" }}>
        <span>EXPERIENCE</span>
      </p>
      <div className="TIMELINE-BOX">
        <div className="line"></div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={Involve} alt="Involve" />
          </div>
          <div className="DETAIL">
            <h5>Involve Education - IITM Startup</h5>
            <p>Student Educator</p>
            <p>
              <span>2018-2018</span>
            </p>
          </div>
        </div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={IEEE} alt="IEEE" />
          </div>
          <div className="DETAIL">
            <h5>IEEE - IC-ETITE'24 Conference</h5>
            <p>Volunteer</p>
            <p>
              <span>2023-Present</span>
            </p>
          </div>
        </div>
        <div className="DESCRIPTION">
          <div className="logo">
          <img className="image" src={IEEECs} alt="IEEE" />
          </div>
          <div className="DETAIL">
            <h5>IEEE Computer Society, VITV</h5>
            <p>Researcher</p>
            <p>
              <span>2024-Present</span>
            </p>
          </div>
        </div>
      </div>
      <p style={{ margin: "50px 0px" }}>
        {" "}
        <a
          href="https://www.linkedin.com/in/tharun-ravisubramanian/"
          target="_blank"
          id="linkedin"
        >
          <span>🔗 LinkedIn</span>
        </a>
      </p>
    </div>
    <div className="projects" id="project-page">
      <h3>
        <span> Projects </span>
      </h3>
      <div className="project-card">
      <img src={DSDProj} alt="DSD Project" />
        <h3>
          <span>DSD - ALL IN ONE</span>
        </h3>
        <p>
          Destination for revising Digital Systems Design - Contains
          definitions, circuit diagrams, verilog code etc!
        </p>
        <a
          className="link"
          href="https://tharun-r-git.github.io/DSD-ALL-IN-ONE/index.html"
          target="_blank"
        >
          <span>CLICK HERE FOR DETAILS -</span>
        </a>
      </div>
      <div className="project-card">
      <img src={DP} alt="DP" />
        <h3>
          <span>PORTFOLIO WEBSITE</span>
        </h3>
        <p>Wanna know about Tharun Ravisubramanian? This is the right place!</p>
        <a className="link" href="index.html">
          <span>CLICK HERE FOR DETAILS -&gt;</span>
        </a>
      </div>
      <div className="project-card">
      <img src={AI} alt="AI" />
        <h3>
          <span>MY FIRST GAN</span>
        </h3>
        <p>
          Developed my first Generative Adversarial Network using Pytorch
          framework!
        </p>
        <a
          className="link"
          href="https://github.com/Tharun-R-Git/My_First_GAN/blob/main/Copy_of_Build_a_Generative_Adversarial_Network_.ipynb"
          target="_blank"
        >
          <span>CLICK HERE FOR DETAILS -</span>
        </a>
      </div>
      <div className="img-container">
        <div className="img-proj">
        <img src={Img1} alt="Img1" />
        </div>
        <div className="img-proj">
        <img src={Img2} alt="Img2" />
        </div>
        <div className="img-proj">
        <img src={Img3} alt="Img3" />
        </div>
        <div className="img-proj">
        <img src={Img4} alt="Img4" />
        </div>
        <div className="img-proj">
        <img src={Img5} alt="Img5" />
        </div>
      </div>
    </div>
    <div className="skills" id="skill-set">
      <h3>
        <span> Skills </span>
      </h3>
      <p id="skills">
        <span>Programming Languages</span>
      </p>
      <div className="skill-container">
        <div className="skill-box">
          <div className="skill-progress">
            <h3 id="skill-text">C++</h3>
          </div>
          <div className="skill-desc">
            Used in FinTech, Game Development, Operating System.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="python">
            <h3 id="skill-text">Python</h3>
          </div>
          <div className="skill-desc">
            Used in Data Science, ML, DL, Artificial Intelligence applications.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="java">
            <h3 id="skill-text">Java</h3>
          </div>
          <div className="skill-desc">
            Used to make mobile/web applications, cloud computing etc.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="mysql">
            <h3 id="skill-text">MySQL</h3>
          </div>
          <div className="skill-desc">
            Used in databases, fetching and classifying data.
          </div>
        </div>
      </div>
      <p id="skills">
        <span>Web Technologies</span>
      </p>
      <div className="skill-container">
        <div className="skill-box">
          <div className="skill-progress" id="html">
            <h3 id="skill-text">HTML</h3>
          </div>
          <div className="skill-desc">
            Used for scripting the structure of webpages
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="css">
            <h3 id="skill-text">CSS</h3>
          </div>
          <div className="skill-desc">
            Used for styling the webpages, giving more readability.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="javascript">
            <h3 id="skill-text">JavaScript</h3>
          </div>
          <div className="skill-desc">
            Used to make websites more interactive.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="reactjs">
            <h3 id="skill-text">React.js</h3>
          </div>
          <div className="skill-desc">
            Used to make websites more interactive.
          </div>
        </div>
      </div>
      <p id="skills">
        <span>Technical Skills</span>
      </p>
      <div className="skill-container">
        <div className="skill-box">
          <div className="skill-progress" id="dsa">
            <h3 id="skill-text">DSA</h3>
          </div>
          <div className="skill-desc">
            Developing efficient softwares, optimizing performance, solving
            complex computations.
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="ml">
            <h3 id="skill-text">ML</h3>
          </div>
          <div className="skill-desc">
            Analyzing and interpreting patterns and structures in data to enable
            decision making
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="cv">
            <h3 id="skill-text">Comp Vision</h3>
          </div>
          <div className="skill-desc">
            Trains and enables computers to understand the visual world
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-progress" id="pandas">
            <h3 id="skill-text">Pandas</h3>
          </div>
          <div className="skill-desc">
            Analyzing, cleaning, exploring, and manipulating data.
          </div>
        </div>
      </div>
    </div>
    <div className="resume" id="resume-page">
      <h3>
        <span> Resume </span>
      </h3>
      <div className="res_down">
        <a
          href="Tharun_Resume.pdf"
          download=""
          value="Tharun_Resume"
          id="res"
          target="_blank"
        >
          <span>Download Resume</span>
        </a>
      </div>
      <div className="res_down">
        <a
          href="https://drive.google.com/file/d/1ochIEOpp9i9zoWmqsPD-uKOoP5nTEUE9/view?usp=sharing"
          download=""
          value="Tharun_Resume"
          id="res"
          target="_blank"
        >
          <span>Drive Link Resume</span>
        </a>
      </div>
    </div>
    <div className="testimonial" id="testimonial-page">
      <h3>
        <span> Testimonials </span>
      </h3>
      <div className="test-container">
        <div className="test-card">
          <div className="test-details">
            <div className="test-img">
              
              <img src={Ravi} alt="Img1" />
            </div>
            <div className="test-name">
              Dr.Ravisubramanian Tech Officer IITM
            </div>
          </div>
          <div className="description">
            "<span>Highly impressed</span> with Tharun's performance in my
            Computer Science class at VITV. As a sophomore, he has displayed
            exceptional dedication, a strong grasp of complex concepts, and
            collaborative teamwork. Tharun exhibits a{" "}
            <span>passion for coding and problem-solving </span>that promises a
            bright future in the field. I am confident he will make valuable
            contributions to the world of Computer Science."
          </div>
        </div>
        <div className="test-card">
          <div className="test-details">
            <div className="test-img">
            
              <img src={Test2} alt="Img1" />
            </div>
            <div className="test-name">Dr.ProfessorName Professor VITV</div>
          </div>
          <div className="description">
            Impressed by Tharun's exceptional dedication and aptitude in my
            Computer Science class at VITV. As a sophomore, he effortlessly{" "}
            <span>grasps challenging concepts</span> and collaborates seamlessly
            with peers. Tharun exhibits a genuine passion for coding and
            problem-solving, ensuring a promising trajectory in the field.
          </div>
        </div>
        <div className="test-card">
          <div className="test-details">
            <div className="test-img">
           
              <img src={Test3} alt="Img1" />
            </div>
            <div className="test-name">Dr.ProfessorName Dean MIT</div>
          </div>
          <div className="description">
            "Tharun stands out in my Computer Science class at VITV. As a
            sophomore, he demonstrates <span>exceptional commitment</span> and
            aptitude. His understanding of complex concepts, coupled with a
            collaborative spirit, makes him a <span>valuable asset</span>. I am
            confident Tharun will continue to excel and make significant
            contributions in the field of Computer Science."
          </div>
        </div>
        <div className="test-card">
          <div className="test-details">
            <div className="test-img">
        
              <img src={Test4} alt="Img1" />
            </div>
            <div className="test-name">Mr.Sundar Pichai CEO Alphabet</div>
          </div>
          <div className="description">
            "Teaching Tharun in VITV's Computer Science program has been a
            pleasure. He brings an <span>impressive level of dedication</span>{" "}
            and enthusiasm to class. As a sophomore, Tharun not only{" "}
            <span>excels academically</span> but also collaborates effectively
            with peers. His passion for coding and problem-solving sets him on a{" "}
            <span>promising path</span> in the field of Computer Science."
          </div>
        </div>
      </div>
    </div>
    <div className="contact" id="contact-page">
      <h3>
        <span> Contact </span>
      </h3>
      <center>
        <div className="details">
          📞 +91 98408 52582 | 📧 tharun.r2022@vitstudent.ac.in |
          <a
            href="https://www.linkedin.com/in/tharun-ravisubramanian/"
            >
            🔗 LinkedIn
          </a>
        </div>
      </center>
      <div class="container">
            <div class="contact-card">
                <form>
                    <input type="text" placeholder="Your full name" required class="form-style"></input>
                    <input type="email" placeholder="Your email address" required class="form-style"></input>
                    <textarea id="msg" placeholder="Your message" rows="6" name="msg"  required class="form-style"></textarea>
                    <button className="sbtn">SUBMIT</button>
                </form>
            </div>
        </div>       

    </div>
    <footer>Thank you!🙏 Visit Again!😊</footer>
  </div>
  );
}
  export default App;
