import React from "react";
import { Link } from "react-router-dom";
import Aos from "aos";

import { useAuth } from "../../../Context/AuthContext";

import "aos/dist/aos.css";

const Sidebar = (props) => {
  React.useEffect(() => {
    Aos.init({
      duration: 300,
    });
  });

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div
      data-aos="fade-left"
      className={`fixed z-20 top-0 right-0 h-[100vh] bg-gray-50 ${
        props.showSidebar ? "visible" : "hidden"
      }`}
    >
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-0  dark:bg-gray-800 rounded">
          <ul className="space-y-2">
            <li>
              <Link
                to="/create-post"
                onClick={props.hideSidebar}
                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
              >
                {/* <svg className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> */}
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition duration-75"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
                </svg>
                <span className="ml-3">Create Blog</span>
              </Link>
            </li>
            <li>
              <span
                onClick={handleLogout}
                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white transition duration-75"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
