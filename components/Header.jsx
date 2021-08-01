import React from "react";
import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  BeakerIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridAddIcon,
  ChevronDownIcon,
  SearchIcon,
  ViewGridIcon,
  BellIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  ServerIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
    <div className=" sticky top-0 z-50 bg-white flex md:justify-between items-center lg:px-5 shadow-md">
      {/* Header left */}
      <div className="flex items-center">
        <Image
          src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
          alt="Header left"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" ml-2 items-center
             bg-transparent outline-none 
             flex-shrink hidden
              md:inline-flex
             placeholder-gray-500"
          />
        </div>
      </div>

      {/* Header CENTER */}
      <div className="flex justify-center ">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Header right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="whitespace-nowrap font-semibold"> Ravi</p>
        <ViewGridIcon className="h-12 icon" />
        <ChatIcon className="h-12 icon" />
        <BellIcon className="h-12 icon" />
        <ChevronDownIcon className="h-12 icon" />
        {/* Profile pic */}
      </div>
    </div>
  );
}

export default Header;
