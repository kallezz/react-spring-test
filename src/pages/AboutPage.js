import React from 'react';
import styled from 'styled-components';
import AnimWrapper from "../components/wrapper/AnimWrapper";

const PageCard = styled.div`
    min-width: 50vw;
    min-height: 30vh;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #111;
`;

const AboutPage = () => {
    return (
        <AnimWrapper>
            <PageCard>
                <h1>Aboutpage</h1>
            </PageCard>
        </AnimWrapper>
    );
};

export default AboutPage;