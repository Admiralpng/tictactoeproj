import { createContext } from "react";
import { useModal } from "../hooks/ModalHook.js"
import { ModalTemplate } from "../components/Game/Modal/ModalTemplate.jsx";

export const ModalContext = createContext({})

export function ModalContextProvider({children}) {
    const {modal, modalContent, handleModal} = useModal();

    return(
        <ModalContext.Provider value={{ modal, modalContent, handleModal}}>
            <ModalTemplate />
            {children}
        </ModalContext.Provider>
    )
}