import { LinkedIn,GitHub,WhatsApp } from "@mui/icons-material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
const Footer=()=>{
    return (
      <footer id="footer">
        <section className="section section__boost">
          <div className="container">
            <a href="#start" className="btn btn-primary">
              Go back <ArrowUpwardIcon/>
            </a>
          </div>
        </section>
        <section className="section section__mainFooter">
          <div className="container">
            <div href="" aria-label="Company Logo" className="logo">
              <p
                className="p-footer"
               
              >
                Roei Shalom
              </p>
            </div>
           

            <div className="">
            <div className="socials">
            <p
                className="p-footer "
               >
                Find me
              </p></div>
              <div className="socials">
            <button
                  className=" shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a target="_blank" className="hover:text-cyan-400" href="https://wa.me/+972549499248">
                    <WhatsApp />
                  </a>
                </button>
              
                <button
                  className=" shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a target="_blank" className="hover:text-cyan-400" href="https://github.com/roeiu100">
                    <GitHub />
                  </a>
                </button>
                <button
                  className=" shadow-xl	 font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
                  type="button"
                >
                  <a target="_blank" className="hover:text-cyan-400" href="https://www.linkedin.com/in/roeishalom/">
                    <LinkedIn />
                  </a>
                </button>
                </div>
                <div className="socials">
            <p
                className="p-footer "
               >
                roeiu100@gmail.com
              </p></div>
             </div>
          </div>
        </section>
      </footer>
    );
}

export default Footer