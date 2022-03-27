import React from "react";
import { Navigate } from "react-router-dom";

import Heading from "components/UI-Comp/Heading/Heading";

import { useAuth } from "Context/AuthContext";

const UserProfile = () => {
  const { currentUser } = useAuth();

  const [DayStatus, setDayStatus] = React.useState("");

  const today = new Date();
  const curHr = today.getHours();

  const getDayStatus = (curHr) => {
    let dayStatus = "";

    if (curHr < 12) {
      dayStatus = "Good morning";
    } else if (curHr < 18) {
      dayStatus = "Good afternoon";
    } else {
      dayStatus = "Good evening";
    }

    return dayStatus;
  };

  React.useEffect(() => {
    const dayStatusTobeUpdated = getDayStatus(curHr);

    setDayStatus(dayStatusTobeUpdated);
  }, [curHr]);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return (
    <div className="text-white">
      <div
        data-aos="fade"
        data-aos-delay="1000"
        className="flex justify-between mt-[5rem] align-center"
      >
        <div className="flex justify-center align-center">
          <div className="w-[60px] h-[60px]">
            <img
              className="object-cover w-full h-full rounded-full"
              src={currentUser.photoURL}
              alt=""
            />
          </div>
          <div className="py-[0.5rem] ml-[0.5rem] leading-5">
            {DayStatus}, <br />
            {currentUser.displayName}
          </div>
        </div>

        <div>
          <button className="py-[0.5rem] px-[1.8rem] text-[0.8rem] bg-[#FF2359] hover:bg-[#1CBBB4]">
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
