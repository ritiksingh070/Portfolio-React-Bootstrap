import "../assets/css/resume.css";
import { Mortarboard, Briefcase } from "react-bootstrap-icons";

export default function Resume() {
  const handleExperience = (e) => {
    e.stopPropagation();

    window.open(
      "https://drive.google.com/file/d/1PaPYI0hFXkIfNunVj4I0cUz1yBGZOQEk/view",
      "_blank"
    );
  };
  return (
    <>
      <section>
        <div className="header d-flex flex-row align-items-center">
          <div className="header-title">Resume</div>
          <div className="header-line"></div>
        </div>

        <div className="resume-wraper d-flex justify-content-between">
          <div className="education">
            <div className="header d-flex align-items-center">
              <Mortarboard fill="url(#icon-gradiant)" />
              <div className="title">Education</div>
            </div>

            <div className="detail-box">
              <div className="time-duration">2021-2025</div>
              <div className="title">Computer Science and Engineering</div>
              <div className="school-or-clg">
                Netaji Subhash Engineering College
              </div>
            </div>

            <div
              className="detail-box"
              style={{ backgroundColor: "rgba(255, 227, 191, 0.7)" }}
            >
              <div className="time-duration">2018-2020</div>
              <div className="title">Intermediate</div>
              <div className="school-or-clg">Happy Valley School,Bhagalpur</div>
            </div>
          </div>
          <div className="experience">
            <div className="header d-flex align-items-center">
              <Briefcase fill="url(#icon-gradiant)" />
              <div className="title">Experience</div>
            </div>

            <div
              className="detail-box"
              style={{ backgroundColor: "rgba(255, 227, 191, 0.7)" }}
              onClick={handleExperience}
            >
              <div className="time-duration">3rd Jan – 17th Feb 2024</div>
              <div className="title">Frontned Developer</div>
              <div className="school-or-clg">
                Sprigrer Technology Private Limited
              </div>
            </div>

            <div className="detail-box">
              <div className="time-duration">20 May - 20 July 2024</div>
              <div className="title">Frontned Developer</div>
              <div className="school-or-clg">Celebal Technologies</div>
            </div>
          </div>
        </div>
      </section>
      <div className="skills-wraper d-flex justify-content-between">
        <div className="work-skills">
          <div className="header">
            <div className="title">Work Skills</div>
          </div>

          <div className="skills d-flex flex-wrap">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JS</div>
            <div className="skill">jQuery</div>
            
            <div className="skill">ReactJS</div>
            <div className="skill">Node JS</div>
            <div className="skill">Express JS</div>
            <div className="skill">Mongo DB</div>
            <div className="skill">Postman</div>
            <div className="skill">Git | Github</div>
            <div className="skill">Postman</div>


            <div className="skill">MySQL</div>
            <div className="skill">PHP</div>

          </div>
        </div>
        <div className="soft-skills">
          <div className="header">
            <div className="title">Soft Skills</div>
          </div>

          <div className="skills d-flex flex-wrap">
            <div className="skill">Time management</div>
            
            <div className="skill">Quick learner</div>
            <div className="skill">Communication</div>
            <div className="skill">Teamwork</div>
            <div className="skill">Leadership</div>
            <div className="skill">Problem solving</div>
          </div>
        </div>
      </div>
    </>
  );
}
