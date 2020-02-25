import React from 'react';
import styled from "styled-components";

const PageWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: -1;
    margin-top: 1rem;
`;

const AnimWrapper = ({ children }) => {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    );
};

export default AnimWrapper;