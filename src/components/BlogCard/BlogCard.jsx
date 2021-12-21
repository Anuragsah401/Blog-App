import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-regular-svg-icons'


import classes from './BlogCard.module.css'

const BlogCard = (props) => {
    return (
        <div className={classes.container}>
            <article className={classes.imageContainer}>
                <figure className={classes.image}>
                    <a href=".">
                        <img src={props.blog.blogImage} alt="" />
                    </a>
                </figure>

                <div className={classes.blogInfo}>
                    <small>Category - {props.blog.blogDate}</small>
                    <h3><a href=".">{props.blog.blogTitle}</a></h3>
                    <p>{props.blog.blogContent}</p>
                    <div className={classes.blogBottom}>
                        <div className={classes.blogAvatar}>
                            <div className={classes.thumbnail}>
                              <img src={props.blog.avatar} alt="" />
                            </div>
                            <div>
                              {props.blog.personName}
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
