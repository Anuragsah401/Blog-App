import React from "react";
import { Navigate } from 'react-router-dom'

import { useAuth } from "../../Context/AuthContext";
import Heading from "../UI-Comp/Heading/Heading";

const UserProfile = () => {
  const { currentUser } = useAuth();

  const [DayStatus, setDayStatus] = React.useState("")
  const today = new Date()
  const curHr = today.getHours()

  React.useEffect(() => {
    if (curHr < 12) {
      setDayStatus('Good morning')
    } else if (curHr < 18) {
      setDayStatus('Good afternoon')
    } else {
      setDayStatus('Good evening')
    }
  }, [curHr])

  if (!currentUser) {
    return <Navigate to="/" />
  }


  return (
    <div className="text-white">
      <div data-aos="fade" data-aos-delay="1000" className="flex align-center justify-between align-center mt-[5rem]">
        <div className="flex align-center justify-center">
          <div className="w-[60px] h-[60px] rounded-full truncate">
            <img
              className="w-[100%] h-[100%] object-cover"
              src={currentUser.photoURL}
              alt=""
            />
          </div>
          <div className="ml-[0.5rem] leading-5 py-[0.5rem]">
            {DayStatus}, <br />
            {currentUser.displayName}
          </div>
        </div>

        <div>
          <button className="px-[1.8rem] py-[0.5rem] bg-[#FF2359] text-[0.8rem] hover:bg-[#1CBBB4]">
            Edit Profile
          </button>
        </div>
      </div>


      <div className="mt-[3rem]">
        <Heading text="Your blogs List:" />
      </div>
    </div>
  );
};

export default UserProfile;
