import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { Button } from "@material-tailwind/react";
const DetailsItem = ({ aboutAdding, setAboutAdding, setcounter, counter }) => {
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const getDetails = () => {
    axios({
      method: "get",
      url: `https://dummyjson.com/products/${id}`,
    }).then((data) => setDetails(data.data));
  };

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
    getDetails();
  }, []);

  const addition = (d) => {
    const check = aboutAdding.some((item) => {
      return item.id == d.id;
    });
    if (check) {
      setcounter(counter + 1);
      const check1 = aboutAdding.map((product) => {
        if (product.id == d.id) {
          product.item++;
        }
        return product;
      });
      setAboutAdding(check1);
    } else {
      setcounter(counter + 1);

      setAboutAdding([...aboutAdding, { ...d, item: 1 }]);
    }
  };

  return (
    <div className="w-full h-full dark:bg-blue-gray-900 bg-[#EAEAEA]  ">
      <div className="w-full  bg-white dark:bg-blue-gray-800 rounded-xl container mx-auto   ">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="w-full md:w-[60%] flex flex-col justify-center items-center gap-y-10 ">
            {details.images?.map((item, i) => (
              <div className="w-full " key={i}>
                <div className="  flex justify-center items-center">
                  {i == 0 && (
                    <img src={item} alt="" className="w-[40%] md:w-[35%]" />
                  )}
                </div>
              </div>
            ))}
            {/*  */}
            <div className="flex md:justify-evenly mt-10 flex-row">
              {details.images?.map((item, i) => (
                <div
                  className="flex justify-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                  key={i}
                >
                  {i == 1 && (
                    <img
                      src={item}
                      alt=""
                      className="w-[20%] md:w-[20%]     hover:border-2 hover:border-green-900 hover:dark:border-white"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-[45%] me-5">
            <h1 className="text-black dark:text-white font-bold mt-5 text-center md:text-start">
              {details ? details.title : ""}
            </h1>
            <hr className="border-t-2 border-gray-300 mt-2  dark:border-black" />
            <h2 className="text-gray-600 mt-5 dark:text-gray-200 ms-2 md:ms-0">
              {details ? details.description : ""}
            </h2>
            <div className=" w-full  flex flex-col md:flex-row gap-y-3  gap-x-3 mt-10 justify-center items-center md:items-start md:justify-start">
              <h1 className="font-bold dark:text-white   ">
                Rating :{" "}
                <span className="dark:text-blue-gray-400 text-green-500 underline">
                  {details ? details.rating : ""}
                </span>
              </h1>{" "}
              <span className="font-bold dark:text-gray-400">||</span>{" "}
              <h1 className="font-bold dark:text-white text-center">
                Brand :{" "}
                <span className="text-green-500 underline dark:text-blue-gray-400">
                  {details.brand
                    ? details.brand
                    : details.tags
                    ? details.tags.map((im) => im)
                    : "UNKNOWN"}
                </span>
              </h1>{" "}
              <span className="font-bold dark:text-gray-400">||</span>{" "}
              <h1 className="font-bold dark:text-white">
                Category :{" "}
                <span className="text-green-500 underline dark:text-blue-gray-400">
                  {details ? details.category : ""}
                </span>
              </h1>{" "}
            </div>
            <div className="w-full mt-16 dark:bg-[#252B43] bg-gray-200  rounded-xl container ps-2 dark:text-gray-400 text-gray-600 ">
              <div className="flex gap-x-2 pt-5 justify-center md:justify-start">
                <h1 className="font-bold line-through me-1 ">
                  <span className=" me-1">{details ? details.price : ""}</span>
                  EGP
                </h1>
                <span className="text-grya-600">inclusive in takes</span>
              </div>
              <div className="flex gap-x-4 mt-5 h-16 justify-center md:justify-start">
                <h1 className=" font-bold dark:text-green-500 text-green-900 text-[1.5rem]">
                  {details &&
                    (
                      details.price -
                      details.price * (details.discountPercentage / 100)
                    ).toFixed(2)}{" "}
                  EGP
                </h1>

                <div className="text-white    italic text-xl">
                  <h1 className="dark:bg-[#2c324a] bg-green-800 px-3 py-1 rounded">
                    {details ? details.discountPercentage : ""} % off
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 mt-20 mb-2 justify-center md:justify-start">
              <div className="relative flex ">
                <Button
                  onClick={() => addition(details)}
                  color="green"
                  size="lg"
                  className="dark:bg-[#282d45]  bg-green-900 hover:shadow capitalize font-bold "
                >
                  add to cart
                </Button>
                <CiShoppingCart className="text-2xl text-white font-bold absolute right-0  top-3" />
              </div>

              <button
                className="font-bold dark:bg-[#232a45]   capitalize rounded-md bg-green-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;
