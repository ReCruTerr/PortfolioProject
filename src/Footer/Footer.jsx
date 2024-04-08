import React from "react";
import { Foot } from "./Footer_js";

export default function Footer() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="  max-w-full w-full min-h-[150px] flex flex-col justify-center items-center gap-[27px] pt-6 bg-[#171718] ">
          <a href="" className=" flex  gap-7">
            {Foot.map((el, index) => (
              <img src={el} alt="" />
            ))}
          </a>
          <div className=" text-[16px] text-white">© 2022 frontend-dev.com</div>
        </div>
      </div>
    </>
  );
}
