import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../Img/cryptoscapelogo.svg";
import { UserAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  console.log(user);

  const menuOpen = () => setNav(!nav);

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="rounded-div bg-crypto-purple-light flex justify-between items-center text-crypto-white h-20 font-bold">
      <Link to="/">
        <div className="flex items-center">
          <div>
            <img className="w-10 mr-2" src={Logo} alt="logo" />
          </div>
          <div>
            <h1 className="text-2xl font-light ">CryptoScape.</h1>
          </div>
        </div>
      </Link>
      <div>
        {user?.email ? (
          <div>
            <Link to="/account" className="p-4">
              Account
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-1.5 bg-crypto-purple-button ml-2 rounded-2xl shadow-lg hover:bg-crypto-purple-light
          border-2 border-crypto-purple-button ease-in-out duration-300"
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link to="/signin" className="p-4">
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-crypto-purple-button ml-2 rounded-2xl shadow-lg hover:bg-crypto-purple-light
          border-2 border-crypto-purple-button ease-in-out duration-300"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
      {/* Menu Icon */}
      <div onClick={menuOpen} className="block md:hidden cursor-pointer z-10">
        {nav ? (
          <AiOutlineClose className=" text-2xl" />
        ) : (
          <AiOutlineMenu className=" text-2xl" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-crypto-purple-light ease-in duration-300 z-50"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            <Link to="/">Home</Link>
          </li>
          <li className="py-6">
            <Link to="/">Account</Link>
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button className="w-full my-2 p-3 bg-crypto-white text-crypto-black rounded-2xl shadow-xl">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full my-2 p-3 bg-crypto-purple rounded-2xl shadow-xl hover:bg-crypto-purple-light">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
