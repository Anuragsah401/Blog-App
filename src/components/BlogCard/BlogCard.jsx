import React from 'react'
import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'

import Aos from "aos";
import "aos/dist/aos.css"

import classes from './BlogCard.module.css'

const BlogCard = (props) => {
    const navigate = useNavigate()

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    const blogDate = props.blog.createdAt.seconds
    const result = new Date(blogDate * 1000)
    const month = monthNames[result.getMonth()]
    const date = result.getDate()
    const year = result.getFullYear()

    const onClickHandler = async () => {
        navigate("/post/" + props.blog.id, { replace: true })
    }

    React.useEffect(() => {
        Aos.init({
            duration: 300
        })
    })

    return (
        <div data-aos="fade" className={classes.container}>
            <article className={classes.imageContainer}>
                <figure className={classes.image} onClick={onClickHandler}>
                    <img src={props.blog.blogImage} alt="" />
                </figure>

                <div className={classes.blogInfo}>
                    <small>Category - {`${date} ${month}. ${year}`}</small>
                    <h3 onClick={onClickHandler}>{props.blog.blogTitle}</h3>
                    <p>{props.blog.blogContent}</p>

                    <div className={classes.blogBottom}>
                        <div className={classes.blogAvatar}>
                            <div className={classes.thumbnail}>
                                <img src={props.blog.author.avatar} alt="" />
                            </div>

                            <div>
                                {props.blog.author.name}
                            </div>
                        </div>

                        <div>
                            <FontAwesomeIcon icon={faComment} /> 20
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogCard
