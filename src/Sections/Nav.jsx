import { useState } from "react";
import { logo, lock, hamburgerMenu, close } from "../assets";
import { navLinks } from "../constant";
import Button from "../components/Button";
const Buttons = ({ styles }) => {
  return (
    <div className={`${styles} flex md:gap-x-5`}>
      <Button
        icon={lock}
        text={"login"}
        styles="bg-white  md:border-none text-primary text-[20px] border border-slate-200"
      />
      <Button text="sign up for free" styles={"text-white"} />
    </div>
  );
};
const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <nav className=" border-b border-slate-200 transition-all">
      <div className="flex h-[70px] items-center justify-between ">
        <img src={logo} alt="" />
        <ul className=" hidden flex-1 items-center  justify-center gap-x-5 md:flex">
          {navLinks.map((el) => (
            <li key={el}>
              <a href={"#" + el}> {el} </a>
            </li>
          ))}
        </ul>
        {/* start right content  */}
        <div>
          <Buttons styles={"hidden md:flex"} />

          <button
            onClick={() => setNavToggle((p) => !p)}
            className="block md:hidden"
          >
            <img src={navToggle ? close : hamburgerMenu} alt="hamburgerMenu" />
          </button>
        </div>
        {/*  mobile navbar */}
        <div
          className={` nav  absolute left-0 top-[70px] z-10 grid w-full overflow-hidden border-b border-b-slate-300   bg-white px-10 shadow-lg transition-[1.5s] md:hidden ${
            !navToggle ? "" : "show"
          } `}
        >
          <div className="overflow-hidden  transition-[1s]">
            <ul
              className="w-full  flex-col  items-center justify-center  gap-x-5  
      "
            >
              {navLinks.map((el, index) => (
                <li key={el}>
                  <a
                    className={`w-full text-center transition-all hover:bg-slate-50 hover:pl-6 hover:text-primary ${
                      index !== navLinks.length - 1 ? "my-2" : "mb-0"
                    } py-4`}
                    href={"#" + el}
                  >
                    {" "}
                    {el}{" "}
                  </a>
                </li>
              ))}
            </ul>
            <Buttons styles={"mb-5 mt-10 flex-col md:hidden gap-y-4"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
