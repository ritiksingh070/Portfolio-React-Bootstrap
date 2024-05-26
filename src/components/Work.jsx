import { Image } from "react-bootstrap";
import "../assets/css/work.css";

import bootstrap_website_theme_naruto from "../assets/images/works/bootstrap_website_theme_naruto.png";
import github_scraper_pure_selenium from "../assets/images/works/github_scraper_pure_selenium.png";
import news_website from "../assets/images/works/news_website.png";
import parth_desai_website from "../assets/images/works/parth_desai_website.jpg";
import portfolio_website from "../assets/images/works/portfolio_website.png";
import todo_and_calculator_javascript_project from "../assets/images/works/todo_and_calculator_javascript_project.jpg";

export default function Work() {
    return (
        <section>
            <div className="header d-flex flex-row align-items-center">
                <div className="header-title">Work</div>
                <div className="header-line"></div>
            </div>

            <div className="works-wraper d-flex align-content-start justify-content-center flex-wrap">
                {/* <div className="work-box">
                    <Image src={} />
                    <div className="work-details">
                        <div className="category">Web Development</div>
                        <div className="title">Netflix Clone</div>
                    </div>
                </div> */}
               
            </div>

        </section>
    );
}