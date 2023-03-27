import Footer from "./Footer"
import Header from "./Header"
import {FaDatabase} from "react-icons/fa"
import {AiOutlineTeam} from "react-icons/ai"
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie  from "lottie-react"
import coding from "../images/coding.json"
import Projects from "./Projects"
import CodeIcon from '@mui/icons-material/Code';
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

    AOS.init();

const Home=()=>{
  
    return (
      <>
        <Header />

        <main>
          <section className="section section__hero">
            <div className="container">
              <div
                className="section__hero-text"
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <h1>Hello, I am Roei</h1>
                <h1 className="second-head">Full Stack Developer</h1>

                <p>
                 Here you can meet me and my projects.
                </p>
                <a className="btn btn-primary" href="#projects">Get Started</a>
              </div>
              <div
                className="section__hero-img"
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="200"
              >
                <Lottie animationData={coding} loop={true}/>
              </div>
            </div>
          </section>
          <section className="section" id="projects">
          <h1 className="text-4xl">My projects</h1>
          </section>
          <section className="section" >
          <Projects projectVid="" title="SnowBound" 
          description="SnowBound is a comprehensive online resource for skiers,
          providing information on ski resorts around the world, lift ticket prices, ski conditions, reviews and more."
          linktogit="https://github.com/o6mer/snowbound"
          linktoweb="https://snowbound.netlify.app"
          />
          </section>
          <section className="section">
          <Projects projectVid="" title="Tic-Tac-Toe" 
          description="Welcome to Tic Tac Toe, the classic game of X's and O's! In this version of the game, you can play both against a computer opponent and with a friend. The twist? The computer is unbeatable, so you'll have to bring your A-game to stand a chance."
          linktogit="https://github.com/roeiu100/Tic-tac-toe"
          linktoweb="https://master--reliable-liger-252ef0.netlify.app/"
          />
          </section>
          <section className="section">
          <Projects projectVid="" title="Workout Planner" 
          description="The workout planner is a tool that helps you organize and plan your fitness routine. It allows you to set goals, track progress, and schedule workouts. With a workout planner, you can ensure that you are getting the most out of your exercise routine and staying on track to achieve your fitness goals."
          linktogit="https://github.com/OrrFarber/Group-Project"
          linktoweb=""
          />
          </section>
          <section  id="starthere" className="section section__advancedStat">
            <div className="container">
              <div
                className="section__advancedStat-text"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <h2 >My skills</h2>
                <p>
                  {" "}
                I am versatile full-stack developer with experience
                 in multiple programming languages.
                 Passionate about technology and dedicated to continuous learning, 
                 Always eager to develop new skills and take on new challenges.
                </p>
              </div>
              <div className="section__advancedStat-grid">
                <div className="section__advancedStat-gridItem section__advancedStat-gridItem-1">
                  <div className="icon__wrapper">
                    <div className="icon__bg">
                   <CodeIcon sx={{ fontSize: 40 }}/> 
                    </div>
                  </div>
                  <h3>Front end skills</h3>
                  <p data-aos="fade-left" data-aos-delay="200">
                   React, NodeJs, Express, MongoDB,
                   SQL, Python, Redux, C#, HTML, CSS, TailWind, Mui, and Firebase
                  </p>
                </div>
                <div className="section__advancedStat-gridItem section__advancedStat-gridItem-2">
                  <div className="icon__wrapper">
                    <div className="icon__bg">
                      <FaDatabase/>
                    </div>
                  </div>
                  <h3>Back end skills</h3>
                  <p data-aos="fade-left" data-aos-delay="200">
                  NodeJs, Express, MongoDB, SQL, Python, Redux, and Firebase
                  </p>
                </div>
                <div className="section__advancedStat-gridItem section__advancedStat-gridItem-3">
                  <div className="icon__wrapper">
                    <div className="icon__bg">
                    <AiOutlineTeam/>
                    </div>
                  </div>
                  <h3>Team skills</h3>
                  <p data-aos="fade-left" data-aos-delay="200">
                  experience working in teams of up to 4 people,
                  and as well developing full-stack applications and using Git for version control.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </>
    );
}

export default Home