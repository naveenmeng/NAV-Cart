import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {Theme} from "./utility/ThemeContext"
let ProductCard = (props) => {
  let { obj } = props;
  let { thumbnail, title, rating, price, category ,id} = obj;
  let Navigate = useNavigate()
  let handleClick = ()=>{
    Navigate(`/product/${id}`);
  };
  let Addbtn = ()=>{
    console.log("btn is clicked")
  }
  //theme
  let {theme} = useContext(Theme);
  let lightTheme = "card bg-zinc-700 w-96 shadow-xl m-3 text-white";
  let darkTheme = "card bg-base-100 w-96 shadow-xl m-3";
  return (
    <>
      <div className={theme=="dark" ? darkTheme : lightTheme} onClick={handleClick}>
        <figure>
          <img
            className="bg-zinc-400 h-[95%] rounded-2xl"
            src={thumbnail}
            alt="thumbnail"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-outline bg-green-400 border-green-400 p-3">
              {category}
            </div>
            {/* <div className="badge badge-outline p-2 bg-green-400">{brand}</div> */}
            <div className="badge badge-outline bg-green-400 border-green-400 p-3">
              {rating}
            </div>
            <div>${price}</div>
            <button className="bg-black text-white rounded-2xl p-4" onClick={Addbtn}>Add</button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ProductCard;
