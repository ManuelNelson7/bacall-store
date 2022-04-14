import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='bg-primary h-90 flex justify-center'>
            <div className='w-container max-w-7xl px-4 sm:px-8 h-90 flex items-center'>
                <div className='w-4/12 flex flex-col gap-5'>
                    <span className='uppercase font-poppins text-gold text-sm md:text-md font-semibold'>New Arrival</span>
                    <h1 className='font-lora font-medium lg:text-6xl text-5xl'>Basic Colours <br /> Comeback</h1>
                    <p className='font-poppins w-11/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <div className='flex gap-4'>
                        <Link to="/categories"
                            className='uppercase bg-gold outline outline-2 outline-gold text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-150 hover:bg-brown hover:text-white hover:outline-brown'
                        >
                            Shop Now
                        </Link>

                        <button
                            className='uppercase outline outline-2 outline-gold text-gold font-semibold px-4 py-2.5 rounded-md transition-all duration-150 hover:bg-brown hover:text-white hover:outline-brown'
                        >
                            New Collection
                        </button>
                    </div>
                </div>

                <div className='w-8/12 flex h-90 items-end justify-end'>
                    <img className='lg:h-img h-imgmd'
                        src="/img/hero-illustration.png"
                        alt="Basic colours" />
                </div>
            </div>
        </div>
    )
}

export default Hero