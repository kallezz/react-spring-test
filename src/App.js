import React from 'react';
import {Route, useLocation, Switch} from 'react-router-dom';
import {useTransition, animated} from "react-spring";
import styled from "styled-components";

import MainNav from "./components/navigation/MainNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const Anim = styled(animated.div)`
    width: 100%;
    height: 100vh;
    transform-origin: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: orange;
`;

const App = () => {
    const location = useLocation();
    console.log(location);
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            transform: "translate(100%, 0) scale(1.5)"
        },
        enter: {
            opacity: 1,
            transform: "translate(0, 0) scale(1)"
        },
        leave: {
            opacity: 0,
            transform: "translate(-100%, 0) scale(0.5)"
        }
    });

    return (
        <>
            <MainNav/>
            {transitions.map(({ item, props, key }) => (
                <Anim
                    key={key}
                    style={props}
                >
                    <Switch location={item}>
                        <Route path="/" exact>
                            <HomePage/>
                        </Route>
                        <Route path="/about" exact>
                            <AboutPage/>
                        </Route>
                        <Route path="/contact" exact>
                            <ContactPage/>
                        </Route>
                    </Switch>
                </Anim>
            ))}
        </>
    );
};

export default App;