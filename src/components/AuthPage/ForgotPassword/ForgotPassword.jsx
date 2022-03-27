import React from 'react'
import { Link } from "react-router-dom"

import Button from '../../UI-Comp/Button/Button'
import Aos from "aos";
import "aos/dist/aos.css"

import { useAuth } from "../../../Context/AuthContext"


const ForgotPassword = () => {
    const { sendPasswordReset } = useAuth()

    const [email, setEmail] = React.useState("")
    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [sucessMsg, setSucessMsg] = React.useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await sendPasswordReset(email)
            setSucessMsg("The reset link has been sent!")
            e.target.reset()

        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div className="text-center">
            <div className="text-center text-white">
                Please submit your email to get reset link
            </div>

            <div data-aos="fade-right" data-aos-delay="100" className="text-white text-center mt-[3rem]">
                <div className="border-2 border-[white] max-w-[30rem] mx-[auto] px-[4rem] py-[3rem]">
                    <form action="" onSubmit={handleSubmit}>
                        <input required onChange={(e) => setEmail(e.target.value.trim())} type="email" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Your Email Address:" />
                        { }
                        <br />
                        <Button type="submit" py="py-[0.5rem]">Send reset link</Button>
                    </form>
                    <Link to="/login-signup" className="underline block mt-[1rem]">Back to Login</Link>
                </div>
            </div>

            {error ? <div className="px-[2rem] py-[1rem] bg-[red] text-white text-center inline-block mt-[2rem]">
                {error}
            </div> : null}

            {sucessMsg ? <div className="px-[2rem] py-[1rem] bg-[green] text-white text-center inline-block mt-[2rem]">
                {sucessMsg}
            </div> : null}
        </div>
    )
}

export default ForgotPassword