import { ArrowLeftIcon, RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import TweetBox from "./TweetBox";
import Tweet from "./Tweet";


function Feed() {
  return (
    <div className=" col-span-7  lg:col-span-5 mr-3 border-x h-screen ">
      {/* nav */}
      <div className="flex items-center justify-between border">
        <div className="flex items-center m-2">
          <ArrowLeftIcon className="h-8 w-8  cursor-pointer items-center mt-3  " />
          <h1 className="p-2 pl-3 pb-0 text-xl font-bold">Home</h1>
        </div>
        <RefreshIcon className="h-8 w-8 mr-2 cursor-pointer text-blue-400 transitio-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>
      {/* end of nav */}

      {/* tweet box */}
      <div >
        <TweetBox />
      </div>
      {/* end of tweet box   */}

      {/* feed */}
      <div>
       
        <Tweet
          username="Minoo Zarpoosh"
          idname="@mincode"
          time="40 minutes ago"
          tweettext="this a demo tweet!"
          comment="this is first comment!"
        />
        <Tweet
          username="Minoo Zarpoosh"
          idname="@mincode"
          time="40 minutes ago"
          tweettext="this a demo tweet!"
          comment="this is first comment!"
        />
        <Tweet
          username="Minoo Zarpoosh"
          idname="@mincode"
          time="40 minutes ago"
          tweettext="this a demo tweet!"
          comment="this is first comment!"
        />
      </div>
      {/* end of feed */}
    </div>
  );
}

export default Feed;
