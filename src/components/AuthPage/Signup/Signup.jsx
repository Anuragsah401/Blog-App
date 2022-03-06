import React from 'react'
import Button from '../../UI-Comp/Button/Button'


const Signup = () => {
    return (
        <div data-aos="flip-left" className="text-white text-center mt-[3rem] ">
            <div className="border-2 border-[white] max-w-[35%] mx-[auto] px-[4rem] py-[3rem]">
                <form action="">
                    <input type="text" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Full Name" />
                    <br />
                    <input type="email" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Email:" />
                    <br />
                    <input type="password" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="password:" />
                    <Button type="submit" py="py-[0.5rem]">Signup</Button>
                </form>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Signup