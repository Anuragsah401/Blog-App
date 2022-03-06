import React from 'react'
import Heading from '../UI-Comp/Heading/Heading'
import Login from './Login/Login'
import Signup from './Signup/Signup'




const AuthPage = () => {

    const [switched, setSwitched] = React.useState(false)

    return (
        <div>
            <Heading />
            <div className="text-white text-center mt-[4rem] text-[22px] font-semibold">
                <span onClick={() => setSwitched(false)} className={`mx-[0.5rem] hover:text-[red] cursor-pointer ${switched ? 'opacity-[0.6]' : 'opacity-[none]'}`}>Login</span>
                or
                <span onClick={() => setSwitched(true)} className={`mx-[0.5rem] cursor-pointer hover:text-[red] ${switched ? 'opacity-[none]' : 'opacity-[0.6]'}`} >Signup</span>
            </div>

            <div>
                {switched ? <Signup /> : <Login />}
            </div>
        </div>
    )
}

export default AuthPage