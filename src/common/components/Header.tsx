import React from "react";
import logoImg from "../../app/favicon.ico";

export default function Header() {
  return (
    <div className="bg-white flex justify-between px-12 py-4">
      {/* left side */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.1"
          stroke="currentColor"
          className="w-6 h-6 text-black font-bold"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
        <h1 className="text-2xl font-bold text-black">Todo Master</h1>
      </div>
      {/* right side */}
      <div className="flex items-center gap-5">
        <button className="border-2 border-white bg-black text-white py-2 px-4 hover:text-black hover:bg-white hover:border-black duration-300 font-bold rounded-lg">
          Sign In
        </button>
        <button className="border-2 border-white bg-black text-white py-2 px-4 hover:text-black hover:bg-white hover:border-black duration-300 font-bold rounded-lg">
          Sign Up
        </button>
      </div>
    </div>
  );
}
