import React from "react";
import Watchlist from "../Components/Watchlist";

const Account = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="flex justify-between items-center my-12 py-8 rounded-div bg-crypto-purple-light text-white">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button
            className="px-5 py-2 bg-crypto-purple-dark rounded-2xl shadow-lg hover:bg-crypto-purple-button
      border-2 border-crypto-purple-button ease-in-out duration-300 w-full"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div bg-crypto-purple-light">
        <div className="w-full min-h-[300px]">
          <h1 className="py-4 font-bold text-2xl text-white">Watch List</h1>
          <Watchlist />
        </div>
      </div>
    </div>
  );
};

export default Account;
