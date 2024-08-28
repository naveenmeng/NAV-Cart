import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {Theme} from "./utility/ThemeContext"
let NavBar = () => {
  let {theme ,setTheme} = useContext(Theme);
  let darkTheme = 'navbar bg-base-300 font-bold';
  let lightTheme = 'navbar bg-zinc-700 text-white bg-black';
  return (
    <>
      <div className={theme == 'dark' ? darkTheme : lightTheme}>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-lime-500 font-bold">
            NAV-Cart  
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
          <li>
              <Link to="/Food">Food</Link>
            </li>
            <li>
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                  onClick={()=>{
                    setTheme(theme== "dark"?"light":"dark")
                    localStorage.setItem("Theme",theme== "dark"?"light":"dark")
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default NavBar;
