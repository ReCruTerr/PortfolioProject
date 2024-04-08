import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Footer/Footer";

export default function Contacts() {
  return (
    <div>
      <Nav />
      <div className=" flex justify-center items-center gap-11 flex-col mt-[70px]">
        <p className=" text-[60px] text-[#5C62EC] font-bold">Contacts</p>
        <div className=" flex flex-col gap-[40px] justify-center items-center">
          <h1 className=" text-center font-bold text-[40px]">
            Location
            <p className=" font-normal text-[18px]">Moscow, Russia</p>
          </h1>
          <h1 className=" text-center font-bold text-[40px]">
            Telegram / WhatsApp
            <p className=" font-normal text-[18px]">
              @ARV_15 / +7(928)871-20-00{" "}
            </p>
          </h1>
          <h1 className=" text-center font-bold text-[40px]">
            Email <br />
            <a href="" target="blank" className="  text-[18px] text-[#5C62EC]">
              renatren25@gmail.com
            </a>
          </h1>
        </div>
      </div>
      <div className=" mt-[140px]">
        <Footer />
      </div>
    </div>
  );
}
