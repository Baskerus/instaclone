import React from "react";
import {
  MdHomeFilled,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";


export default function BottomNav({ handleSignOut }) {
  return (
    <div className="fixed w-full bottom-0 pb-4 bg-slate-50 z-10">
      <div className=" flex items-center justify-between px-6 pt-4 text-2xl">
        <MdHomeFilled />
        <FiSearch />
        {/* <MdOutlineVideoLibrary className="text-transparent"/> */}
        <FiHeart />
        <div
          className="IMAGE w-6 h-6 rounded-full bg-slate-300"
          onClick={handleSignOut}
        ></div>
      </div>
    </div>
  );
}