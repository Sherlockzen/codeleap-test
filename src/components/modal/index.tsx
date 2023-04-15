import React, {ReactElement} from "react";
import './index.css'

interface ModalProps {
    children: ReactElement
}
const Modal = ( props: ModalProps ) => {
    return (
        <>
            {props.children}
        </>
    )
}
export default Modal;