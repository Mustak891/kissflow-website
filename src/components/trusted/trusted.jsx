import React from 'react';
import vision from "../../assets/vision.png";
import michelin from "../../assets/Michelin.png";
import comcast from "../../assets/Comcast.png";
import reckitt from "../../assets/Reckitt.png";
import motorola from "../../assets/motorola.png";
import pepsi from "../../assets/pepsi.png";

const Trusted = () => {
  return (
    <section className="container py-10 px-2">
        <div className='flex items-center justify-center flex-col py-6 text-xl'>
            <h2 className='flex items-center justify-center text-sm md:text-xl'>Trusted by leading brands around the world</h2>
            <div className='flex flex-wrap gap-6 items-center justify-center'>
                <img className='object-contain h-10 w-10 md:h-32 md:w-32' src={vision} alt="vision" />
                <img className='object-contain h-10 w-10 md:h-32 md:w-32' src={michelin} alt="michelin" />
                <img className='object-contain h-10 w-10 md:h-20 md:w-20' src={comcast} alt="comcast" />
                <img className='object-contain h-10 w-10 md:h-20 md:w-20' src={reckitt} alt="reckitt" />
                <img className='object-contain h-10 w-10 md:h-20 md:w-20' src={motorola} alt="motorola" />
                <img className='object-contain h-10 w-10 md:h-20 md:w-20' src={pepsi} alt="pepsi" />
            </div>
        </div>
    </section>
  )
}

export default Trusted;