import React, {Component} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


import './menuBar.css';

export default class MenuBar extends Component{
    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    render(){
        return(
            <nav className="menuContainer">
                <div className="leftContainer">
                    <h1 onClick={this.scrollToTop}>Logo</h1>
                </div>
                <div className="rightContainer">
                    <ul className="menuContent">
                        <li>
                            <Link
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Home
                            </Link>
                        </li>
    
                        <li>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About Us
                            </Link>
                        </li>
    
    
                        <li>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Services
                            </Link>
                        </li>
    
                        {/* <li>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Portfolio
                            </Link>
                        </li> */}
    
                        <li>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

// export default MenuBar;