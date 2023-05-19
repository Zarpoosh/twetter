"use client";
import React from "react";
import logo from "../image/minicode - Copy.jpg";
import picture from "../image/beautiful-car.jpg";
import { useState } from "react";
// import ReactTimeago from "react-timeago";
import { FaRetweet } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

import {
  ChatAlt2Icon,
  HeartIcon,
  ShareIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";



function Tweet(prop) {
  // btn like
  const [likeCount, setLikeCount] = useState(50);
  const [activeBtn, setActiveBtn] = useState("none");

  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }
  };
  // btn retweet
  const [retweet, setRetweet] = useState(20);
  const [activeretweet, setActiveRetweet] = useState("none");

  const handleRetweetClick = () => {
    if (activeretweet === "none") {
      setRetweet(retweet + 1);
      setActiveRetweet("retweet");
      return;
    }

    if (activeretweet === "retweet") {
      setRetweet(retweet - 1);
      setActiveRetweet("none");
      return;
    }
  };
  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gary-100">
      <div className="flex space-x-3">
        <img className="h-10 w-10 rounded-full" src={logo.src} alt="logo" />

        <div>
          <div className="flex items-center space-x-1">
            <p className="font-bold mr-1">{prop.username}</p>
            <p className="text-sm text-gray-500 hidden  sm:inline">
              {prop.idname} .
            </p>
            <p className="text-sm text-gray-500">{prop.time}</p>
          </div>

          <p className="pt-1">{prop.tweettext}</p>
          <img
            src={picture.src}
            alt=""
            className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>
      {/* icons */}
      <div className="flex justify-between mt-5">
        <div
          className="flex flex-nowrap items-center cursor-pointer space-x-3 text-gray-400"
        >
          <ChatAlt2Icon className="h-5 w-5  space-x-3 items-center text-gray-400" />
          65
        </div>

        <div className="flex flex-nowrap cursor-pointer h-5 w-5 items-center space-x-3 text-gray-400">
          <i
            className={`retweet ${
              activeretweet === "retweet" ? "retweet-active" : ""
            }`}
            onClick={handleRetweetClick}
          >
            <FaRetweet id="com-i" />
          </i>
          {retweet}
        </div>
        <div className="flex flex-nowrap cursor-pointer h-5 w-5 items-center space-x-3 text-gray-400">
          <i
            className={`like ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={handleLikeClick}
          >
            <AiFillHeart style={{ margin: "0px" }} />
          </i>
          {likeCount}
        </div>
        <div>
          <ShareIcon className="h-5 w-5 cursor-pointer space-x-3 items-center text-gray-400" />
        </div>
      </div>
      {/* end of icons */}

      {/* comments */}
      <div
        className="my-2 mt-5 max-h-44 spa-y-5 overflow-y-scroll border-t
      border-gray-100 p-5"
      >
        <div className="flex space-x-2 relative mb-2">
          <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
          <img
            src={logo.src}
            className="h-7 w-7 mt-2  object-cover rounded-full"
            alt=""
          />
          <div>
            <div className="flex items-center space-x-1">
              <p className="mr-1 font-bold">{prop.username}</p>
              <p className="text-sm text-gray-500 hidden  lg:inline">
                {prop.idname} .
              </p>
              <p className="text-sm text-gray-500">{prop.time}</p>
            </div>
            <p>{prop.comment}</p>
          </div>
        </div>
        <div className="flex space-x-2 relative mb-2">
          <hr className="absolute left-5 top-10 h-8 border-x border-twitter/30" />
          <img
            src={logo.src}
            className="h-7 w-7 mt-2  object-cover rounded-full"
            alt=""
          />
          <div>
            <div className="flex items-center space-x-1">
              <p className="mr-1 font-bold">{prop.username}</p>
              <p className="text-sm text-gray-500 hidden  lg:inline">
                {prop.idname} .
              </p>
              <p className="text-sm text-gray-500">{prop.time}</p>
            </div>
            <p>{prop.comment}</p>
          </div>
        </div>
      </div>
      {/* end of comments */}
    </div>
  );
}

export default Tweet;
