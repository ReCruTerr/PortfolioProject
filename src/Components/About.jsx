import React from "react";

export default function About() {
  return (
    <div className=" flex flex-col gap-8 justify-center items-center mt-10 mb-10 ">
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h1 className="  font-bold text-[42px]">Frontend</h1>
        <p className=" text-[20px] font-normal">
          HTML, CSS, JavaScript, TailwindCSS, NPM, React
        </p>
      </div>
      <div className=" flex flex-col gap-2 justify-center items-center">
        <h1 className="  font-bold text-[42px]">Backend</h1>
        <p className=" text-[20px] font-normal">
          NodeJS,ExpressJS,MongoDB(base)
        </p>
      </div>
    </div>
  );
}
