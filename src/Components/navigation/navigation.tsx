import React from 'react'
import Link from 'next/link'
import { IoMenuOutline } from "react-icons/io5";
import { RiHotelLine } from "react-icons/ri";
import { LuHotel } from "react-icons/lu";

type Props = {}

export default function Navigation({}: Props) {
    return (
        <section className='w-full sticky top-0 z-10'>
            <div className='flex flex-row w-full items-center justify-between px-0 text-gray-800 font-medium bg-white mobile:justify-between md:text-lg lg:text-xl '>
                <ul className='flex flex-row gap-x-[2vw] lg:gap-x-[3vw] items-center mobile:w-full h-full'>
                    <div className='mobile:flex md:hidden flex-row items-center w-full justify-between'>
                        {/* responsive handle < md */}
                        <li className='justify-center items-center hover:bg-gray-100 h-full py-[2vh] px-[2vw] cursor-pointer transition-opacity duration-500'>
                            <IoMenuOutline className='text-2xl' />
                        </li>
                        <Link
                                className='justify-center items-center bg-coldGold opacity-80 hover:opacity-100 h-full py-[2vh] px-[2vw] transition-opacity duration-500'
                                href='/booking'
                        >
                                <h1 className='text-white lg:text-xl md:text-base'>BOOK NOW</h1>
                        </Link>
                    </div>
                    <div className='mobile:hidden md:flex flex-row items-center  w-full transition-all h-full'>
                        <Link
                            href='/'
                            className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='lg:text-xl md:text-base'>HOME</h1>
                        </Link>
                        <Link
                            href='/accomodation'
                            className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='lg:text-xl md:text-base'>ROOM</h1>
                        </Link>
                        <Link
                            href='/facility'
                            className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='lg:text-xl md:text-base'>FACILITIES</h1>
                        </Link>
                        <Link
                            href='/location'
                            className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='lg:text-xl md:text-base'>LOCATIONS</h1>
                        </Link>
                        <Link
                            href='/contact'
                            className='flex w-full justify-center items-center hover:bg-gray-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='lg:text-xl md:text-base'>CONTACT</h1>
                        </Link>
                        <Link
                            href='/booking'
                            className='flex w-full justify-center items-center bg-coldGold opacity-80 hover:opacity-100 h-full py-[2.5vh] px-[2vw] cursor-pointer transition-opacity duration-500'
                        >
                            <h1 className='text-white lg:text-xl md:text-base'>BOOK NOW</h1>
                        </Link>
                    </div>
                </ul>
            </div>
        </section>
    )
}