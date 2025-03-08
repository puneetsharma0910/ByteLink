"use client"

import React from "react";
import { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shortUrl, setshortUrl] = useState("");


  return (
    <div className="mx-auto max-w-lg bg-white shadow-lg rounded-3xl my-16 p-8 border border-purple-200">
      {/* Heading */}
      <p className="text-2xl font-bold text-center text-purple-500 mb-6">
        Generate Your Short URLs
      </p>

      {/* Input Fields */}
      <div className="flex flex-col gap-4">
        <input
           value={url}
           onChange={(e)=>{seturl(e.target.value)}}
          className="border-2 border-purple-300 rounded-lg p-1  bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          type="text"
          placeholder="Enter your URL"
        />
        <input
          value={shortUrl}
          onChange={(e)=>{setshortUrl(e.target.value)}}
          className="border-2 border-purple-300 rounded-lg p-1 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          type="text"
          placeholder="Enter your preferred text for Shortened URL"
        />
      </div>
      <div className="flex justify-center">
        <button 
          onClick={handleclick}
         className=" w-1/3 mx-auto  mt-6 bg-purple-500 text-white font-bold py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all">
          Generate
        </button>
      </div>
    </div>
  );
};

export default Shorten;
