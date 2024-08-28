import React from "react";
import { useParams } from "react-router-dom";
import useCallSingleProductApi from "./utility/useCallSingleProductApi";
import { useContext } from "react";
import {Theme} from "./utility/ThemeContext"
import Reviews from "./reviews/Reviews"

const Product = () => {
  
  let { id } = useParams();
  let obj = useCallSingleProductApi(id)
  if (obj == null)
    return (
      <>
        <div class="skeleton h-[22rem] w-1/2 mx-auto pt-30 "></div>
      </>
    );
  let { thumbnail, title, category, price, rating, stock ,reviews} = obj;
  // console.log(params)
  //theme
  let {theme} = useContext(Theme);
  let lightTheme = "card lg:card-side bg-zinc-600 shadow-xl w-1/2 mx-auto pt-10 mt-12";
  let darkTheme = "card lg:card-side bg-base-100 shadow-xl w-1/2 mx-auto pt-10 mt-12";

  return (
    <div className="min-h-[91vh] bg-base-300">
      <div className={theme=="dark" ? darkTheme : lightTheme}>
        <figure className="">
          <img src={thumbnail} alt="thumbnail" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <button className="btn m-4">
            category
            <div className="badge badge-secondary">{category}</div>
          </button>
          <button className="btn m-4">
            rating
            <div className="badge badge-secondary">{rating}</div>
          </button>
          <button className="btn m-4">
            Stock
            <div className="badge badge-secondary">{stock}</div>
          </button>
          <button className="btn m-4">
            price
            <div className="badge badge-secondary">{price}</div>
          </button>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
      <Reviews reviews={reviews}></Reviews>
    </div>
  );
};
export default Product;
