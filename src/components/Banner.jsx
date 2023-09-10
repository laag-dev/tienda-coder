import React, { useState } from 'react'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import banner0 from "@/images/banner0.png"
import banner1 from "@/images/banner1.png"
import banner2 from "@/images/banner2.png"
export const Banner = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [banner0, banner1, banner2];

    const prevSlide = () => {

        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1 )
    };

    const nextSlide = () => {

        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1 )
    };

  return (
    <div className='w-full h-auto overflow-x-hidden flex-row '>


        <div className='container w-screen h-[850px] relative'>
            <div style={{transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[200vw] h-full flex transition-transform duration-1000'>
                <img className='w-screen h-full object-cover' src={data[0]} alt="ImgOne" loading='priority' />
                <img className='w-screen h-full object-cover' src={data[1]} alt="ImgTwo"  />
                <img className='w-screen h-full object-cover' src={data[2]} alt="ImgThree" />
            </div>
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div onClick={prevSlide} className='w-14 h-12 border-[2px] border-[#af8970] flex items-center justify-center hover:cursor-pointer hover:bg-[#af8970] hover:text-white active:bg-black duration-300'>
                <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[2px] border-[#af8970] flex items-center justify-center hover:cursor-pointer hover:bg-[#af8970] hover:text-white active:bg-black duration-300'>
                <HiArrowRight/>
            </div>
        </div>
    </div>
  )
}
