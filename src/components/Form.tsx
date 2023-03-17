import React from "react";
import logo from "../../public/assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Form = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const isLogin = pathName === "/login";

  return (
    // <!-- Container -->
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-[#f0f4f8] py-10 ">
      {/* <!-- Login component --> */}
      <div className="flex shadow-md border-t-[5px] rounded-lg border-t-blue-500">
        {/* <!-- Login form --> */}
        <div className="flex flex-wrap w-full md:w-[25em] h-full py-8 px-10 content-center justify-center rounded-l-md bg-white">
          <div className="w-full">
            {/* <!-- Heading --> */}
            <div className="flex flex-col items-center justify-center gap-6">
              <img src={logo} alt="logo" />
              <h1 className="text-[#102A43] text-3xl tracking-wider">Register</h1>
            </div>

            {/* <!-- Form --> */}
            <form className="mt-4">
              {!isLogin && (
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="text-[#102A43] text-base mb-2 block tracking-wider"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="email"
                    className="block w-full bg-[#F0F4F8] font-semibold rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5   px-1.5 text-gray-500"
                  />
                </div>
              )}
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="text-[#102A43] text-base mb-2 block tracking-wider"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-[#F0F4F8] font-semibold  rounded-md border  border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="password"
                  className="text-[#102A43] text-base mb-2 block tracking-wider"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="block w-full bg-[#F0F4F8] font-semibold rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1.5 px-1.5 text-gray-500"
                />
              </div>

              <div className="mb-3 ">
                <button className="mb-4 block w-full text-center text-white  bg-[#3b82f6] hover:bg-[#2260c4] px-2 py-1.5 rounded-md tracking-widest shadow-md transition-all duration-800">
                 Submit
                </button>
                <button className="mb-1.5 block w-full text-center text-[#3b82f6] bg-[#bfdbfe] hover:bg-[#2260c4] hover:text-white px-2 py-1.5 rounded-md shadow-md transition-all duration-500">
                  Demo App
                </button>
              </div>
            </form>

            {/* <!-- Footer --> */}
            <div className="text-center">
              <span className=" text-[text-[#102A43]] font-light">
                {isLogin ? "Not a member yet?" : "Already a member?"}
              </span>
              <Link
                to={isLogin ? "/signup" : "/login"}
                className="ml-2 tracking-wider text-[#3b82f6]"
              >
                {isLogin ? "Register" : "Login"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
