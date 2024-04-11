import React, { useState, useEffect, UseRef } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
export default function Nav() {
  const active =
    " nav__list--active opacity-100 transition duration-300 hover:opacity-80  nav__list--active::before";
  const notActive = "  opacity-100 transition duration-300 hover:opacity-80";
  const [theme, setTheme] = useState("light");

  const themeChange = () => {
    setTheme((currentValue) => {
      if (currentValue === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav
        className=" bg-[#171718] flex items-center justify-center max-w-[100%] min-h-[] text-white  py-5 px-0 "
        id="navigation"
      >
        <div
          className=" flex max-w-[1300px] w-full py-2 justify-between relative"
          id="nav__item"
        >
          <h2 id="papp">
            <NavLink to="/">
              <strong className=" font-bold text-2xl">Freelancer </strong>{" "}
              <span className=" text-xl"> portfolio</span>
            </NavLink>
          </h2>

          <div
            className=" flex gap-6 pr-8  max-w-[350px] w-full"
            id="nav__item--second"
          >
            <div className=" flex gap-6 ">
              <NavLink
                to="/skills"
                id="papp"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Skills
              </NavLink>
              <NavLink
                to="/contacts"
                id="papp"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Contacts
              </NavLink>
              <NavLink
                to="/projects"
                id="papp"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Projects
              </NavLink>
            </div>
            <button
              onClick={themeChange}
              className={clsx(
                "btn",
                theme === "dark" ? "btn__active--darkmode" : ""
              )}
              id="mode"
            >
              <img src="/Sun.svg" alt="" className=" relative"></img>
              <img src="/Moon.svg" alt="" className=" relative" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
