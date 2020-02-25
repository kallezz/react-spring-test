import React from 'react';
import {Route, useLocation, Switch} from 'react-router-dom';
import {useTransition, animated} from "react-spring";

import MainNav from "./components/navigation/MainNav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
    const location = useLocation();
    console.log(location);
    const transitions = useTransition(location, location => location.pathname, {
        from: {
            opacity: 0,
            transform: "translate(100%, 0)"
        },
        enter: {
            opacity: 1,
            transform: "translate(0, 0)"
        },
        leave: {
            opacity: 0,
            transform: "translate(-100%, 0)"
        }
    });

    return (
        <>
            <MainNav/>
            {transitions.map(({ item, props, key }) => (
                <animated.div
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
                </animated.div>
            ))}
        </>
    );
};

export default App;