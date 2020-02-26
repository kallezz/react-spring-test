import React from 'react';
import styled from "styled-components";
import {useTrail, animated, config} from "react-spring";

const TextWrapper = styled.h1`
    
`;

const TextSpan = styled(animated.span)`
    display: inline-block;
`;

const FadeInText = ({text}) => {
    const textSpans = Array.from(text);

    const [chars] = useTrail(textSpans.length, i => {
        return {
            opacity: 1,
            transform: 'translate(0,0) scale(1)',
            from: {
                opacity: 0,
                transform: 'translate(0,-50px) scale(0.5)'
            },
            config: config.gentle
        }
    });

    return (
        <TextWrapper>
            {chars.map((style, i) =>
                textSpans[i] !== " " ?
                    <TextSpan key={textSpans.indexOf(i)} style={style}>
                    {textSpans[i]}
                    </TextSpan>
                    :
                    <span> </span>
            )}
        </TextWrapper>
    );
};

export default FadeInText;