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
import { Link } from "react-router-dom";
const Laptops = () => {
  const [lap, setLap] = useState([]);
  const [Loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1300);
  const getLap = () => {
    axios({
      method: "get",
      url: "https://dummyjson.com/products/category/laptops",
    }).then((data) => setLap(data.data.products));
  };

  useEffect(() => {
    getLap();
  }, []);

  return (
    <div className="w-full  ">
      {Loading ? (
        <div className="w-full dark:bg-blue-gray-900 bg-[#EAEAEA]">
          <div className="container mx-auto">
            <div className="w-full h-40 pt-[2em]">
              <div className="w-full dark:bg-blue-gray-800 bg-[#EAEAEA]  h-20  rounded-xl flex shadow-lg mb-20  items-center  ">
                <div className="w-1 h-20 dark:bg-black bg-green-500 rounded"></div>
                <h1 className="text-gray-500  text-2xl ms-3  font-bold  dark:text-white ">
                  SEE OUR Laptops
                </h1>
              </div>
            </div>

            <div className="w-full grid grid-cols-1 gap-4 justify-items-center items-center md:grid-cols-3 lg:grid-cols-4 pb-10">
              {lap.map((prod, i) => (
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
          </div>
        </div>
      ) : (
        <div className="w-full h-[80vh] dark:bg-blue-gray-900 bg-[#EAEAEA] flex justify-center items-center ">
          {/* <Spinner color="green" className="w-16 h-16 " /> */}
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

export default Laptops;
