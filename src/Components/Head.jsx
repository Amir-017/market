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
import { MdOutlineMenuOpen } from "react-icons/md";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { CiShoppingCart, CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
const Head = ({
  openDrawer,
  counter,
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
            className=" w-4 me-1 text-3xl text-white bg-transparent  pt-1 lg:pt-1"
            variant="text"
          >
            <MdOutlineMenuOpen />
          </Button>
          <Typography
            as={Link}
            to="/"
            href="#"
            className=" flex items-start mb-10 h-0 lg:h-16  mr-4 cursor-pointer lg:pt-7 w-[75%]  capitalize text-3xl lg:text-[2.2em]  text-white hover:text-green-300 hover:dark:text-blue-gray-200"
          >
            Market
          </Typography>
        </div>

        <div className="hidden lg:block w-[74%]  ">
          {/* <NavList /> */}
          <div className="w-[100%] h-0 lg:h-20 flex flex-col  items-center">
            <div className="w-full flex justify-center ">
              <div className="relative flex w-full gap-2  ">
                <Input
                  onKeyUp={(e) => setCheckSearch(e.target.value)}
                  type="search"
                  color="white"
                  label="Type here..."
                  className="pr-20 "
                  containerProps={
                    {
                      // className: "min-w-[700px]",
                    }
                  }
                />
                {checkSearch ? (
                  <Button
                    size="sm"
                    className="!absolute right-1 top-[.29rem] rounded bg-green-300 dark:bg-[#282d45] "
                    onClick={searchProd}
                  >
                    search
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="!absolute right-1 top-[.29rem] rounded bg-green-300 dark:bg-[#282d45]"
                    disabled
                    // onClick={searchProd}
                  >
                    search
                  </Button>
                )}
              </div>
            </div>

            <div className="ml-auto w-[95%]  flex gap-1 md:mr-4 ">
              <ul className=" h-10   relatvie w-full gap-x-[12px]  mb-4 p-3  flex flex-row  lg:mb-0 lg:mt-0    md:pe-5  ">
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
                <div className="group">
                  <div
                    // as={Link}
                    variant="small"
                    className={` p-1 font-medium text-white relative    cursor-pointer h-[52px] `}
                  >
                    <Badge
                      content={counter}
                      className={counter >= 1 ? "bg-green-900" : "bg-red-900 "}
                    >
                      <Link to="/adding">
                        <CiShoppingCart className="text-4xl text-white hover:text-green-300 hover:dark:text-[#9b9ca5]" />
                      </Link>
                    </Badge>
                  </div>

                  <div className="invisible  group-hover:visible mr-5  rounded-xl absolute bg-gradient-to-r from-green-100 to-green-200 dark:from-blue-gray-800 dark:to-blue-gray-900 shadow-lg  left-[42em] top-[8rem] ">
                    {aboutAdding && aboutAdding.length === 0 ? (
                      <div className="ms-[1em] flex flex-col justify-center items-center gap-y-4 p-5">
                        <h2 className="text-gray-700 dark:text-gray-300 capitalize text-lg font-semibold">
                          Your cart is empty
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                          Start adding items to your cart to see them here.
                        </p>
                        <Link to="/">
                          <button
                            className="font-bold capitalize rounded-md bg-green-700 dark:bg-[#282d45] py-3 px-10 text-white shadow-md hover:shadow-lg hover:bg-green-800 dark:hover:bg-[#1f243b] transition-all"
                            type="button"
                          >
                            Shop Now
                          </button>
                        </Link>
                      </div>
                    ) : (
                      <div
                        className={` ${
                          aboutAdding &&
                          aboutAdding.length >= 3 &&
                          "overflow-auto h-[20em]"
                        } w-full container mx-auto border-[2px] border-green-700 rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-md`}
                      >
                        <div className="flex flex-col justify-center items-center border-b-[1px] border-green-700 pb-4">
                          <h1 className="text-lg lg:text-2xl font-bold text-black dark:text-white">
                            You have{" "}
                            <span className="underline text-green-700 dark:text-green-300 mx-1">
                              {aboutAdding.length}
                            </span>{" "}
                            items in your cart
                          </h1>
                          <p className="capitalize mt-2 text-gray-600 dark:text-gray-400 font-medium">
                            Review your items below
                          </p>
                        </div>
                        <div className="flex flex-col items-center mt-4 gap-y-3 transition-transform transform hover:scale-105">
                          {aboutAdding.map((item, i) => (
                            <Typography
                              as={Link}
                              to="/adding"
                              className="flex flex-col md:flex-row items-center justify-between w-full p-3 rounded-lg bg-gray-100 dark:bg-blue-gray-800 shadow-sm hover:shadow-md transition-all"
                              key={i}
                            >
                              <h1 className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                                {item.title}
                              </h1>
                              {item.images?.map(
                                (img, idx) =>
                                  idx === 0 && (
                                    <img
                                      key={idx}
                                      src={img}
                                      alt={item.title}
                                      className="w-[50px] h-[50px] rounded-full shadow-lg"
                                    />
                                  )
                              )}
                            </Typography>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  variant="small"
                  className="p-1 hover:text-green-300 font-medium hover:dark:text-[#9b9ca5] text-white relative"
                >
                  {darkLight ? (
                    <button
                      onClick={setLightTheme}
                      className=" absolute left-[-14px] top-[-2px]  text-4xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      <CiSun className="pb-2 hover:text-green-300 " />
                    </button>
                  ) : (
                    <button
                      onClick={setDarkTheme}
                      className="absolute  left-[-7px] top-[1px] text-2xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                      href="#"
                      data-twe-dropdown-item-ref
                    >
                      <FaRegMoon />
                    </button>
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
            <ul className=" relatvie  gap-x-1  mb-4 p-3  flex    flex-col  ">
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
            </ul>
          </div>
          <div className="flex">
            <div className="group w-[50px]">
              <div
                variant="small"
                className={`ms-3 me-3  font-medium text-white relative  cursor-pointer h-[50px]  hover:dark:text-[#9b9ca5]`}
              >
                <Badge
                  content={counter}
                  className={counter > 1 ? "bg-green-900" : "bg-red-900"}
                >
                  <Link to="/adding">
                    <CiShoppingCart className="text-4xl text-white hover:text-green-300 " />
                  </Link>
                </Badge>
              </div>
              <div className=" block lg:hidden invisible  group-hover:visible rounded-xl absolute bg-gradient-to-r from-green-100 to-green-200 dark:from-blue-gray-800 dark:to-blue-gray-900 shadow-lg left-0 top-[22em]  ">
                {aboutAdding && aboutAdding.length === 0 ? (
                  <div className="ms-[1em] flex flex-col justify-center items-center gap-y-4 p-[2em]">
                    <h2 className="text-gray-700 dark:text-gray-300 capitalize text-lg font-semibold">
                      Your cart is empty
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
                      Start adding items to your cart to see them here.
                    </p>
                    <Link to="/">
                      <button
                        className="font-bold capitalize rounded-md bg-green-700 dark:bg-[#282d45] py-3 px-10 text-white shadow-md hover:shadow-lg hover:bg-green-800 dark:hover:bg-[#1f243b] transition-all"
                        type="button"
                      >
                        Shop Now
                      </button>{" "}
                    </Link>
                  </div>
                ) : (
                  <div
                    className={` ${
                      aboutAdding &&
                      aboutAdding.length >= 2 &&
                      "overflow-auto h-[20em]"
                    }  container mx-auto border-[2px] border-green-700 rounded-xl bg-white dark:bg-blue-gray-900 p-4 shadow-md`}
                  >
                    <div className=" flex flex-col justify-center items-center border-b-[1px] border-green-700 pb-4">
                      <h1 className="text-lg lg:text-2xl font-bold text-black dark:text-white">
                        You Have{" "}
                        <span className="underline text-green-700 dark:text-green-300 mx-1">
                          ({aboutAdding && aboutAdding.length})
                        </span>{" "}
                        Items Now
                      </h1>
                      <p className="capitalize mt-2 text-gray-600 dark:text-gray-400 font-medium">
                        Click to show your products
                      </p>
                    </div>
                    <div className="flex flex-col items-center mt-4 gap-y-3 transition-transform transform hover:scale-105">
                      {aboutAdding &&
                        aboutAdding.map((item, i) => (
                          <Typography
                            as={Link}
                            to="/adding"
                            className=" flex flex-row items-center justify-between  p-3 rounded-lg bg-gray-100 dark:bg-blue-gray-800 shadow-sm hover:shadow-md transition-all"
                            key={i}
                          >
                            <h1 className="text-gray-800 dark:text-gray-200 text-sm font-medium">
                              {item.title}
                            </h1>
                            {item.images?.map(
                              (img, idx) =>
                                idx === 0 && (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={item.title}
                                    className="w-[50px] h-[50px] rounded-full shadow-lg"
                                  />
                                )
                            )}
                          </Typography>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div
              variant="small"
              className="p-1 hover:text-green-300 hover:dark:text-[#9b9ca5]  font-medium text-white relative"
            >
              {darkLight ? (
                <button
                  onClick={setLightTheme}
                  className=" absolute left-[1em] bottom-[1.7em]  text-4xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref
                >
                  <CiSun className="pb-2 hover:text-green-300" />
                </button>
              ) : (
                <button
                  onClick={setDarkTheme}
                  className="absolute left-[1.6em] bottom-[2.9em] text-2xl block w-full whitespace-nowrap  px-4 py-2  font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25"
                  href="#"
                  data-twe-dropdown-item-ref
                >
                  <FaRegMoon />
                </button>
              )}
            </div>

            <div className="w-full">
              <div className=" w-full relative flex  gap-2 ">
                <Input
                  onKeyUp={(e) => setCheckSearch(e.target.value)}
                  type="search"
                  color="white"
                  label="Type here..."
                  className="pr-20 h-[40px]"
                  containerProps={{}}
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
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Head;
