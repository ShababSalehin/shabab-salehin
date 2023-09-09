import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./about.css";
import { BsCalendarDate } from "react-icons/bs";

const About = () => {
  return (
    <section>
      <SectionHeading heading={"About Me"}></SectionHeading>
      <h3 className="secondary-heading margin-bottom-bg">
        I am Shabab Salehin, A<span> Junior Software Engineer</span>
      </h3>
      <p className="description margin-bottom-bg">
        A motivated IT Professional who is passionate in Full Stack Web Development with an eagerness to acquire new knowledge and adjust accordingly. Exceptional abilities in analysis, problem-solving and attention to detail. Proficient in creating robust, optimized, and scalable Web solutions.
      </p>
      <div className=" information grid grid-2-col">
        <div className="data">
          <div className="grid grid-2-col">
            <div className="info-box">
              <p className="info-title">Birthday:</p>
              <p className="info">30th December, 2000</p>
            </div>
            <div className="info-box">
              <p className="info-title">Age:</p>
              <p className="info">24</p>
            </div>
            <div className="info-box">
              <p className="info-title">Website:</p>
              <p className="info">
                <a href="https://shabab-portfolio.netlify.app/">Click Here</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Email:</p>
              <p className="info">
                <a href="mailto:auddhayashabab@gmail.com">auddhayashabab@gmail.com</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">Education:</p>
              <p className="info">MSc. in Information & Communication Engineering</p>
            </div>            
            <div className="info-box">
              <p className="info-title">University:</p>
              <p className="info">Bangladesh University of Professionals (BUP)</p>
            </div>
            <div className="info-box">
              <p className="info-title">Phone:</p>
              <p className="info">
                <a href="tel:+8801617491981">+8801617491981</a>
              </p>
            </div>
            <div className="info-box">
              <p className="info-title">City:</p>
              <p className="info">Mirpur, Dhaka, Bangladesh</p>
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1ByULJjkjZGAT5xZlPTQ9Uv52p9QYEisS/view?usp=sharing"
            className="btn margin-right-sm" rel="noopener noreferrer" target="_blank"
          >
            Download CV
          </a>
          <Link to="/contact" className="btn">
            Hire Me
          </Link>
        </div>
        <div className="skill">
          <div className="skill-box">
            <p className="skill-name">HTML5</p>
            <div className="skill-bar">
              <span style={{ width: "95%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">CSS3</p>
            <div className="skill-bar">
              <span style={{ width: "90%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Bootstrap</p>
            <div className="skill-bar">
              <span style={{ width: "85%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">JavaScript</p>
            <div className="skill-bar">
              <span style={{ width: "75%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">TailwindCSS</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">React.Js</p>
            <div className="skill-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">Laravel</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">CodeIgniter</p>
            <div className="skill-bar">
              <span style={{ width: "80%" }}></span>
            </div>
          </div>
          <div className="skill-box">
            <p className="skill-name">PHP</p>
            <div className="skill-bar">
              <span style={{ width: "70%" }}></span>
            </div>
          </div>
        </div>
      </div>
      <div className="edu-exp grid grid-2-col">
        <div className="education">
          <h3 className="secondary-heading margin-bottom-md">Education</h3>
          <div className="details">
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2022 - Present</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                M.Sc in Information & Communication Engineering
              </h4>
              <p className="description">
                Bangladesh University of Professionals (BUP)<br/>
                CGPA: 3.58 (Current)
              </p>
            </div>
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>2018 - 2022</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                B.Sc in Information & Communication Engineering
              </h4>
              <p className="description">
                Bangladesh University of Professionals (BUP)<br/>
                CGPA: 3.53
              </p>
            </div>
          </div>
        </div>
        <div className="experience">
          <h3 className="secondary-heading margin-bottom-md">Experience</h3>
          <div className="details">
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>May 2023 - Present</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Junior Software Engineer
              </h4>
              <p className="description">
                4axiz IT Ltd.<br/>
                Stack: Laravel, CodeIgniter, Ajax, JavaScript
              </p>
            </div>
            <div className="details-box">
              <div className="year">
                <BsCalendarDate className="icon"></BsCalendarDate>
                <p>March 2023 - April 2023</p>
              </div>
              <h4 className="tertiary-heading margin-bottom-sm">
                Backend Developer Intern (Remote)
              </h4>
              <p className="description">
                3W Business Private Limited<br/>
                Stack: Laravel, JavaScript, Tailwind CSS, Bootstrap
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
