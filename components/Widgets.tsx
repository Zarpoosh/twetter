"use client"
import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import { useEffect } from "react";


function Widgets() {
  // useEffect(() => {
  //     console.log('in useEffect')
  //   },[]);

  return (
    <div className="px-2 mt-2  mx-3 col-span-2 hidden lg:inline">
      {/* search box */}
      <div className="flex items-center  space-x-2 bg-gray-100 p-3 rounded-full my-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="bg-transparent flex-1 outline-none"
        />
      </div>
      
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="minicode"
        options={{height:2000}}
        />
    </div>
  );
}

export default Widgets;
