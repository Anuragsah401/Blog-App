import React from "react";

import "aos/dist/aos.css";

const Heading = (props) => {
  // React.useEffect(() => {
  //     Aos.init({
  //         duration: 1000
  //     })
  // }, [])
  return (
    <div
      data-aos="fade"
      data-aos-delay="1300"
      className="text-[2rem] font-medium text-center"
    >
      {props.text}
    </div>
  );
};

export default Heading;
