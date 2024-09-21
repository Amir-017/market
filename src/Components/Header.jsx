import React, { useEffect, useState } from "react";
import {
  Navbar,
  Drawer,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
  Badge,
} from "@material-tailwind/react";
import { CiShoppingCart } from "react-icons/ci";
import add from "../imges/shopping_cart-b0846037.png";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";

import { MdOutlineMenuOpen } from "react-icons/md";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { PiLockLaminatedBold } from "react-icons/pi";
import axios from "axios";

const Header = ({
  openDrawer,
  num,
  setCheckSearch,
  checkSearch,
  aboutAdding,
}) => {
  const [openNav, setOpenNav] = useState(false);
  const [peer, setPeer] = useState(false);
  const [darkLight, setDarkLight] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setDarkLight(!darkLight);
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setDarkLight(!darkLight);
  }

  const navigate = useNavigate();

  const navList = (
    <ul className="ms-0 lg:ms-5 relatvie w-full gap-x-1  mb-4 p-3  flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row  ">
      <Typography
        as={Link}
        to="/beatuy"
        variant="small"
        className="p-1 text-white hover:text-green-300 font-medium"
      >
        Beatuy
      </Typography>
      <Typography
        as={Link}
        to="/frag"
        variant="small"
        className="hover:text-green-300 font-medium p-1 text-white"
      >
        Fragrances
      </Typography>
      <Typography
        as={Link}
        to="/furniture"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white"
      >
        Furniture
      </Typography>
      <Typography
        as={Link}
        to="/groc"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white"
      >
        Groceries
      </Typography>
      <Typography
        as={Link}
        to="/homeDeco"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white"
      >
        Home Decoration
      </Typography>
      <Typography
        as={Link}
        to="/kitchen"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white"
      >
        Kitchen Accesories
      </Typography>
      <Typography
        as={Link}
        to="/lap"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white"
      >
        Laptops
      </Typography>

      <div
        // as={Link}
        variant="small"
        className={` p-1 font-medium text-white relative  cursor-pointer h-6 peer`}
      >
        <Badge
          content={num}
          className={num > 1 ? "bg-green-900" : "bg-red-900"}
        >
          <Link to="/adding">
            <CiShoppingCart className="text-4xl text-white hover:text-green-300 " />
          </Link>
        </Badge>
      </div>
      <div
        // as={Link}
        // to="/shirts"
        variant="small"
        className="p-1 hover:text-green-300 font-medium text-white relative"
      >
        {darkLight ? (
          <button
            onClick={setLightTheme}
            className=" absolute left-0 bottom-[-.6em]  text-4xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
            href="#"
            data-twe-dropdown-item-ref
          >
            <CiSun className="pb-2 hover:text-green-300" />
          </button>
        ) : (
          <button
            onClick={setDarkTheme}
            className="absolute left-0 bottom-[-.4em] text-2xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
            href="#"
            data-twe-dropdown-item-ref
          >
            <FaRegMoon />
          </button>
        )}
      </div>
      <div className="hidden peer-hover:block rounded-xl absolute  w-[80%] md:w-[60%] lg:w-[40%] peer-hover:bg-gray-100 peer-hover:dark:bg-blue-gray-900 md:left-1 top-[29em] left-[1em]  lg:left-[45em]  lg:top-[9rem] ">
        {aboutAdding && aboutAdding.length == 0 ? (
          <div className="peer-hover:block w-full h-full flex flex-col justify-center items-center  gap-y-3">
            <img
              src={add}
              alt=""
              className="w-[100px] h-[100px] rounded-full"
            />
            <h2 className="text-gray-600 dark:text-gray-300 capitalize">
              your shopping cart is empty
            </h2>
            <h1
              className="mb-10 font-bold capitalize rounded-md bg-green-900 py-3 px-10  border border-transparent text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              go shopping now
            </h1>
          </div>
        ) : (
          <div className="w-full  container mx-auto border-[2px] border-green-900 rounded-2xl">
            <div className="w-full  flex flex-col justify-center items-center  border-[1px] border-green-700 rounded-2xl font-serif">
              <h1 className="ms-2 lg:text-2xl font-bold text-black dark:text-white">
                You Have{" "}
                <span className="underline text-green-900 dark:text-green-300 mx-1">
                  ({aboutAdding && aboutAdding.length})
                </span>
                Item Now
              </h1>
              <h1 className="capitalize mt-2 ms-2 text-gray-700 dark:text-gray-300 font-bold">
                click to show your products
              </h1>
            </div>

            {/* <hr className=" border-t-2 border-gray-500" /> */}
            <div className=" w-full  flex flex-col items-center  mt-5 gap-y-2  ">
              {aboutAdding &&
                aboutAdding.map((item, i) => (
                  <div
                    className="flex flex-col md:flex-row mb-5 justify-center items-center  lg:justify-between lg:h-[7vh] w-[100%] rounded-xl bg-white dark:bg-blue-gray-800 border-[1px] border-black"
                    key={i}
                  >
                    <h1 className="text-gray-800 dark:text-gray-200 text-[1em] ms-1 flex items-center h-full">
                      {item.title}
                    </h1>

                    {item.images?.map(
                      (i, l) =>
                        l == 0 && (
                          <img
                            key={l}
                            src={i}
                            alt=""
                            className="w-[50px] h-[50px] rounded-full"
                          />
                        )
                    )}
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </ul>
  );

  const searchProd = () => {
    navigate("/search");
  };
  return (
    <Navbar className="sticky top-0 z-20 container mx-auto max-w-screen-xl px-4 py-2  lg:py-0 lg:pt-3 dark:bg-blue-gray-900 bg-green-900">
      <div className="relative flex flex-wrap items-center justify-end text-blue-gray-900">
        <div className="w-full flex relative  ">
          <Button
            onClick={openDrawer}
            className="text-2xl md:text-3xl text-white bg-transparent lg:pt-10"
            variant="text"
          >
            <MdOutlineMenuOpen />
          </Button>
          <Typography
            as={Link}
            to="/"
            href="#"
            className=" flex  mr-4 cursor-pointer lg:pt-10 w-[80%] lg:w-[25%] capitalize text-2xl md:text-4xl  text-white hover:text-green-300"
          >
            <PiLockLaminatedBold className="mt-1 md:mt-0" /> go-market
          </Typography>
          <div className="hidden items-center gap-x-2 lg:flex w-[65%]">
            <div className="relative w-full gap-2 ">
              <input
                onKeyUp={(e) => setCheckSearch(e.target.value)}
                type="search"
                placeholder="Type Here..."
                className="w-[100%] rounded-xl h-12 bg-transparent text-white border-[1px] border-black  !border-t-blue-gray-900 pl-9 placeholder:text-white focus:text-white focus-within:border-black"
              />

              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute right-4 bottom-1 ">
                {checkSearch ? (
                  <Button color="green" onClick={searchProd}>
                    search
                  </Button>
                ) : (
                  <Button color="green" disabled onClick={searchProd}>
                    search
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <IconButton
          variant="text"
          className="lg:hidden absolute bottom-[1em] text-white   "
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
        <div className="hidden lg:block  w-[70%]  justify-start lg:justify-center   ">
          {navList}
        </div>
      </div>

      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex  gap-x-2 sm:flex-row sm:items-center relative">
            <div className="relative w-full gap-2 ">
              <input
                onKeyUp={(e) => setCheckSearch(e.target.value)}
                type="search"
                placeholder="Type Here..."
                className="w-full rounded-xl h-12 bg-transparent text-white border-[1px] border-black  !border-t-blue-gray-900 pl-9 placeholder:text-white focus:text-white focus-within:border-black"
              />

              <div className="!absolute left-3 top-[13px]">
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                    fill="#CFD8DC"
                  />
                  <path
                    d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                    stroke="#CFD8DC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="absolute right-2 bottom-1 ">
                {checkSearch ? (
                  <Button color="green" onClick={searchProd}>
                    search
                  </Button>
                ) : (
                  <Button color="green" disabled onClick={searchProd}>
                    search
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
