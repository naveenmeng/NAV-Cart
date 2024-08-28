import React, { useState } from 'react';
import ReviewCom from './ReviewCom';

const Reviews = ({reviews}) => {
  let [showIdx, setShowIdx] = useState(null)
  return (
    <div>
      <div className='w-1/3 h-1/3 bg-white mx-auto mt-24  rounded-3xl'>
      {
        reviews.map((obj,idx)=> (<ReviewCom obj = {obj} idx={idx} showIdx={showIdx} setShowIdx={setShowIdx}></ReviewCom>))
      }
      </div>
    </div>
  )
}

export default Reviews
