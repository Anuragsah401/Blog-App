import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import { useAuth } from "Context/AuthContext";

import Heading from "components/UI-Comp/Heading/Heading";
import Button from "components/UI-Comp/Button/Button";

import { db } from "../../firebase";

const CreatePost = () => {
  const { currentUser } = useAuth();
  const [title, setTitle] = React.useState("");
  const [Description, setDescription] = React.useState("");
  const [pic, setPic] = React.useState(
    "https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"
  );

  const navigate = useNavigate();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  const postsCollectionRef = collection(db, "posts");

  const createPost = async (e) => {
    e.preventDefault();

    await addDoc(postsCollectionRef, {
      blogTitle: title,
      blogContent: Description,
      blogImage: pic,
      author: {
        name: currentUser.displayName,
        id: currentUser.uid,
        avatar: currentUser.photoURL,
      },
      createdAt: serverTimestamp(),
    });

    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="text-center text-[#eee]">
      <div className="mt-[5rem] text-[#fff]">
        <Heading text="create your post!" />
      </div>

      <div
        data-aos="fade"
        data-aos-delay="1500"
        className="py-[3rem] px-[2rem] mx-[auto] mt-[2rem] max-w-[30rem] border-2 border-[white]"
      >
        <form action="" onSubmit={createPost}>
          <input
            required
            onChange={(e) => setTitle(e.target.value.trim())}
            type="text"
            placeholder="Title..."
            className="px-[0.5rem] mb-[1rem] w-full bg-transparent border-b-2 outline-none"
          />
          <br />
          <textarea
            required
            onChange={(e) => setDescription(e.target.value.trim())}
            type="text"
            placeholder="Description..."
            rows="6"
            cols="70"
            className="px-[0.5rem] mb-[1rem] w-full bg-transparent border-b-2 outline-none"
          />
          <br />
          <input
            onChange={(e) => setPic(e.target.value[0])}
            type="file"
            accept="images/*"
            className="mb-[2rem]"
          />
          <br />
          <Button type="submit" py="py-[0.5rem]">
            submit
          </Button>
        </form>
      </div>

      {/* <div className="mx-auto mt-[1rem] w-[34%] bg-white progress">
        <div className="w-[50%] bg-[#1CBBB4] progress-bar progress-bar-inner">
          Posting...
        </div>
      </div> */}
    </div>
  );
};

export default CreatePost;
