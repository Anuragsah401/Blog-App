import React from 'react'
import Button from '../../UI-Comp/Button/Button'
import Aos from "aos";
import "aos/dist/aos.css"



const Login = () => {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])
    return (
        <div data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-bottom" className="text-white text-center mt-[3rem]">
            <div className="border-2 border-[white] max-w-[35%] mx-[auto] px-[4rem] py-[3rem]">
                <form action="">
                    <input type="email" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Email:" />
                    <br />
                    <input type="password" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="password:" />
                    <br />
                    <Button type="submit" py="py-[0.5rem]">Login</Button>
                </form>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Login