import React, { useContext } from 'react'
import { createPortal } from 'react-dom';
import { ModalContext } from '../../../contexts/ModalContext';
import { ModalBackdrop, ModalContainer } from '../../../styles/Game Interface/Modal.styled';

export const ModalTemplate = () => {
    const { modal, modalContent, handleModal } = useContext(ModalContext);

    if (modal) {
        return createPortal(
            <ModalBackdrop onClick={() => handleModal()}>
                <ModalContainer onClick={(event) => event.stopPropagation()}>
                    {modalContent}
                </ModalContainer>
            </ModalBackdrop>,
            document.getElementById("modal")
        );
    }
    return null
}
