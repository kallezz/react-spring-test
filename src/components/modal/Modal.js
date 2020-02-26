import React from 'react';
import styled from "styled-components";
import {useTransition, animated} from "react-spring";

const ModalBackdrop = styled(animated.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    padding-top: 5rem;
`;

const Modal = ({toggle = false}) => {
    const transitions = useTransition(toggle, null, {
        from: {
            backgroundColor: 'rgba(0,0,0,0)'
        },
        enter: {
            backgroundColor: 'rgba(0,0,0,.75)'
        },
        leave: {
            backgroundColor: 'rgba(0,0,0,0)'
        }
    });

    return (
        <>
            {
                transitions.map(({item, key, props}) =>
                    item &&
                    <ModalBackdrop key={key} style={props}>
                        {item}
                    </ModalBackdrop>
                )
            }
        </>
    );
};

export default Modal;