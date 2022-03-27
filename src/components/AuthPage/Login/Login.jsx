import React from 'react'
import { useNavigate, Link, Navigate } from "react-router-dom";

import Button from '../../UI-Comp/Button/Button'
import Aos from "aos";
import "aos/dist/aos.css"

import { useAuth } from '../../../Context/AuthContext'


const Login = () => {
    const { login, currentUser } = useAuth()

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(email, password)
            navigate("/dashboard", { replace: true })

        } catch (err) {
            setError(err.message)
            setLoading(false)
        }

    }

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    return (
        <div data-aos="fade-right" data-aos-delay="100" className="text-white text-center mt-[3rem]">
            <div className="border-2 border-[white] max-w-[30rem] mx-[auto] px-[4rem] py-[3rem]">
                <form action="" onSubmit={handleSubmit}>
                    <input required onChange={(e) => setEmail(e.target.value.trim())} type="email" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Email:" />
                    { }
                    <br />
                    <input required onChange={(e) => setPassword(e.target.value.trim())} type="password" className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="password:" />
                    <br />
                    <Button type="submit" py="py-[0.5rem]">Login</Button>
                </form>
                <Link to="/forgot-password" className="underline mt-[2rem] block">Did you Forget your Password?</Link>
            </div>


            <div>
                {error}
            </div>


        </div>
    )
}

export default Login