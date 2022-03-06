import React from 'react'
import Heading from '../UI-Comp/Heading/Heading'
import Button from '../UI-Comp/Button/Button'
import Aos from "aos";
import "aos/dist/aos.css"


import { Link } from 'react-router-dom'



const Home = (props) => {

    React.useEffect(() => {
        Aos.init({
            duration: 1500
        })
    })

    return (
        <div className="text-center text-[#fff]">
            <Heading />
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