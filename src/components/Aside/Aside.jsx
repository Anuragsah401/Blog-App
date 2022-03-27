import React from "react";

import classes from "./Aside.module.css";
import Widget from "./Widget/Widget";
import LatestPost from "./LatestPost/LatestPost";
import Categories from "./Categories/Categories";

const Aside = (props) => {
  const [blogs, setBlogs] = React.useState([])

  React.useEffect(() => {
    setBlogs(props.blogs.map((blog) => blog))
  }, [props.blogs])

  return (
    <div data-aos="fade" data-aos-delay="1400" className={classes.container}>
      <Widget title="Latest Post">
        <LatestPost blogs={blogs} />
      </Widget>

      <Widget title="Categories">
        <Categories />
      </Widget>
    </div>
  );
};

export default Aside;
