import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { Link, Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts";
import Beatuy from "./Pages/Beatuy";
import Fragrances from "./Pages/Fragrances";
import Furniture from "./Pages/Furniture";
import Groceries from "./Pages/Groceries";
import HomeDecoration from "./Pages/HomeDecoration";
import KitchenAccesories from "./Pages/KitchenAccesories";
import Laptops from "./Pages/Laptops";
import MensShirts from "./Pages/MensShirts";
import { Button } from "@material-tailwind/react";
import { MdOutlineMenuOpen } from "react-icons/md";
import {
  Navbar,
  Drawer,
  Collapse,
  Typography,
  IconButton,
  Input,
} from "@material-tailwind/react";
import MensShoes from "./Pages/MensShoes";
import MensWatches from "./Pages/MensWatches";
import MobileAccessories from "./Pages/MobileAccessories";
import Motorcycle from "./Pages/Motorcycle";
import SkinCare from "./Pages/SkinCare";
import Smartphones from "./Pages/Smartphones";
import SportsAccessories from "./Pages/SportsAccessories";
import SunGlasses from "./Pages/SunGlasses";
import Tablets from "./Pages/Tablets";
import Tops from "./Pages/Tops";
import Vehicle from "./Pages/Vehicle";
import WomensBags from "./Pages/WomensBags";
import WomensDresses from "./Pages/WomensDresses";
import WomensJewellery from "./Pages/WomensJewellery";
import WomensShoes from "./Pages/WomensShoes";
import WomensWatches from "./Pages/WomensWatches";
import DetailsItem from "./Pages/Details/DetailsItem";
import Footer from "./Components/Footer";
import AddToCart from "./Pages/Add to cart/AddToCart";
import axios from "axios";
import SearchProducts from "./Pages/SearchProducts";
import Head from "./Components/Head";
const App = () => {
  const [num, setNum] = useState(0);
  const [aboutAdding, setAboutAdding] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [check, setCheck] = useState(false);
  const [checkSearch, setCheckSearch] = useState("");
  const [Loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(true);
  }, 1300);

  const openDrawer = () => {
    setCheck(true);
    setOpen(true);
  };
  const closeDrawer = () => {
    setCheck(false);
    setOpen(false);
  };

  // console.log(Loading);

  return (
    <div className="bg-white dark:bg-blue-gray-900">
      <div className="">
        <React.Fragment>
          <Drawer
            open={open}
            className="p-4 w-full overflow-auto   dark:bg-blue-gray-900 dark:text-white"
          >
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Side Menu
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </IconButton>
            </div>
            <Typography
              color="gray"
              className="mb-8 pr-4 font-bold  flex flex-col gap-5  "
            >
              <Typography
                as={Link}
                to="/beatuy"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 rounded-xl hover hover:dark:bg-blue-gray-800  hover:bg-gray-300 "
              >
                Beatuy
              </Typography>
              <Typography
                as={Link}
                to="/frag"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Fragrances
              </Typography>
              <Typography
                as={Link}
                to="/furniture"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Furniture
              </Typography>
              <Typography
                as={Link}
                to="/groc"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Groceries
              </Typography>
              <Typography
                as={Link}
                to="/homeDeco"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Home Decoration
              </Typography>
              <Typography
                as={Link}
                to="/kitchen"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Kitchen Accesories
              </Typography>
              <Typography
                as={Link}
                to="/lap"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Laptops
              </Typography>
              <Typography
                as={Link}
                to="shirts"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Mens Shirts
              </Typography>{" "}
              <Typography
                as={Link}
                to="/shoes"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Mens Shoes
              </Typography>{" "}
              <Typography
                as={Link}
                to="/watches"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Mens Watches
              </Typography>{" "}
              <Typography
                as={Link}
                to="/mobile"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Mobile Accessories
              </Typography>{" "}
              <Typography
                as={Link}
                to="/motorcycle"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Motorcycle
              </Typography>{" "}
              <Typography
                as={Link}
                to="/skincare"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Skin Care
              </Typography>{" "}
              <Typography
                as={Link}
                to="/smartphones"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Smartphones
              </Typography>{" "}
              <Typography
                as={Link}
                to="/sports"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Sports Accessories
              </Typography>{" "}
              <Typography
                as={Link}
                to="/sunglasses"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Sunglasses
              </Typography>{" "}
              <Typography
                as={Link}
                to="/tablets"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Tablets
              </Typography>{" "}
              <Typography
                as={Link}
                to="/tops"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Tops
              </Typography>{" "}
              <Typography
                as={Link}
                to="/vehicle"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Vehicle
              </Typography>{" "}
              <Typography
                as={Link}
                to="/womensbags"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Womens Bags
              </Typography>{" "}
              <Typography
                as={Link}
                to="/womensdresses"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Womens Dresses
              </Typography>{" "}
              <Typography
                as={Link}
                to="/womensjewellery"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Womens Jewellery
              </Typography>{" "}
              <Typography
                as={Link}
                to="/womensshoes"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Womens Shoes
              </Typography>{" "}
              <Typography
                as={Link}
                to="/womenswatches"
                variant="small"
                className="p-1 text-black dark:text-white text-[1.1rem] w-full hover:px-5 hover:py-3 hover:rounded-xl hover:dark:bg-blue-gray-800 hover:bg-gray-300"
              >
                Womens Watches
              </Typography>{" "}
            </Typography>
          </Drawer>
        </React.Fragment>
      </div>

      {/* <Header
        openDrawer={openDrawer}
        num={num}
        setNum={setNum}
        setCheckSearch={setCheckSearch}
        checkSearch={checkSearch}
        aboutAdding={aboutAdding}
      /> */}
      <Head
        openDrawer={openDrawer}
        num={num}
        setNum={setNum}
        setCheckSearch={setCheckSearch}
        checkSearch={checkSearch}
        aboutAdding={aboutAdding}
      />

      <div className={` ${check ? "bg-opacity-60 blur-sm " : ""} `}>
        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/beatuy" element={<Beatuy Loading={Loading} />} />
          <Route path="/frag" element={<Fragrances Loading={Loading} />} />
          <Route path="/furniture" element={<Furniture Loading={Loading} />} />
          <Route path="/groc" element={<Groceries Loading={Loading} />} />
          <Route
            path="/homeDeco"
            element={<HomeDecoration Loading={Loading} />}
          />
          <Route
            path="/kitchen"
            element={<KitchenAccesories Loading={Loading} />}
          />
          <Route path="/lap" element={<Laptops Loading={Loading} />} />
          <Route path="/shirts" element={<MensShirts Loading={Loading} />} />
          <Route path="/shoes" element={<MensShoes Loading={Loading} />} />
          <Route path="/watches" element={<MensWatches Loading={Loading} />} />
          <Route
            path="/mobile"
            element={<MobileAccessories Loading={Loading} />}
          />
          <Route
            path="/motorcycle"
            element={<Motorcycle Loading={Loading} />}
          />
          <Route path="/skincare" element={<SkinCare Loading={Loading} />} />
          <Route
            path="/smartphones"
            element={<Smartphones Loading={Loading} />}
          />
          <Route
            path="/sports"
            element={<SportsAccessories Loading={Loading} />}
          />
          <Route
            path="/sunglasses"
            element={<SunGlasses Loading={Loading} />}
          />
          <Route path="/tablets" element={<Tablets Loading={Loading} />} />
          <Route path="/tops" element={<Tops Loading={Loading} />} />
          <Route path="/vehicle" element={<Vehicle Loading={Loading} />} />
          <Route
            path="/womensbags"
            element={<WomensBags Loading={Loading} />}
          />
          <Route
            path="/womensdresses"
            element={<WomensDresses Loading={Loading} />}
          />
          <Route
            path="/womensjewellery"
            element={<WomensJewellery Loading={Loading} />}
          />
          <Route
            path="/womensshoes"
            element={<WomensShoes Loading={Loading} />}
          />
          <Route
            path="/womenswatches"
            element={<WomensWatches Loading={Loading} />}
          />
          <Route
            path="/adding"
            element={
              <AddToCart
                aboutAdding={aboutAdding}
                setAboutAdding={setAboutAdding}
                num={num}
                setNum={setNum}
                Loading={Loading}
                // products={products}
                // setProducts={setProducts}
              />
            }
          />
          <Route
            path="/details/:id"
            element={
              <DetailsItem
                aboutAdding={aboutAdding}
                setAboutAdding={setAboutAdding}
                num={num}
                setNum={setNum}
                Loading={Loading}
              />
            }
          />
          <Route
            path="/search"
            element={
              <SearchProducts checkSearch={checkSearch} Loading={Loading} />
            }
          />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
