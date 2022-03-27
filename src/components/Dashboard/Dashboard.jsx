import React from 'react'
import { Link } from "react-router-dom"

import { useAuth } from '../../Context/AuthContext'
import Blog from '../../containers/Blog/Blog'

import Aos from "aos";
import "aos/dist/aos.css"


const Dashboard = () => {

    const { currentUser } = useAuth()
    const [searchTxt, setSearchTxt] = React.useState("")
    // const [blogList, setBlogList] = React.useState([])

    // console.log(blogList)

    return (
        <div className="text-white">

            <div data-aos="fade" data-aos-delay="1000" className="mt-[5rem] flex justify-between items-center">
                <div className="flex align-center justify-center">
                    <div className="w-[60px] h-[60px] rounded-full truncate">
                        <Link to="/profile">
                            <img className="w-[100%] h-[100%] object-cover" src={currentUser.photoURL && currentUser.photoURL} alt="" />
                        </Link>
                    </div>
                    <div className="ml-[0.5rem] leading-5 py-[0.5rem]">
                        Welcome, <br />
                        <Link to="/profile" className="hover:text-[#ff4070]">
                            {currentUser.displayName}
                        </Link>
                    </div>
                </div>

                <div>
                    <form action="">
                        <input onChange={e => setSearchTxt(e.target.value.trim())} type="text" placeholder="Search Blogs..." className="px-[1rem] py-[0.5rem] bg-[#C4C4C4] text-[0.8rem] placeholder:text-[#4e4e4e] outline-none text-[#000]" />
                        <button className="px-[1rem] py-[0.5rem] bg-[#1CBBB4] text-[0.8rem] hover:bg-[#FF2359]">search</button>
                    </form>
                </div>
            </div>

            <div className="mt-[4rem]">
                <div >
                    <Blog searchTxt={searchTxt} />
                </div>
            </div>

        </div>
    )
}

export default Dashboard