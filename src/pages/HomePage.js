import React from 'react';
import styled from "styled-components";

import AnimWrapper from "../components/wrapper/AnimWrapper";
import PageWrapper from "../components/wrapper/PageWrapper";
import FadeInText from "../components/animated/FadeInText";

const Row = styled.div`
    min-width: 100%;
    text-align: center;
    padding: 0 1rem;
`;

const HomePage = () => {
    return (
        <AnimWrapper>
            <PageWrapper>
                <Row>
                    <FadeInText text="Welcome to my site!"/>
                </Row>
            </PageWrapper>
        </AnimWrapper>
    );
};

export default HomePage;