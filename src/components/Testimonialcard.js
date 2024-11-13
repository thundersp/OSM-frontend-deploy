"use client";
import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import '../app/globals.css';
const TestimonialCard = (props) => {
  const { review } = props;

  return (
    <div className='flex flex-col md:relative'>
      <div className='md:absolute relative md:top-[-7rem] z-[10] mx-auto'>
        <img 
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
          src={review.image}
          alt={review.name}
        />
        <div className='w-[140px] h-[140px] bg-[#FF7D3D] rounded-full absolute top-[-6px] z-[-10] left-[10px]'></div>
      </div>

      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        <p className='text-[#FF7D3D] uppercase text-sm'>{review.job}</p>
      </div>

      <div className='text-[#FF7D3D] mx-auto mt-5'>
        <FaQuoteLeft />
      </div>

      <div className='text-center mt-4 text-slate-500'>
        {review.text}
      </div>

      <div className='text-[#FF7D3D] mx-auto mt-5'>
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default TestimonialCard;
