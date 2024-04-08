import React from "react";
import "./Header_css.css";
import Nav from "../Components/Nav";
export default function Header() {
  return (
    <>
      <Nav />
      <div className=" w-full h-[1px] bg-[#26292D]"></div>
      <header className=" bg-[#171718] flex justify-center items-center   min-h-[695px] relative py-40 px-0 bg-[url('/public/Abstract.png')] bg-no-repeat  bg-center">
        <div className=" flex flex-col gap-4 text-center max-w-[660px] w-full text-white items-center">
          <h1 className=" font-bold text-[60px] leading-normal">
            Hi, my name is <span className=" text-[#5C62EC]">Renat</span>
            <br />
            <em className=" text-[40px]">a frontend developer</em>
          </h1>
          <span className=" text-[20px]">
            with passion for learning and creating.
          </span>
          <button className="opacity-100 max-w-[160px] w-full  transition duration-300 min-h-[48px]   bg-[#5C62EC] flex items-center justify-center rounded-[5px] mt-2 hover:opacity-80">
            Download CV
          </button>
        </div>
      </header>
    </>
  );
}
