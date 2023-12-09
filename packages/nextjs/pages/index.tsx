"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push("/app");
  };
  return (
    <div className="bg-transparent p-4 text-white flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="h-8 w-8">
          <img src="DeSets Logo.svg" />
        </div>
        <div>DeSets</div>
      </div>
      <button className="btn btn-sm bg-purple-900 text-white hover:bg-purple-700" onClick={handleEnterApp}>
        Enter App
      </button>
    </div>
  );
};

const Intro = () => {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push("/app");
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-20 items-center p-28">
        <div className="font-bold text-white">Tagline</div>
        <div>
          <button className="btn bg-purple-900 text-white hover:bg-purple-700" onClick={handleEnterApp}>
            Enter App
          </button>
        </div>
        <div className="font-bold text-white">Description</div>
      </div>
    </>
  );
};

export default Intro;
