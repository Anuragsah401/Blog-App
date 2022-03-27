import React from 'react'
import { useNavigate } from "react-router-dom";

import Button from '../../UI-Comp/Button/Button'
import { useAuth } from '../../../Context/AuthContext'


const Signup = (props) => {

    const { signup, currentUser } = useAuth()

    const [fullName, setFullName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [profilePicture, setProfilePicture] = React.useState("https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png")

    const [nameErr, setNameErr] = React.useState('')
    const [emailErr, setEmailErr] = React.useState('')
    const [passwordErr, setPasswordErr] = React.useState('')

    const [error, setError] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const navigate = useNavigate()

    // const validation = () => {
    //     const isvalid = false
    //     if(fullName.includes("@")){
    //         setNameErr("Please enter a valid Name")
    //     }

    //     if(!email.includes("@")){

    //     }
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (confirmPassword !== password) {
            return setError("Password do not match")
        }
        try {
            setError("");
            setLoading(true);
            await signup(fullName, email, password, profilePicture);
            navigate("/dashboard", { replace: true })
        } catch (err) {
            setError(err.message)
            setLoading(false)
        }

    }

    // const handleOnChange = (e) => {
    //     console.log(e.target.files[0]);
    //     if (e.target.files[0]) {
    //         setProfilePicture(e.target.files[0])
    //     }
    // }

    return (
        <div data-aos="fade-left" data-aos-delay="100" className="text-white text-center mt-[3rem] ">
            <div className="border-2 border-[white] max-w-[30rem] mx-[auto] px-[4rem] py-[3rem]">
                <form action="" onSubmit={handleSubmit}>
                    <input onChange={(e) => setFullName(e.target.value.trim())} type="text" required className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Full Name" />
                    <br />
                    <input onChange={(e) => setEmail(e.target.value.trim())} type="email" required className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="Email:" />
                    <br />
                    <input onChange={(e) => setPassword(e.target.value.trim())} type="password" required className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="password:" />
                    <br />
                    <input onChange={(e) => setConfirmPassword(e.target.value.trim())} type="password" required className="mb-[1rem] w-[100%] bg-transparent border-b-2 outline-none px-[0.5rem]" placeholder="confirm password:" />
                    <br />
                    {/* <span>Upload profile pic:</span>
                    <input type="file" accept=".jpeg, .jpg, .png, .webp, .svg" onChange={handleOnChange} className="mb-[1rem] mt-[0.5rem] max-w-[65%] block mx-[auto]" /> */}

                    <Button type="submit" py="py-[0.5rem]">Signup</Button>
                </form>
            </div>

            <div>
                {error}
            </div>

            <div>
                {currentUser && currentUser.email}
            </div>
        </div>
    )
}

export default Signup