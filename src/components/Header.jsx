import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
const Header=()=>{
    const [navOpen, setNavOpen] = useState(false)
    return (
      <header>
        <nav id='start'>
          <div className="nav__group z-10">
           
            <div className="logo__menu">
              <div className="nav-menu__wrapper">
                <button
                  className="menu"
                  aria-label="menu"
                  aria-expanded={navOpen}
                  onClick={() => {
                    setNavOpen(!navOpen);
                  }}
                >
                  <MenuIcon/>
                </button>
              </div>
            </div>

            <div
              className={`nav-list__wrapper ${navOpen === false ? "hide" : ""}`}
            >
              <ul className="nav-list">
                <li>
                  <a href="#projects"  className="nav-link">
                    Projects
                  </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" 
                        href="https://drive.google.com/file/d/1rMBRWvDDaigipz6SDVbQ15_r4Yh-w1sH/view?usp=drive_link" 
                        className="nav-link">
                     Resume
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href="https://github.com/roeiu100" className="nav-link">
                    GitHub
                  </a>
                </li>
              </ul>
              <hr className="divider" />
              <ul className="nav-list">             
                <li>
                  <a href='#footer' className="btn btn-primary">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header
