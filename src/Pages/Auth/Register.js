import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-50 drop-shadow-md rounded-[.5rem]">
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <form>
            <input
              type="text"
              className="bg-inherit focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              placeholder="Enter 4-digit code"
            />
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mt-4">
              Submit
            </button>
          </form>
          <div className="mt-2">
            <Link to="/register">
              <u className="text-1 mb-4 mt-2">Register</u>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
