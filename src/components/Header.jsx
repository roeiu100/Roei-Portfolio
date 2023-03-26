import menuIcon from '../images/icon-hamburger.svg'
import { useState } from 'react'
import { IoMdTennisball } from "react-icons/io";
const Header=()=>{
    const [navOpen, setNavOpen] = useState(false)
    return (
      <header>
        <nav>
          <div className="nav__group">
           
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
                  <img src={menuIcon} alt="" />
                </button>
              </div>
            </div>

            <div
              className={`nav-list__wrapper ${navOpen === false ? "hide" : ""}`}
            >
              <ul className="nav-list">
                <li>
                  <a href="#projects" className="nav-link">
                    Projects
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=cebfa53f4b&attid=0.1&permmsgid=msg-a:r-2303110749135916240&th=187040914f64e007&view=att&disp=inline&saddbat=ANGjdJ9g1TnfkmZwF5OBIIqTpDa-paCxw0iWbJX9zZvZA0ZY1vM5A55YN3qoJjLitBKQELmnnd0bpikVD2tKFR1zYP86qDEa9kCLLxksHXa_dbjukzt_yrKkyJaclaZSgz9jkPnPByiAj3aG3MEG6S8VfbtKexzeYQ1RbOpN3dsYbiet_mKttUK7GK6yDiet5x237FoSJDDPJZVcBhmI-zKojLczGYps0E0st33OIgtlgTM26kIvIET7J-IW_yvhiAI0WmPzoKinjFCYy78z9AQaN3YCi-frkkEZC0pF-Cp0tVTIXA8_L7DHCed4rWVxowlEf7gWnKvmUwqOF3jKOc4eR5Wbej2SM0GWz_G3EsTwXG2MqcBB5Tnc4Ma2_yZhJqhZkmbjurT2MsuYBUCf1oE4wnRLDjF2qwfzMmON96vsITVQ-EODGKnDtRef9IifTmXrjtLKfXbQW6PHEfXEv2jwNy92I2vaqIJymXCAH2ljauRIwpLjpKrlJrcLMcy6_zrH4z3tny8w2bug4vQKl4eWkNGDodfeQ9te0Eyl_B0Lz9bY_EDTaWpZN54-94LJsN6DdIr3JZamp4TtcVMeC1jSI0LQyOt_tqsMb-7V1Qx5t1in6t4FUN0lrQnfBDUbiQ96MGFRZxWd09wdnrdKEQhwR107NerApOhxRCJ0BuRvkLE1IdTl8NohhjULnScTcSJ9fj4zHJixEtNPZ-iUFjv3a5li4DTn2hl5lTvrzA_qr_NL89G4EhK1Ek0c1FZ0g1-klANWwZro_kSvuJ98YmAWLvVtJbG0-gqxPCcdzjMMohV_kQGhmn2WVeDC6sb7HGSWSorWT5Mq8ZzUyO7Ssw7VA8cdtiN9At-QrWrBqzZAaNzqaxCIIs6zaoVxGz17OUjQ5KUGgcnkA02NqTaO43PcbykSKfeTkPKCvwjaSJ3M6UK9oBQfMt78DW3E-5Gv_OXyn0KL0EN6PsHhXcsDvKgAiT0PXoezmyfCpLa5CyJjVOFM1RjAW6-yihFrZRZMbhIPzMSQep3k2CdfFucw" className="nav-link">
                    Resume
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://github.com/roeiu100" className="nav-link">
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