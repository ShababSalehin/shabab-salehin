import SectionHeading from "../../Components/SectionHeading/SectionHeading";
import "./portfolio.css";
import img1 from "./../../../public/weatherapp.jpg";
import img2 from "./../../../public/shabab-mart.jpg";
import img3 from "./../../../public/unikart.jpg";
import img4 from "./../../../public/todo-taskmaster.jpg";
import img5 from "./../../../public/quiz-fusion.jpg";
import img6 from "./../../../public/hrmpayroll.jpg";
import img7 from "./../../../public/salehin-cart.jpg";
import img8 from "./../../../public/umc.jpg";
import img9 from "./../../../public/bazarnao.jpg";

const Portfolio = () => {
  return (
    <section>
      <SectionHeading heading={"Portfolio"}></SectionHeading>
      <div className="grid grid-3-col">
        <div className="portfolio-box scale-animation">
          <img src={img1} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> WeatherApp
            </p>
            <p>
              <span>Technologies:</span>  React JS, HTML, CSS3, React-router-dom
            </p>
            <p className="description">
              This is a Weather Application where users can get the weather information of his current location. Users also can check the latest weather information of any places in the world.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://shabab-weatherapp.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/ShababSalehin/WeatherApp-ReactJS"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img2} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Shabab Mart
            </p>
            <p>
              <span>Technologies:</span>  React JS, HTML, CSS3, React-router-dom
            </p>
            <p className="description">
              This is a E-Commerce Application with numerous product filtering option. 
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://shabab-ecommerce.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/ShababSalehin/shabab-ecommerce"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img3} alt="" />
          <div className="portfolio-info">
             <p>
              <span>Name:</span> Unikart
            </p>
            <p>
              <span>Technologies:</span>  Laravel, HTML5, Bootstrap5, JavaScript ES6
            </p>
            <p className="description">
              This is a E-Commerce Project for Unikart which is an Elegant Makeup, Skin Care, and Hair Care Products Online Shop In Bangladesh.
            </p>
            <div className="grid grid-3-col">
              <a
                href="https://unikart.com.bd/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img4} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> TaskMaster
            </p>
            <p>
              <span>Technologies:</span>  React JS, HTML, CSS3, React-router-dom
            </p>
            <p className="description">This is a To-Do Application with the option of adding, editing and removing tasks.</p>
            <div className="grid grid-3-col">
              <a
                href="https://todo-taskmaster.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/ShababSalehin/taskmaster"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img5} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> QuizFusion
            </p>
            <p>
              <span>Technologies:</span>  React JS, HTML, CSS3, React-router-dom
            </p>
            <p className="description">A Quiz Playing application where user can play filtering by Categories and Difficulties.</p>
            <div className="grid grid-3-col">
              <a
                href="https://quizfusion.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/ShababSalehin/QuizFusion"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img6} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> HRM Payroll
            </p>
            <p>
              <span>Technologies:</span>  Laravel, Ajax, HTML5, Bootstrap5, JavaScript ES6 
            </p>
            <p className="description">This ERP complete Solution is built for 4Axiz IT Limited.
</p>
            <div className="grid grid-3-col">              
              
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img7} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Salehin Cart
            </p>
            <p>
              <span>Technologies:</span>  React JS, HTML, CSS3, React-router-dom
            </p>
            <p className="description">The Salehin Cart application is a React JS project with a Shopping Cart feature.</p>
            <div className="grid grid-3-col">
              <a
                href="https://salehin-cart.netlify.app/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
              <a
                href="https://github.com/ShababSalehin/salehin-cart"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img8} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> Uttara Model CLub
            </p>
            <p>
              <span>Technologies:</span>  CodeIgniter, HTML5, Bootstrap5, JavaScript ES6
            </p>
            <p className="description">This ERP and Resturant Management application is built for Uttara Model Club.</p>
            <div className="grid grid-3-col">
              
            </div>
          </div>
        </div>
        <div className="portfolio-box scale-animation">
          <img src={img9} alt="" />
          <div className="portfolio-info">
            <p>
              <span>Name:</span> BazarNao
            </p>
            <p>
              <span>Technologies:</span>  Laravel, HTML5, Bootstrap5, JavaScript ES6
            </p>
            <p className="description">This is a E-Commerce Project for BazarNao which is the 1st Bangladeshi e-grocery which provides groceries on credit to Bangladeshi people. It is a platform where customers can get all daily necessary products at affordable prices and in a very short time.</p>
            <div className="grid grid-3-col">
              <a
                href="https://bazarnao.com/"
                className="btn-sm"
                rel="noreferrer"
                target="_blank"
              >
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
