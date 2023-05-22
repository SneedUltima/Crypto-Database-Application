import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div bg-crypto-purple-light mt-8 pt-8 pb-4 text-white">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px]">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Docs</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Careers</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex flex-col justify-end">
            <div>
              <p className="text-center md:text-right mt-2 md:mt-0">
                Sign up for Crypto News
              </p>
            </div>
            <div className="md:py-4">
              <form className="flex items-center md:justify-end justify-center">
                <div>
                  <input
                    className="text-white w-full  border-white border-2 bg-crypto-purple-light px-4 py-2 rounded-2xl shadow-xl"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <button className="px-4 py-2 w-full rounded-2xl shadow-xl bg-crypto-purple-button md:w-auto my-2 border-2 border-crypto-purple-button hover:bg-crypto-purple-light ease-in-out duration-300">
                    Sign up
                  </button>
                </div>
              </form>
            </div>
            <div className="flex md:justify-end justify-center gap-10 py-4 text-crypto-purple-button ">
              <AiOutlineInstagram />
              <FaFacebook />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
      <div className="flex text-center items-center justify-center mt-2">
        <img
          className="w-8 mr-2 rounded-full"
          src="https://support.coingecko.com/hc/article_attachments/4499575478169/CoinGecko_logo.png"
          alt=""
        />
        <p>Powered by Coin Gecko</p>
      </div>
    </div>
  );
};

export default Footer;
