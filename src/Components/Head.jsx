import React, { useEffect, useState } from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Input,
  Collapse,
  Badge,
} from "@material-tailwind/react";
import { PiLockLaminatedBold } from "react-icons/pi";
import { MdOutlineMenuOpen } from "react-icons/md";
import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import add from "../imges/shopping_cart-b0846037.png";
import { CiShoppingCart, CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
const Head = ({
  openDrawer,
  num,
  setCheckSearch,
  checkSearch,
  aboutAdding,
}) => {
  const [openNav, setOpenNav] = useState(false);
  const [darkLight, setDarkLight] = useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
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
  const searchProd = () => {
    navigate("/search");
  };
  return (
    <Navbar
      variant="gradient"
      color="blue-gray"
      className="sticky top-0 z-20 mx-auto max-w-screen-xl from-green-900 to-green-800  dark:from-blue-gray-900 dark:to-blue-gray-800 px-4 py-3"
    >
      <div className="flex w-full  flex-wrap items-center justify-between gap-y-4 text-white">
        <div className="flex ">
          {" "}
          <Button
            onClick={openDrawer}
            className=" w-4 me-1 text-3xl text-white bg-transparent  pt-2 lg:pt-7"
            variant="text"
          >
            <MdOutlineMenuOpen />
          </Button>
          <Typography
            as={Link}
            to="/"
            href="#"
            className=" flex items-start mb-10 h-0 lg:h-16  mr-4 cursor-pointer lg:pt-10 w-[75%]  capitalize text-4xl lg:text-[2em]  text-white hover:text-green-300 hover:dark:text-blue-gray-200"
          >
            go-market
          </Typography>
        </div>

        <div className="hidden lg:block w-[74%]  ">
          {/* <NavList /> */}
          <div className="w-[100%] h-0 lg:h-20 flex flex-col  items-center">
            <div className="w-full flex justify-center ">
              <div className="relative flex w-full gap-2 md:w-max">
                <Input
                  onKeyUp={(e) => setCheckSearch(e.target.value)}
                  type="search"
                  color="white"
                  label="Type here..."
                  className="pr-20"
                  containerProps={{
                    className: "min-w-[725px]",
                  }}
                />
                {checkSearch ? (
                  <Button
                    size="sm"
                    className="!absolute right-1 top-[.29rem] rounded bg-green-700 dark:bg-[#282d45] "
                    onClick={searchProd}
                  >
                    search
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="!absolute right-1 top-[.29rem] rounded bg-green-700 dark:bg-[#282d45]"
                    disabled
                    onClick={searchProd}
                  >
                    search
                  </Button>
                )}
              </div>
            </div>

            <div className="ml-auto w-[95%]  flex gap-1 md:mr-4 ">
              <ul className=" h-10   relatvie w-full gap-x-2  mb-4 p-3  flex flex-row  lg:mb-0 lg:mt-0 justify-start    ">
                <Typography
                  as={Link}
                  to="/beatuy"
                  variant="small"
                  className="p-1 text-white  hover:text-green-300 font-medium hover:dark:text-[#9b9ca5]"
                >
                  Beatuy
                </Typography>
                <Typography
                  as={Link}
                  to="/frag"
                  variant="small"
                  className="hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] p-1 text-white"
                >
                  Fragrances
                </Typography>
                <Typography
                  as={Link}
                  to="/furniture"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
                >
                  Furniture
                </Typography>
                <Typography
                  as={Link}
                  to="/groc"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
                >
                  Groceries
                </Typography>
                <Typography
                  as={Link}
                  to="/homeDeco"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
                >
                  Home Decoration
                </Typography>
                <Typography
                  as={Link}
                  to="/kitchen"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
                >
                  Kitchen Accesories
                </Typography>
                <Typography
                  as={Link}
                  to="/lap"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
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
                    className={num > 1 ? "bg-green-900" : "bg-red-900 "}
                  >
                    <Link to="/adding">
                      <CiShoppingCart className="text-4xl text-white hover:text-green-300 hover:dark:text-[#9b9ca5]" />
                    </Link>
                  </Badge>
                </div>
                <div
                  // as={Link}
                  // to="/shirts"
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white relative"
                >
                  {darkLight ? (
                    <button
                      onClick={setLightTheme}
                      className=" absolute left-0 top-[-2px]  text-4xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      <CiSun className="pb-2 hover:text-green-300 " />
                    </button>
                  ) : (
                    <button
                      onClick={setDarkTheme}
                      className="absolute  left-0 top-[1px] text-2xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
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
                        className="mb-10 font-bold capitalize rounded-md bg-green-700 dark:bg-[#282d45]  py-3 px-10  border border-transparent text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                        type="button"
                      >
                        go shopping now
                      </h1>
                    </div>
                  ) : (
                    <div className="w-full  container mx-auto border-[2px] border-green-900 rounded-2xl">
                      <div className="w-full  flex flex-col justify-center items-center  border-[1px] border-green-700 rounded-2xl ">
                        <h1 className="ms-2 font-serif lg:text-2xl font-bold text-black dark:text-white">
                          You Have{" "}
                          <span className="underline text-green-900 dark:text-green-300 mx-1">
                            ({aboutAdding && aboutAdding.length})
                          </span>
                          Item Now
                        </h1>
                        <h1 className="capitalize font-normal mt-2 ms-2 text-gray-700 dark:text-gray-300 ">
                          click to show your products
                        </h1>
                      </div>

                      <hr className=" border-t-2 border-gray-500" />
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
            </div>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        {/* <NavList /> */}
        <div className="w-[80%]  flex flex-col">
          <div className="ml-auto flex gap-1 md:mr-4 w-full justify-start items-start">
            <ul className="ms-0 lg:ms-5 relatvie w-full gap-x-1  mb-4 p-3  flex   lg:mb-0 lg:mt-0 flex-col  ">
              <Typography
                as={Link}
                to="/beatuy"
                variant="small"
                className="p-1 text-white hover:text-green-300 font-medium hover:dark:text-[#9b9ca5]"
              >
                Beatuy
              </Typography>
              <Typography
                as={Link}
                to="/frag"
                variant="small"
                className="hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] p-1 text-white"
              >
                Fragrances
              </Typography>
              <Typography
                as={Link}
                to="/furniture"
                variant="small"
                className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
              >
                Furniture
              </Typography>
              <Typography
                as={Link}
                to="/groc"
                variant="small"
                className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
              >
                Groceries
              </Typography>
              <Typography
                as={Link}
                to="/homeDeco"
                variant="small"
                className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
              >
                Home Decoration
              </Typography>
              <Typography
                as={Link}
                to="/kitchen"
                variant="small"
                className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
              >
                Kitchen Accesories
              </Typography>
              <Typography
                as={Link}
                to="/lap"
                variant="small"
                className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white"
              >
                Laptops
              </Typography>

              <div
                // as={Link}
                variant="small"
                className={`mt-2 p-1 font-medium text-white relative  cursor-pointer h-6 peer hover:dark:text-[#9b9ca5]`}
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
                className="p-1 hover:text-green-300 hover:dark:text-[#9b9ca5]  font-medium text-white relative"
              >
                {darkLight ? (
                  <button
                    onClick={setLightTheme}
                    className=" absolute left-10 bottom-[-.6em]  text-4xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                    href="#"
                    data-twe-dropdown-item-ref
                  >
                    <CiSun className="pb-2 hover:text-green-300" />
                  </button>
                ) : (
                  <button
                    onClick={setDarkTheme}
                    className="absolute left-10 bottom-[-.4em] text-2xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
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
                  <div className="w-full  container mx-auto border-[2px]  border-green-900 rounded-2xl">
                    <div className="w-full  flex flex-col justify-center items-center  border-[1px] border-green-700 rounded-2xl font-serif">
                      <h1 className="ms-2 lg:text-2xl font-bold text-black dark:text-white">
                        You Have{" "}
                        <span className="underline   mx-1">
                          ({aboutAdding && aboutAdding.length})
                        </span>
                        Item Now
                      </h1>
                      <h1 className="capitalize mt-2 ms-2 text-gray-700 dark:text-gray-300 font-bold">
                        click to show your products
                      </h1>
                    </div>

                    <hr className=" border-t-2 border-gray-500" />
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
          </div>
          <div className="w-full ">
            <div className="relative flex w-full  gap-2 md:w-max">
              <Input
                onKeyUp={(e) => setCheckSearch(e.target.value)}
                type="search"
                color="white"
                label="Type here..."
                className="pr-20 h-[40px]"
                containerProps={{
                  className: "min-w-[690px]",
                }}
              />
              {checkSearch ? (
                <Button
                  size="sm"
                  className="!absolute right-1 top-[.29rem] rounded bg-green-700 dark:bg-[#282d45] "
                  onClick={searchProd}
                >
                  search
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="!absolute right-1 top-[.29rem] rounded bg-green-700 dark:bg-[#282d45]"
                  disabled
                  onClick={searchProd}
                >
                  search
                </Button>
              )}
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Head;
