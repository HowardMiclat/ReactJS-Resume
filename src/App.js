import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="LeftColumn">
            <Contact />
            <Education />
            <Skills />
          </div>
          <div className="RightColumn">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="HeaderContent">
      <h1>Jerome Howard Miclat</h1>
      <h2>IT Consultant</h2>
    </div>
  );
}

function Contact() {
  return (
    <div className="Section">
      <h3>Contact</h3>
      <div className="ContactItem">
        <i className="fas fa-envelope"></i>
        <span>Email: HowardMiclat26@gmail.com</span>
      </div>
      <div className="ContactItem">
        <i className="fas fa-phone"></i>
        <span>Phone: (63) 956-716-8068</span>
      </div>
      <div className="ContactItem">
        <i className="fas fa-map-marker-alt"></i>
        <span>Location: San Simon, Pampanga, Philippines</span>
      </div>
      <div className="ContactItem">
        <i className="fab fa-linkedin"></i>
        <a href="www.linkedin.com/in/jerome-howard-miclat-bb6646328">LinkedIn</a>
      </div>
      <div className="ContactItem">
        <i className="fab fa-github"></i>
        <a href="https://github.com/HowardMiclat">Github</a>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="Section">
      <h3>Education</h3>
      <p>Bachelor of Science in Information Technology</p>
      <p>University of the Assumption, San Fernando, Philippines</p>
      <p>2022 - 2026</p>
    </div>
  );
}

function Skills() {
  return (
    <div className="Section">
      <h3>Skills</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Java</li>
        <li>Canva</li>
        <li>Figma</li>
        <li>Bootstrap</li>
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div className="Section">
      <h3>Learning Experience</h3>
      <div className="ExperienceItem">
        <h4>HTML</h4>
        <ul id="exp-list">
          <li>Was able to make a functional Portfolio <a href="https://howardmiclat.github.io/My-Portfolio/#">website</a>. </li>
          <li>Was able to make a <a href="https://codepen.io/JEROME-HOWARD-S-MICLAT/pen/QWPPqqV">payroll system</a>.</li>
          <li>Was able to make a <a href="https://codepen.io/JEROME-HOWARD-S-MICLAT/pen/qBwObJM">simple calculator</a>.</li>
          <li>Was able to make simple informative webpages to serve as templates.</li>
          <li>was able to make a <a href="https://howardmiclat.github.io/Facebook-Clone/">facebook login page clone</a> </li>
          
         
        </ul>
      </div>
      <div className="ExperienceItem">
        <h4>JavaScript</h4>
        <ul id="exp-list">
          <li>Was able to make good use of JavaScript to create a resume in a React App</li>
          <li>Was able to make good use of JavaScript to make a payroll system functional</li>
          <li>Was able to make good use of JavaScript to make a simple calculator functional</li>
        </ul>
      </div>
      <div className="ExperienceItem">
        <h4>Bootstrap</h4>
        <ul id="exp-list">
          <li>Was able to make use of Bootstrap to lighten the load of css in making a facebook login page clone</li>
        </ul>
      </div>
      <div className="ExperienceItem">
        <h4>Canva</h4>
        <ul id="exp-list">
          <li>Was able to make good use of canva to design <a href="https://www.canva.com/design/DAGP_Lq3ctw/JxdPwabw2y4YIohjcvDnqQ/edit?utm_content=DAGP_Lq3ctw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">my own take</a> of the facebook login page.</li>
          <li>Was able to make good use of canva to design <a href="https://www.canva.com/design/DAGPTfV7F50/1pxs5zQDOIgce108u5ac8w/edit?utm_content=DAGPTfV7F50&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">a simple poster</a> .</li>
          <li>was able to make good use of canva to design <a href="https://www.canva.com/design/DAFhNYzyeq4/iPXlDMTWYolXTpm0LZie4g/edit?utm_content=DAFhNYzyeq4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"> a simple powerpoint on high fidelity design</a>.</li>
        </ul>
      </div>
    </div>
  );
}
