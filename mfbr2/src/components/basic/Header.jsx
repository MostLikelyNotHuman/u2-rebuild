import { Link } from "react-router";
import { HeaderRoutes } from "./HeaderRoutes";
import "./Header.css";
import { useState } from "react";
import { Twirl as Hamburger } from 'hamburger-react';

const Header = ({}) => {

    const [ isHamburgerOpen, setIsHamburgerOpen ] = useState(false);

    return (
        <header>
            <title>Music for Beginners</title>
            <div id="header-home">
                <Link to={'/'}>
                    Home
                </Link>
            </div>
            <div id="header-nav-links">
                {HeaderRoutes.map(route => {
                    return (
                        <Link to={route.link} key={route.link}>
                            {route.name}
                        </Link>
                    );
                })}
            </div>
            <div id="header-mobile">
                <Hamburger 
                    toggled={isHamburgerOpen} 
                    toggle={setIsHamburgerOpen}
                    color="white"
                />
                {isHamburgerOpen && 
                    (
                        <div id="header-mobile-links">
                            {HeaderRoutes.map(route => {
                                return (
                                    <Link to={route.link} key={route.link}>
                                        {route.name}
                                    </Link>
                                );
                            })}
                        </div>
                    )}
            </div>
        </header>
    );
}

export default Header;