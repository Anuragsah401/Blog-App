import React from 'react'
import Pagination from '../../components/Pagination/Pagination'

import classes from './Blog.module.css'
import Aside from '../../components/Aside/Aside'

import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'
import Heading from '../../components/UI-Comp/Heading/Heading'

import Aos from "aos";
import "aos/dist/aos.css"


const Blog = (props) => {

    const [blogs, setBlogs] = React.useState([])

    const postsCollectionRef = collection(db, "posts")

    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    React.useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef)
            setBlogs(data.docs.map(doc => ({ ...doc.data(), id: doc.id, blogDate: doc.createdAt })));
        }
        getPosts()
    }, [])

    let updatedBlogs = null

    if (blogs) {
        updatedBlogs = blogs.sort((a, b) => {
            if (a.createdAt.seconds < b.createdAt.seconds) {
                return 1
            } else if (a.createdAt.seconds > b.createdAt.seconds) {
                return -1
            }
        }
        )
    }

    if (props.searchTxt !== null) {
        updatedBlogs = blogs.filter(blog => {
            if (props.searchTxt === "") {
                return blog
            } else if (blog.blogTitle.toLowerCase().includes(props.searchTxt.toLowerCase())) {
                return blog
            }
        })
    }


    if (!blogs || blogs.length === 0) {
        return <div className="mt-[8rem]">
            <Heading text="No Blogs availabe!" />
        </div>
    }

    return (
        <>
            <div>
                <Heading text="See what people are posting!" />
            </div>
            <div className={classes.container}>
                <div className={classes.blogContainer}>
                    <Pagination blogs={updatedBlogs} />
                    <Aside blogs={blogs} />
                </div>
            </div>
        </>
    )
}

export default Blog
