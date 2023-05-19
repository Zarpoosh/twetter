import React from "react";
import SidebarRows from "./SidebarRows";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from "@heroicons/react/outline";
function Sidbar() {
  return (
    <div className="flex flex-col col-span-2  items-center px-4 md:items-start ">
      <div className="fixed">
        <img
          className="h-10 w-10 m-3"
          src="https://links.papareact.com/drq"
          alt=""
        />
        {/* icons */}
        <SidebarRows Icon={HomeIcon} title="Home" />
        <SidebarRows Icon={HashtagIcon} title="Explore" />
        <SidebarRows Icon={BellIcon} title="Notifications" />
        <SidebarRows Icon={MailIcon} title="Messages" />
        <SidebarRows Icon={BookmarkIcon} title="Bookmarks" />
        <SidebarRows Icon={CollectionIcon} title="Lists" />
        <SidebarRows Icon={UserIcon} title="Sign n" />
        <SidebarRows Icon={DotsCircleHorizontalIcon} title="More" />
        {/* end of icons */}
      </div>
    </div>
  );
}

export default Sidbar;
