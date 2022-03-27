import React from 'react'
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Link, Navigate } from 'react-router-dom'

import Button from '../UI-Comp/Button/Button'
import Aos from "aos";
import "aos/dist/aos.css"

import { useAuth } from '../../Context/AuthContext'


const Home = (props) => {
    const { currentUser } = useAuth()

    React.useEffect(() => {
        Aos.init({
            duration: 1500
        })
    })

    if (currentUser) {
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className="text-center text-[#fff]">
            <div className="mt-[10rem]">
                <h1 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className="text-[3rem] font-[700] mb-[2rem]">Create Your First Blog</h1>
                <Link to="/login-signup" data-aos="fade-down" data-aos-delay="1000">
                    <Button>Get Started</Button>
                </Link>
            </div>
        </div>
    )
}

export default Home