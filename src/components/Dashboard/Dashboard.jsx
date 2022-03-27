import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../Context/AuthContext";
import Blog from "../../containers/Blog/Blog";

import "aos/dist/aos.css";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [searchTxt, setSearchTxt] = React.useState("");
  // const [blogList, setBlogList] = React.useState([])

  // console.log(blogList)

  return (
    <div className="text-white">
      <div
        data-aos="fade"
        data-aos-delay="1000"
        className="flex justify-between items-center mt-[5rem]"
      >
        <div className="flex justify-center align-center">
          <div className="w-[60px] h-[60px] truncate rounded-full">
            <Link to="/profile">
              <img
                className="object-cover w-[100%] h-[100%]"
                src={currentUser.photoURL && currentUser.photoURL}
                alt=""
              />
            </Link>
          </div>
          <div className="py-[0.5rem] ml-[0.5rem] leading-5">
            Welcome, <br />
            <Link to="/profile" className="hover:text-[#ff4070]">
              {currentUser.displayName}
            </Link>
          </div>
        </div>

        <div>
          <form action="">
            <input
              onChange={(e) => setSearchTxt(e.target.value.trim())}
              type="text"
              placeholder="Search Blogs..."
              className="py-[0.5rem] px-[1rem] text-[0.8rem] placeholder:text-[#4e4e4e] text-[#000] bg-[#C4C4C4] outline-none"
            />
            <button className="py-[0.5rem] px-[1rem] text-[0.8rem] bg-[#1CBBB4] hover:bg-[#FF2359]">
              search
            </button>
          </form>
        </div>
      </div>

      <div className="mt-[4rem]">
        <div>
          <Blog searchTxt={searchTxt} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
