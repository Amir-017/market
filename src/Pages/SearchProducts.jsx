import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
const SearchProducts = ({ checkSearch }) => {
  const [search, setSearch] = useState([]);
  const [Loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1300);
  const searchItem = () => {
    axios({
      method: "get",
      url: `https://dummyjson.com/products/search?q=${checkSearch}`,
    }).then((data) => setSearch(data.data.products));
  };
  useEffect(() => {
    searchItem();
    if (!checkSearch) {
      navigate("/");
    }
  }, [checkSearch && checkSearch]);
  //   console.log(search);
  const navigate = useNavigate();

  const back = () => {
    navigate("/");
  };
  // console.log(search);

  return (
    <div className="w-full  ">
      {Loading ? (
        <div className="w-full dark:bg-blue-gray-900 bg-[#EAEAEA]">
          <div className="container mx-auto">
            <div className="w-full h-40 pt-[2em]">
              <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex flex-col md:flex-row shadow-lg mb-20  justify-between  ">
                <div className="flex ">
                  <div className="w-1 h-20 bg-green-500 rounded"></div>
                  <h1 className="text-gray-500 dark:text-white text-2xl ms-3  font-bold h-20 flex items-center">
                    Your Result Based On : {"  "}
                    <span className="ms-2 text-black dark:text-deep-orange-700  ">
                      {checkSearch}
                    </span>
                  </h1>
                </div>
                <div className=" h-20 flex">
                  <Button
                    variant="text"
                    className="flex items-center gap-2 dark:text-white"
                    onClick={back}
                  >
                    Back To Main{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full text-black my-10 text-xl font-bold dark:text-white">
              Product Length :{" "}
              <span className="text-green-900 dark:text-green-300 underline">
                {search && search.length}
              </span>
              <hr className="border-t-2 border-gray-500" />
            </div>
            <div className="w-full grid grid-cols-1 gap-4 justify-items-center items-center md:grid-cols-3 lg:grid-cols-4 pb-10">
              {search.length > 0 ? (
                search.map((prod, i) => (
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
                ))
              ) : (
                <div className="w-full h-[40vh]"></div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh] dark:bg-blue-gray-900 bg-[#EAEAEA] flex justify-center items-center ">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
