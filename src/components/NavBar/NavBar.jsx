import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import SideBar from './SideBar/SideBar'
import Modal from '../UI-Comp/Modal/Modal'

import Aos from "aos";
import "aos/dist/aos.css"



const NavBar = (props) => {

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    })

    const [showSidebar, setShowSidebar] = React.useState(false)
    const navigate = useNavigate()
    return (
        <>
            <div data-aos="fade-down" className="flex justify-between text-[#fff]">
                <div onClick={() => navigate('/', { replace: true })} className="text-[1.3rem] font-medium cursor-pointer hover:text-[#FF2359]">BLOG APP</div>
                <div onClick={() => setShowSidebar(true)} className="text-[1.3rem] cursor-pointer"><FontAwesomeIcon icon={faBars} /></div>
            </div>

            <SideBar showSidebar={showSidebar} hideSidebar={() => setShowSidebar(false)} />
            <Modal show={showSidebar} close={() => setShowSidebar(false)} />
        </>
    )
}

export default NavBar