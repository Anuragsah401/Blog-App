import React from 'react'

import Aos from "aos";
import "aos/dist/aos.css"

const Heading = (props) => {
    // React.useEffect(() => {
    //     Aos.init({
    //         duration: 1000
    //     })
    // }, [])
    return (
        <div data-aos="fade" data-aos-delay="1300" className="text-center text-[2rem] font-medium">{props.text}</div>
    )
}

export default Heading