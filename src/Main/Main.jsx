import React from "react";
import { Projects } from "./Main_js";
import "./../index.css";

export default function Main() {
  return (
    <>
      <div className=" flex justify-center items-center  text-[#5C62EC]  mt-20 text-[60px] font-bold">
        <p>Projects</p>
      </div>
      <div className=" flex justify-center items-center mt-16">
        <div className=" flex flex-wrap max-w-[1170px] justify-evenly  w-full min-h-[866px] ml-2 ">
          {Projects.map((el, index) => (
            <div className=" bg-white text-black flex flex-col gap-2 max-w-[370px]  h-[349px] rounded-[10px] shadow-xl    ">
              <a href={el.href}>
                <img src={el.img} alt="" className="hover:cursor-pointer" />
                <p className="  font-bold text-[24px] px-2 ">{el.text}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
