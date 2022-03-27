import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { useAuth } from "../../Context/AuthContext"
import Heading from '../UI-Comp/Heading/Heading'
import Button from '../UI-Comp/Button/Button'

import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../../firebase"



const CreatePost = () => {

    const { currentUser } = useAuth()
    const [title, setTitle] = React.useState("")
    const [Description, Setdescription] = React.useState("")
    const [pic, setPic] = React.useState("https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg")

    let navigate = useNavigate()

    if (!currentUser) {
        return <Navigate to="/" />;
    }

    const postsCollectionRef = collection(db, "posts")

    const createPost = async (e) => {
        e.preventDefault()

        await addDoc(postsCollectionRef, {
            blogTitle: title,
            blogContent: Description,
            blogImage: pic,
            author: {
                name: currentUser.displayName,
                id: currentUser.uid,
                avatar: currentUser.photoURL,
            },
            createdAt: serverTimestamp()
        })

        navigate("/dashboard", { replace: true })

    }

    return (
        <div className="text-center text-[#eee]">
            <div className="text-[#fff] mt-[5rem]">
                <Heading text="create your post!" />
            </div>

            <div className="mt-[2rem] border-2 border-[white] max-w-[30rem] mx-[auto] py-[3rem] px-[2rem]">
                <form action="" onSubmit={createPost}>
                    <input required onChange={(e) => setTitle(e.target.value.trim())} type="text" placeholder="Title..." className="mb-[1rem] w-full bg-transparent border-b-2 outline-none px-[0.5rem]" />
                    <br />
                    <textarea required onChange={(e) => Setdescription(e.target.value.trim())} type="text" placeholder="Description..." rows="6" cols="70" className="mb-[1rem] w-full bg-transparent border-b-2 outline-none px-[0.5rem]" />
                    <br />
                    <input onChange={(e) => setPic(e.target.value[0])} type="file" accept="images/*" className="mb-[2rem]" />
                    <br />
                    <Button type="submit" py="py-[0.5rem]">submit</Button>
                </form>
            </div>

            <div className="progress bg-white mt-[1rem] w-[34%] mx-auto">
                <div className="progress-bar progress-bar-inner w-[50%] bg-[#1CBBB4]">
                    Posting...
                </div>
            </div>
        </div>
    )
}

export default CreatePost