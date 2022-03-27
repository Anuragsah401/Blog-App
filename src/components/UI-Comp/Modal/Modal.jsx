import React from 'react'

const Modal = (props) => {
    return (
        <div onClick={props.close} className={`fixed z-10 left-0 top-0 w-[100vw] h-[100vh] bg-[#353535b0] ${props.show ? "visible" : "hidden"}`}></div>
    )
}

export default Modal