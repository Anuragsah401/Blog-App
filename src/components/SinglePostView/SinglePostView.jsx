import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { doc, getDoc } from "firebase/firestore";

import { useAuth } from "Context/AuthContext";

import { db } from "../../firebase";

const SinglePostView = () => {
  const { currentUser } = useAuth();
  const [data, setData] = React.useState();

  const { id } = useParams();

  React.useEffect(() => {
    if (id) {
      const docRef = doc(db, "posts", id);

      getDoc(docRef).then((doc) => {
        setData(doc.data());
      });
    }
  }, []);

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const blogDate = data && data.createdAt.seconds;
  const result = new Date(blogDate * 1000);
  const month = monthNames[result.getMonth()];
  const date = result.getDate();
  const year = result.getFullYear();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="text-white">
      <div className="mt-[5rem]">
        <div className="w-full text-center">
          <div className="flex justify-center align-center">
            <div className="w-[80px] h-[80px] truncate rounded-full">
              <img
                className="object-cover w-[100%] h-[100%]"
                src={data && data.author.avatar}
                alt=""
              />
            </div>
          </div>

          <div className="py-[0.5rem] font-semibold leading-5">
            {data && data.author.name}
          </div>
        </div>
      </div>

      <div className="mt-[1rem] text-[2.5rem] font-semibold text-center">
        {data && data.blogTitle}
      </div>

      <div className="mx-auto mt-[1rem] w-[80%] text-justify">
        <div>
          <img
            className="object-cover w-full h-[50vh]"
            src={data && data.blogImage}
            alt=""
          />
        </div>

        <div className="flex gap-[0.5rem] mt-[0.3rem] align-center">
          <div>
            <FontAwesomeIcon icon={faCalendarDay} className="text-[15px]" />
          </div>
          <div>
            {date}-{month}-{year}
          </div>
        </div>

        <div className="mt-[1rem]">{data && data.blogContent}</div>
      </div>
    </div>
  );
};

export default SinglePostView;
