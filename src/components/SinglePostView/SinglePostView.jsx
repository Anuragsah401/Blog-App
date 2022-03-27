import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

import { useAuth } from '../../Context/AuthContext'

import { db } from '../../firebase'
import { doc, getDoc } from "firebase/firestore";


const SinglePostView = () => {
    const { currentUser } = useAuth()
    const [data, setData] = React.useState()

    const { id } = useParams()

    React.useEffect(() => {
        if (id) {
            const docRef = doc(db, "posts", id);
            getDoc(docRef).then((doc) => {
                setData(doc.data())
            })
        }
    }, [])

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const blogDate = data && data.createdAt.seconds
    const result = new Date(blogDate * 1000)
    const month = monthNames[result.getMonth()]
    const date = result.getDate()
    const year = result.getFullYear()

    if (!currentUser) {
        return <Navigate to="/" />
    }

    if (!data) {
        return null
    }



    return (
        <div className="text-white">
            <div className="mt-[5rem]">
                <div className="w-full text-center">
                    <div className="flex justify-center align-center">
                        <div className="w-[80px] h-[80px] rounded-full truncate">
                            <img className="w-[100%] h-[100%] object-cover" src={data && data.author.avatar} alt="" />
                        </div>
                    </div>

                    <div className="leading-5 py-[0.5rem] font-semibold">
                        {data && data.author.name}
                    </div>
                </div>
            </div>

            <div className="text-center text-[2.5rem] font-semibold mt-[1rem]">
                {data && data.blogTitle}
            </div>

            <div className="text-justify w-[80%] mx-auto mt-[1rem]">
                <div>
                    <img className="w-full h-[50vh] object-cover" src={data && data.blogImage} alt="" />
                </div>

                <div className="flex align-center gap-[0.5rem] mt-[0.3rem]">
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} className='text-[15px]' />
                    </div>
                    <div>
                        {date}-{month}-{year}
                    </div>
                </div>

                <div className="mt-[1rem]">
                    {data && data.blogContent}
                </div>
            </div>
        </div>
    )
}

export default SinglePostView