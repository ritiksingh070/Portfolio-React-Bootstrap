import "../assets/css/work.css";

import { projects } from "../assets/data/project";

import { Image } from "react-bootstrap";

export default function Work() {
  const visitLink = (link) => {
    window.open(`${link}`, "_blank", "noopener,noreferrer");
  };
 

  return (
    <section>
      <div className="header d-flex flex-row align-items-center">
        <div className="header-title">Work</div>
        <div className="header-line"></div>
      </div>

      <div className="works-wraper d-flex align-content-start justify-content-center flex-wrap">
        {projects.map((project, index) => (
          <div className="work-box" key={index}>
            <Image src={project.imageLocation} alt="not found" />
            <div className="work-details">
              <div className="category">{project.category}</div>
              <div className="title">{project.title}</div>
              <div className="liveCodeBtn">
                <div>
                  <button onClick={() => visitLink(`${project.websiteLiveUrl}`)}>
                    Live Now
                  </button>
                </div>

                <div>
                  <button onClick={() => visitLink(`${project.sourceCodeUrl}`)}>
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
