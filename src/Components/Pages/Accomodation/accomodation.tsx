import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Accomodation({}: Props) {
  return (
    <section className=''>
        <div className='flex flex-col'>
          {/* <h1 className='text-4xl text-center'>
            ACCOMMODATION
          </h1> */}
          <ul className='items-center justify-center'>
            <li className='bg-gray-800 text-white'>
              <div className='flex flex-row items-center justify-center w-full hover:p-8 transition-all duration-[1.5s]'> 
                <Image
                  src='/assets/hotelsImg/in2.png'
                  alt=''
                  width={3840}
                  height={2160}
                  className='w-2/5 hover:scale-95 transition-all duration-[1.5s] mobile:px-[1vw] md:p-0'
                />
                <div className='flex flex-col w-full text-center gap-y-[1vh] mobile:py-[3vh] md:p-0'>
                  <h1 className='mobile:text-xl md:text-4xl'>
                    STANDARD ROOM
                  </h1>
                  <p className='px-[5vw] mb-[2vh] mobile:text-sm md:text-lg lg:text-xl'>
                    Experience comfort and convenience in our Standard rooms, designed for a relaxing stay. These rooms offer modern amenities and a cozy ambiance, providing everything you need for a pleasant retreat.
                  </p>
                  <div className='flex mobile:flex-col md:flex-row gap-y-[1vh] gap-x-[2vw] items-center  mobile:center md:justify-between px-[5vw]'>
                    <Link
                      href='/accomodation/standard'
                      className='w-full bg-white bg-opacity-0 hover:bg-opacity-10 text-white hover:text-gray-100 border border-white rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      EXPLORE
                    </Link>
                    <Link
                      href='/booking/standard'
                      className='w-full bg-gray-800 bg-opacity-0 hover:bg-white text-white hover:text-gray-800 border border-white  rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      BOOKING
                    </Link>                
                  </div>
                </div>                
              </div>
            </li>

           <li className='bg-gray-50'>
              <div className='flex flex-row items-center justify-center w-full hover:p-10 transition-all duration-[1.5s]'> 
                <div className='flex flex-col w-full text-center gap-y-[1vh] mobile:py-[3vh] md:p-0'>
                  <h1 className='mobile:text-xl md:text-4xl'>
                    SUPERIOR ROOM
                  </h1>
                  <p className='px-[5vw] mb-[2vh] mobile:text-sm md:text-lg lg:text-xl'>
                    Indulge in upgraded comfort with our Superior rooms, featuring enhanced amenities and stylish decor. Enjoy ample space and contemporary design elements, ensuring a luxurious stay experience.                  </p>
                  <div className='flex mobile:flex-col md:flex-row gap-y-[1vh] gap-x-[2vw] items-center  mobile:center md:justify-between px-[5vw]'>
                    <Link
                      href='/accomodation/standard'
                      className='w-full bg-white hover:bg-coldGold hover:text-white border border-coldGold text-coldGold rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      EXPLORE
                    </Link>
                    <Link
                      href='/booking/standard'
                      className='w-full bg-coldGold bg-opacity-70 hover:bg-opacity-100 border border-white text-white rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      BOOKING
                    </Link>                
                  </div>
                </div>                 
                <Image
                  src='/assets/hotelsImg/in10.png'
                  alt=''
                  width={3840}
                  height={2160}
                  className='w-2/5 hover:scale-95 transition-all duration-[1.5s] mobile:px-[1vw] md:p-0'
                />
              </div>
            </li>
            <li className='bg-gray-800 text-white'>
            <div className='flex flex-row items-center justify-center w-full hover:p-10 transition-all duration-[1.5s]'> 
                <Image
                  src='/assets/hotelsImg/in7.png'
                  alt=''
                  width={3840}
                  height={2160}
                  className='w-2/5 hover:scale-95 transition-all duration-[1.5s] mobile:px-[1vw] md:p-0'
                />
                <div className='flex flex-col w-full text-center gap-y-[1vh] mobile:py-[3vh] md:p-0'>
                  <h1 className='mobile:text-xl md:text-4xl'>
                    DELUXE ROOM
                  </h1>
                  <p className='px-[5vw] mb-[2vh] mobile:text-sm md:text-lg lg:text-xl'>
                    Step into luxury with our Deluxe rooms, boasting modern and sophisticated design. These spacious rooms offer panoramic city views of downtown Bangkok, along with a host of deluxe amenities for an unforgettable stay.                  </p>
                  <div className='flex mobile:flex-col md:flex-row gap-y-[1vh] gap-x-[2vw] items-center  mobile:center md:justify-between px-[5vw]'>
                    <Link
                      href='/accomodation/standard'
                      className='w-full bg-white bg-opacity-0 hover:bg-opacity-10 text-white hover:text-gray-100 border border-white rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      EXPLORE
                    </Link>
                    <Link
                      href='/booking/standard'
                      className='w-full bg-gray-800 bg-opacity-0 hover:bg-white text-white hover:text-gray-800 border border-white  rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      BOOKING
                    </Link>                
                  </div>
                </div>                
              </div>
            </li>
            <li className='bg-gray-50'>
            <div className='flex flex-row items-center justify-center w-full hover:p-10 transition-all duration-[1.5s]'> 
                <div className='flex flex-col w-full text-center gap-y-[1vh] mobile:py-[3vh] md:p-0'>
                  <h1 className='mobile:text-xl md:text-4xl'>
                  THREE BED ROOM
                  </h1>
                  <p className='px-[5vw] mb-[2vh] mobile:text-sm md:text-lg lg:text-xl'>
                    Ideal for families or groups, our Three-Bed rooms provide ample space and comfort for multiple guests. Featuring contemporary furnishings and convenient amenities, these rooms ensure a relaxing and enjoyable stay for all occupants.                  </p>
                  <div className='flex mobile:flex-col md:flex-row gap-y-[1vh] gap-x-[2vw] items-center  mobile:center md:justify-between px-[5vw]'>
                    <Link
                      href='/accomodation/standard'
                      className='w-full bg-white hover:bg-coldGold hover:text-white border border-coldGold text-coldGold rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      EXPLORE
                    </Link>
                    <Link
                      href='/booking/standard'
                      className='w-full bg-coldGold bg-opacity-70 hover:bg-opacity-100 border border-white text-white rounded mobile:px-[5vw] md:px-[3vw] py-[1vh] mobile:text-sm md:text-lg lg:text-xl transition-colors duration-700'  
                    >
                      BOOKING
                    </Link>                
                  </div>
                </div>              
                <Image
                  src='/assets/hotelsImg/in3.png'
                  alt=''
                  width={3840}
                  height={2160}
                  className='w-2/5 hover:scale-95 transition-all duration-[1.5s] mobile:px-[1vw] md:p-0'
                />
              </div>
            </li>           
          </ul>

        </div>
    </section>
  )
}