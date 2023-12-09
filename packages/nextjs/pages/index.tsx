"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();

  const handleEnterApp = () => {
    router.push("/app");
  };
  return (
    <div className="bg-transparent p-4 text-white flex justify-between">
      <div className="flex gap-2 items-center">
        <div className="flex relative w-10 h-10">
          <Image alt="SE2 logo" className="cursor-pointer" fill src="/DeSets Logo.svg" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl leading-tight text-white">DeSets</span>
        </div>
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
      <div className="flex flex-col gap-10 items-center p-28">
        <h1 className="text-6xl text-white font-bold">DeSets Protocol</h1>
        <div className=" text-white text-3xl">Build the future of AI with Decentralised Datasets.</div>
        <div>
          <button
            className="btn btn-sm bg-purple-900 rounded-full text-white hover:bg-purple-700"
            onClick={handleEnterApp}
          >
            Enter App
          </button>
        </div>
        <div className="flex gap-24 cursor-pointer text-lg">
          <div className="card w-56 bg-gradient-to-br from-black to-purple-700 shadow-xl hover:scale-105 hover:transition-transform duration-300 ease-in-ou">
            <div className="card-body">
              <p className="text-white font-semibold">Create, modify and explore wide range of datasets on-chain </p>
            </div>
          </div>
          <div className="card w-56 bg-gradient-to-br from-black to-purple-700 shadow-xl hover:scale-105 hover:transition-transform duration-300 ease-in-ou">
            <div className="card-body">
              <p className="text-white font-semibold">Share valuable datasets to train AI for better future</p>
            </div>
          </div>
          <div className="card w-56 bg-gradient-to-br from-black to-purple-700 shadow-xl hover:scale-105 hover:transition-transform duration-300 ease-in-ou">
            <div className="card-body">
              <p className="text-white font-semibold">Create data economy & prevent the misuse of data</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
