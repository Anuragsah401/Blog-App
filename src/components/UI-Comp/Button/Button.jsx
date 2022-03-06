import React from 'react'

const Button = (props) => {
    console.log(props);
    return (
        <div onClick={props.onClick} type={props.type} className={`px-[2rem] ${props.py ? props.py : "py-[1rem]"} rounded-lg bg-[#FF2359] inline-block hover:bg-[white] hover:text-[#000] cursor-pointer transition-all delay-50 ease-in-out duration-300`}>
            {props.children}
        </div>
    )
}

export default Button