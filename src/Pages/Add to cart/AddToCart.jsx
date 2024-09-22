import React, { useEffect, useState } from "react";
import add from "../../imges/shopping_cart-b0846037.png";
import { useNavigate } from "react-router-dom";
import { Button, Card, Typography } from "@material-tailwind/react";
import { FaRegTrashCan } from "react-icons/fa6";

const AddToCart = ({ aboutAdding, setAboutAdding, num, setNum }) => {
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();
  const go = () => {
    navigate("/");
    // console.log("hi");
  };

  const TABLE_HEAD = [
    "Product",
    "Unit Price",
    "Quantity",
    "Total Price",
    "Actions",
  ];
  const incress = (prod) => {
    const incressProduct = aboutAdding.map((product) => {
      if (product == prod) {
        product.item++;
      }
      return product;
    });
    setAboutAdding(incressProduct);
    setNum((num += 1));
  };

  const decress = (prod) => {
    const decressProduct = aboutAdding.map((product) => {
      if (product == prod) {
        if (product.item > 1) {
          product.item--;
          setNum((num -= 1));
        }
      }
      return product;
    });
    setAboutAdding(decressProduct);
  };
  //   console.log(aboutAdding && aboutAdding.length);
  const clear = () => {
    setAboutAdding([]);
    setNum(0);
  };

  const del = (prod) => {
    const dellProduct = aboutAdding.filter((product) => {
      return product != prod;
    });
    setAboutAdding(dellProduct);
    setNum(num - prod?.item);
  };
  return (
    <div className="w-full ">
      {aboutAdding.length == 0 ? (
        <div className=" dark:bg-blue-gray-900 bg-gray-300 h-[90vh] ">
          <div className=" h-full flex flex-col justify-center items-center  gap-y-3">
            <img
              src={add}
              alt=""
              className=" w-[200px] h-[200px] rounded-full"
            />
            <h2 className="text-gray-600 capitalize dark:text-gray-300">
              your shopping cart is empty
            </h2>
            <button
              onClick={go}
              className=" font-bold capitalize rounded-md bg-green-700 dark:bg-[#282d45] py-3 px-10  border border-transparent text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
            >
              go shopping now
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col ">
          <div className="container mx-auto mt-10    overflow-auto    w-[80%]  flex flex-col justify-center ">
            <h1 className="w-full text-3xl text-center block md:hidden dark:text-white text-black my-5">
              | This Table Is OverFlow |
            </h1>
            <Card className=" w-full ">
              <table className=" table-auto text-left ">
                <thead className="">
                  <tr className="">
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="rounded dark:text-white text-black border-b border-blue-gray-100 dark:bg-black bg-blue-gray-50 p-4 text-center"
                      >
                        <Typography
                          variant="small"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="flex-col md:flex-row w-full ">
                  {aboutAdding &&
                    aboutAdding.map((item, index) => {
                      const isLast = index === aboutAdding.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr
                          key={index}
                          className="text-center flex-col md:flex-row w-full dark:bg-[#252B43] bg-white dark:text-white text-black"
                        >
                          <td className="">
                            <Typography variant="small" className="font-normal">
                              {item?.title}
                            </Typography>
                          </td>
                          <td className="text-center">
                            <Typography variant="small" className="font-normal">
                              {item?.price}
                            </Typography>
                          </td>
                          <td className="flex justify-center">
                            <Typography
                              as="a"
                              href="#"
                              variant="small"
                              className="font-medium"
                            >
                              <div className="flex   mt-5 mb-5  ">
                                <div className=" flex flex-col md:flex-row  ">
                                  <button
                                    onClick={() => incress(item)}
                                    className="rounded-md rounded-r-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm dark:text-white text-black transition-all shadow-md hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                  >
                                    +
                                  </button>
                                  <h1
                                    className="rounded-none bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm dark:text-white text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                  >
                                    {item?.item}
                                  </h1>
                                  <button
                                    onClick={() => decress(item)}
                                    className="rounded-md rounded-l-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm dark:text-white text-black transition-all shadow-md hover:shadow-lg focus:bg-gray-900 focus:text-white focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                  >
                                    -
                                  </button>
                                </div>
                              </div>
                            </Typography>
                          </td>
                          <td className="text-center">
                            <Typography variant="small" className="font-normal">
                              {(item?.price * item.item).toFixed(2)}
                            </Typography>
                          </td>
                          <td className="">
                            <Typography variant="small" className="font-normal">
                              <button
                                onClick={() => del(item)}
                                className="font-bold  capitalize rounded-md bg-red-900 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-lg hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                                type="button"
                              >
                                Delete
                              </button>
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </Card>
          </div>
          <div className="w-[80%]  mb-24 container mx-auto dark:bg-[#252B43] bg-gray-300 rounded-xl mt-20 flex flex-col ">
            <div className="px-3 mt-2 flex flex-col md:flex-row justify-center md:justify-between items-center w-full">
              <div className="flex relative">
                <Button
                  onClick={clear}
                  className="font-bold text-[.8em] border-[2px]  text-white border-transparent hover:shadow-lg bg-red-900"
                >
                  Clear Data
                </Button>
                <FaRegTrashCan className="mt-[.9rem]  absolute right-1 text-black" />
              </div>
              <h1 className="text-xl mt-2 text-black dark:text-white">
                Total (1) Items :{" "}
                <span className="dark:text-blue-gray-400 text-green-900 font-bold text-[1rem] underline">
                  {aboutAdding &&
                    aboutAdding
                      .map((i) => i.price * i.item)
                      .reduce((x, y) => x + y)
                      .toFixed(2)}
                  {" EGP "}
                </span>
              </h1>
            </div>
            <div className="w-full mt-5 mb-5 flex justify-center md:justify-end items-center pe-2 ">
              <Button
                color="green"
                className="dark:bg-[#282d45]  bg-green-900 hover:shadow"
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
