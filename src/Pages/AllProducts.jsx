import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import img1 from "../imges/slider_img_1-aa711fe6.jpg";
import img2 from "../imges/slider_img_2-ad43ef2a.jpg";
import axios from "axios";
import { CiShoppingCart } from "react-icons/ci";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Carousel,
  Badge,
  Spinner,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [Loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1300);
  const getProducts = () => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products",
    }).then((data) => setProducts(data.data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full  ">
      <Carousel className="rounded-xl container mx-auto my-10" loop={true}>
        <img src={img1} alt="image 1" className="h-[40%] w-full object-cover" />
        <img src={img2} alt="image 2" className="h-[40%] w-full object-cover" />
        <img src={img1} alt="image 3" className="h-[40%] w-full object-cover" />
      </Carousel>

      <div className="w-full dark:bg-blue-gray-900 bg-[#EAEAEA]">
        <div className="container mx-auto">
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20  dark:bg-black bg-green-500 rounded"></div>
              <h1 className="dark:text-white text-gray-500 text-2xl ms-3  font-bold">
                SEE OUR PRODUCTS
              </h1>
            </div>
          </div>
          {Loading ? (
            <div className="w-full grid grid-cols-1 gap-4 justify-items-center items-center md:grid-cols-3 lg:grid-cols-4">
              {products.map((prod, i) => (
                <div className="" key={i}>
                  <Card className="mt-10 h-[75vh]  md:h-[75vh] border-black border-[1px] ">
                    <CardHeader color="white" className="relative h-96 ">
                      <div className=" py-3">
                        <h1 className="bg-green-600 dark:bg-blue-gray-900  w-24 h-14 text-center pt-3 text-white rounded font-bold">
                          {prod.category}
                        </h1>

                        {prod.images.slice(-1).map((im, it) => (
                          <img
                            alt="card-image"
                            src={im}
                            key={it}
                            className="w-full h-56"
                          />
                        ))}
                      </div>
                    </CardHeader>

                    <CardBody className="bg-gray-100 dark:bg-blue-gray-800">
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mb-2 font-bold dark:text-white"
                      >
                        Brand:{" "}
                        <span className="text-green-600 font-medium">
                          {prod.brand ? prod.brand : "Unkown"}
                        </span>
                        <hr className="my-1 border-t-2 border-black" />
                      </Typography>
                      <Typography className="text-gray-600 w-full text-center  dark:text-white">
                        {prod.title}
                      </Typography>
                      <Typography className="text-black w-full text-center font-bold  dark:text-white">
                        Price :{" "}
                        <span className="text-green-600 underline font-medium">
                          {prod.price}
                        </span>
                      </Typography>
                    </CardBody>
                    <CardFooter className="pt-0 w-full dark:bg-blue-gray-800 bg-gray-100">
                      <Link
                        to={`/details/${prod.id}`}
                        // variant="text"
                      >
                        <Button
                          className=" dark:text-white capitalize w-full flex justify-center items-center  hover:shadow-lg  font-bold hover:text-sm border-[1px] border-black rounded px-3 py-2"
                          variant="outlined"
                        >
                          show details
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-[80vh] bg-[#EAEAEA] flex justify-center items-center ">
              {/* <Spinner color="green" className="w-16 h-16 " /> */}
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-y-8 dark:bg-blue-gray-900 bg-gray-200">
        <div className="container mx-auto">
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500  text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Beauty
              </h1>
            </div>
          </div>{" "}
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500 text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Fragrances
              </h1>
            </div>
          </div>{" "}
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500 text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Furniture
              </h1>
            </div>
          </div>{" "}
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500 text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Groceries
              </h1>
            </div>
          </div>{" "}
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500 text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Home Decoration
              </h1>
            </div>
          </div>{" "}
          <div className="w-full h-40 pt-[2em]">
            <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
              <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
              <h1 className="text-gray-500 text-2xl ms-3  font-bold  dark:text-white ">
                SEE OUR Accessories
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
