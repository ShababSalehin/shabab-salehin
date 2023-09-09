import { Link } from "react-router-dom";
import SectionHeading from "../../../Components/SectionHeading/SectionHeading";
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./home.css";

const Home = () => {
  return (
    <section className="home">
      <SectionHeading heading={"Home"}></SectionHeading>
      <div className="grid grid-2-col">
        <div className="hero">
          <h3 className="secondary-heading transform-left-animation">
            Hi, I Am <span>Shabab Salehin</span>
          </h3>
          <p className="subtitle transform-left-animation">Junior Software Engineer</p>
          <p className="description transform-right-animation">
          A motivated IT Professional who is passionate in Full Stack Web Development with an eagerness to acquire new knowledge and adjust accordingly. Exceptional abilities in analysis, problem-solving and attention to detail. Proficient in creating robust, optimized, and scalable Web solutions.
          </p>
          <Link to="/about" className="btn margin-right-sm transform-right-animation">
            About Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1ByULJjkjZGAT5xZlPTQ9Uv52p9QYEisS/view?usp=sharing"
            className="btn transform-right-animation" rel="noopener noreferrer" target="_blank"
          >Download CV</a>
          <div className="social scale-animation">
            <div className="social-list">
              <a
                href="https://www.linkedin.com/in/shabab-salehin/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillLinkedin></AiFillLinkedin>
              </a>
            </div>
            <div className="social-list">
              <a
                href="https://github.com/ShababSalehin"
                rel="noreferrer"
                target="_blank"
              >
                <AiOutlineGithub></AiOutlineGithub>
              </a>
            </div>
          </div>
        </div>
        <ProfilePhoto></ProfilePhoto>
      </div>
    </section>
  );
};

export default Home;
