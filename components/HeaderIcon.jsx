import React from "react";

function HeaderIcon({ Icon, active }) {
  return (
    <div
      className={`flex items-center 
    cursor-pointer md:px-10 sm:h-14 
    active:border-b-2 active:border-blue-500
    md:hover:bg-gray-100 hover:text-blue-500 ${active && "text-blue-500"}`}
    >
      <Icon className="h-6  text-center sm:h-7 mx-auto " />
    </div>
  );
}

export default HeaderIcon;
