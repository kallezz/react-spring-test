import React from 'react';
import styled from "styled-components";

const PageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: -10;
`;

const AnimWrapper = ({ children }) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    );
};

export default AnimWrapper;