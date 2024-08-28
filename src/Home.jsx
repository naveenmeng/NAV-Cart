import { useEffect, useState } from "react";
// import Data from "./Data";
import ProductCard from "./ProductCard";
import ShimmerUI from "./ShimmerUI";
import { useContext } from "react";
import {Theme} from "./utility/ThemeContext"

let Home = () => {
  // let [allproductData, setallproductData] = useState([...Data]);
  // let [productData, setproductData] = useState([...Data]);
  let [allproductData, setallproductData] = useState([]);
  let [productData, setproductData] = useState([]);
  let [searchQuery , setsearchQuery] = useState("");
  let getData = async()=>{
    let data = await fetch('https://dummyjson.com/products');
    let obj = await data.json();
    setallproductData(obj.products)
    setproductData(obj.products)
  }

  useEffect(()=>{
    getData();
    console.log("use effect []");
  },[])

  if (allproductData.length == 0){
    return <ShimmerUI></ShimmerUI>
  }
  let handleRating = () => {
    let filteredArray = allproductData.filter((obj) => {
      return obj.rating > 4.2;
    });
    setproductData(filteredArray);
  };
  let handleCategory = (category) => {
    let filteredArray = allproductData.filter((obj) => {
      return obj.category == category;
    });
    setproductData(filteredArray);
  };
  let handleQuery = ()=>{
    let filteredArray = allproductData.filter((obj) => {
        return obj.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
      });
      setproductData(filteredArray);
      setsearchQuery("");
  }
  //theme
  let {theme} = useContext(Theme);
  let lightTheme = "min-h-[91vh] w-screen flex flex-col bg-black";
  let darkTheme = "min-h-[91vh] w-screen flex flex-col bg-white";
  return (
    <>
      <div className={theme == "light" ? lightTheme : darkTheme}>
        <div className="utility flex justify-around w-100 pt-3">
          <button className="btn btn-primary" onClick={handleRating}>
            Top Rating
          </button>
          <button className="btn btn-primary" onClick={() => handleCategory("furniture")}>Furniture</button>
          <div className="searchBar flex gap-2">
            {/* <input type="text" className="h-11 p-2 rounded-2xl mr-2 border-current" /> */}
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" value={searchQuery} onChange={(event)=>{setsearchQuery(event.target.value)}}/>
            </label>
            <button className="btn btn-success" onClick={handleQuery}>Search</button>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => handleCategory("beauty")}
          >
            Beauty
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleCategory("groceries")}
          >
            Grocery
          </button>
        </div>
        <div className="flex flex-wrap justify-around">
          {productData.map((obj) => {
            return <ProductCard obj={obj} key={obj.id}></ProductCard>;
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
