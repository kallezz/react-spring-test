import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

const NavBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #111;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

const NavBarBrand = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 1rem;
`;

const NavBarLogo = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    
    a {
        text-decoration: none;
        color: #fff;
    }
`;

const NavBarNavs = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    margin-left: auto;
    
    a {
        padding: .4rem 1rem;
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        transition: color .4s;
        
        :hover {
        color: orange;
    }
    }
    
    .active {
        color: orange;
    }
`;

const MainNav = () => {
    return (
        <NavBar>
            <NavBarBrand>
                <NavBarLogo>
                    <Link to="/">
                        DevKM
                    </Link>
                </NavBarLogo>
            </NavBarBrand>
            <NavBarNavs>
                <NavLink to="/" exact>
                    Home
                </NavLink>
                <NavLink to="/about">
                    About
                </NavLink>
                <NavLink to="/contact">
                    Contact
                </NavLink>
            </NavBarNavs>
        </NavBar>
    );
};

export default MainNav;