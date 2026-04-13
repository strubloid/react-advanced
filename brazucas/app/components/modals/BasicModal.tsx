"use client";
import React from "react";
import { styled } from "styled-components";

const ModalBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
`;

const ModalContent = styled.div`
    margin: 12% auto;
    padding: 34px;
    background-color: #111;
    width: 50%;
`;

const ModalTitle = styled.h3`
    margin-top: 0;
`;

/**
 * This is the basic modal component layout, we are using the
 * children prop to render the content of the modal, and we are using the useState hook to control the visibility of the modal.
 * @param children - The content to be rendered inside the modal
 * @returns a button to open the modal and the modal itself when it's open
 */
export const BasicModal = ({ children }: { children: React.ReactNode }) => {
    // we set to off at the first time
    const [show, setShow] = React.useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);

    return (
        <>
            {show && (
                <ModalBackground onClick={closeModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <button onClick={closeModal}>Close Modal</button>
                        <ModalTitle>Basic Modal</ModalTitle>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
            <button onClick={openModal}>Open Modal</button>
        </>
    );
};
