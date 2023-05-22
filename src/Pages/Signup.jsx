import React from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20 text-white">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <form>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 rounded-xl border-none z-0"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 rounded-xl border-none z-0"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button
            className="px-5 py-2 bg-crypto-purple-button rounded-2xl shadow-lg hover:bg-crypto-purple-light
      border-2 border-crypto-purple-button ease-in-out duration-300 w-full"
          >
            Create Account
          </button>
        </form>
        <p className="my-4">
          Already have an account?{" "}
          <Link className=" text-crypto-purple-button" to="/signin">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
