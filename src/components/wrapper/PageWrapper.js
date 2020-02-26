import React from 'react';
import styled from "styled-components";

const PageCard = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: auto 0;
`;

const PageWrapper = ({ children }) => {
    return (
        <PageCard>
            {children}
        </PageCard>
    );
};

export default PageWrapper;