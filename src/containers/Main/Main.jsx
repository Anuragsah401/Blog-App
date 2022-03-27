import React from 'react'

import { useAuth } from "../../Context/AuthContext"
import NavBar from '../../components/NavBar/NavBar'
import Logo from '../../components/UI-Comp/Logo/Logo'


const Dashboard = (props) => {
    const { currentUser } = useAuth()

    return (
        <div>
            {currentUser ? <NavBar /> : <Logo />}
            {props.children}
        </div>
    )
}

export default Dashboard