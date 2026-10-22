import React, { useState } from "react";

export const useModal = () => {
    const [modal, setModal] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleModal = (content = false) =>{
        setModal((prev) => !prev);
        if (content) {
            setModalContent(content)
        }
    }
    return { modal, modalContent, handleModal };
}
