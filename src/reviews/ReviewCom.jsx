import React, { useState } from "react";

const ReviewCom = ({obj,idx,showIdx,setShowIdx}) => {
  let { reviewerName, comment, rating } = obj;
  let [show ,setShow] = useState(false);
  return (
    <div className="bg-black">
      <div className="box1 h-20  bg-gray-300 mx-auto rounded-3xl flex justify-between items-center px-20 text-2xl border-b-2 border-black">
        <p>{reviewerName}</p>
        <p onClick= {()=>setShow(!show)}>➣</p>
      </div>
      {
        show == true ? <div className="box2 h-16 bg-gray-300 mx-auto rounded-3xl flex justify-between items-center px-20 text-2xl border-b-2 border-black">
        <p>{comment}</p>
        <p>{rating}</p>
      </div> : <></>
      }
      
    </div>
  );
};

export default ReviewCom;
