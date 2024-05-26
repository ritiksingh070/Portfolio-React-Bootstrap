import "../assets/css/about.css";

import {
  CodeSlash
  
} from "react-bootstrap-icons";

export default function About() {
  return (
    <section id="about">
      <div className="header d-flex flex-row align-items-center">
        <div className="header-title">ABOUT ME</div>
        <div className="header-line"></div>
      </div>
      <div className="about-me">
        I am Ritik Singh, an aspiring software engineer currently pursuing my
        3rd year B.Tech degree. With a passion for technology and innovation, I
        specialize in creating dynamic and responsive websites. My technical
        skill set includes HTML, CSS, JavaScript, React, Bootstrap, Tailwind,
        Node.js, Express.js, and MongoDB. I am dedicated to elevating online
        presence by crafting sleek, user-friendly interfaces and developing
        robust backend systems. My commitment to continuous learning and
        professional growth drives me to stay updated with the latest industry
        trends and best practices. Whether it’s building a seamless user
        experience or ensuring a solid backend structure, I am equipped to
        handle various aspects of web development. I look forward to
        contributing my skills and creativity to impactful projects and
        advancing in the field of software engineering.<br></br>Let's discuss how I can
        contribute to your success!
      </div>

      <div className="header2">
        <div className="header-title">What I do!</div>
      </div>
      <div className="services d-flex justify-content-center align-content-start flex-wrap">



        <div className="service" style={{ backgroundColor: "#FFEBD0" }}>
          <div className="service-header d-flex justify-content-start align-items-center">
            <div className="service-icon">
              <CodeSlash fill="red" />
            </div>
            <div className="service-title">Web Developement</div>
          </div>
          <div className="service-content">
            I specialize in creating dynamic and responsive websites utilizing a
            range of modern technologies, including HTML, CSS, JavaScript,
            React, Bootstrap, Tailwind, Node.js, Express.js, and MongoDB. My
            expertise spans from designing sleek, user-friendly interfaces to
            developing robust backend systems, ensuring a seamless and engaging
            user experience.
          </div>
        </div>

        
      </div>
    </section>
  );
}
