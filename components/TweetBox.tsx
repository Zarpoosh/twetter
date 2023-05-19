"use client"
import { useState } from "react";

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import React from "react";

function TweetBox() {
  // useClient();
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 object-cover rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt=""
      />
      <div className="flex flex-1 pl-2 items-center">
        <form className="flex flex-1 flex-col">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="What's Happening?"
            className="h-24 w-full text-xl  outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-blue-400 flex-1">
              {/* icon */}
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            <button disabled={!input} className="bg-blue-400 px-5 py-2  text-white rounded-full font-bold disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
