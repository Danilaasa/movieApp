import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";



interface IModalWrrapper {
    children: ReactNode
}

export const ModalWrapper: FC<IModalWrrapper> = ({ children }) => {
    return (

            createPortal(children, document.getElementById("portal") as HTMLElement)
         
    )
} 