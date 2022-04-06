import React from "react";

import classes from "./LatestPost.module.css";

const LatestPost = (props) => {
  const latestPosts = props.blogs.slice(0, 3).map((blog, index) => (
    <li key={index}>
      <div className={classes.thum}>
        <a href=".">
          <img src={blog.blogImage} alt="" />
        </a>
      </div>
      <div className={classes.blogDetails}>
        {
          <small>
            Category -{" "}
            {`
          ${new Date(blog.createdAt.seconds * 1000).getDate()}.${
              new Date(blog.createdAt.seconds * 1000).getMonth() + 1
            }.${new Date(blog.createdAt.seconds * 1000).getFullYear()}`}
          </small>
        }

        <h3>
          <a href=".">{blog.blogTitle}</a>
        </h3>
      </div>
    </li>
  ));

  return <ul className={classes.LatestPostCard}>{latestPosts}</ul>;
};

export default LatestPost;
