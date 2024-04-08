import React from "react";
import Nav from "../Components/Nav";
import About from "../Components/About";
import Footer from "../Footer/Footer";

export default function Skills() {
  return (
    <div>
      <Nav />
      <div className=" flex flex-col items-center gap-8 mt-[8%]">
        <h1 className=" text-[60px] text-[#5C62EC] font-bold">Skills</h1>
        <About />
      </div>
      <div className=" mt-[130px]">
        <Footer />
      </div>
    </div>
  );
}
