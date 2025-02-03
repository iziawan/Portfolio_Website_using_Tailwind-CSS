import React from 'react';
import picture from '../../../public/image.png.jpg';
import Image from 'next/image';
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function About() {
  return (
    <main className='relative bg-pink-100 min-h-screen flex flex-col items-center p-6'>
      {/* Title */}
      <h2 className='font-serif text-center my-6 py-6 text-5xl md:text-7xl'>About Me</h2>

      {/* Image and Info Container */}
      <div className='flex flex-col md:flex-row items-center md:justify-around w-full'>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
          <Image
            src={picture}
            alt="Profile picture of Shifa"
            className="w-72 h-auto md:w-[450px] lg:w-[500px] rounded-2xl"
            priority
          />
        </div>

        {/* Description */}
        <div className="md:w-1/2 text-justify text-base leading-relaxed font-serif px-4 md:px-0">
          <p className="mb-4">
            I m Shifa M. Akram  a passionate web developer dedicated to turning ideas into seamless digital experiences. I specialize in modern  responsive designs and scalable solutions.
          </p>
          <div className="text-lg font-serif space-y-2">
            <p><strong>Name:</strong> Shifa</p>
            <p><strong>Date of Birth:</strong> February 12, 2005</p>
            <p><strong>Address:</strong> Karachi, Pakistan</p>
            <p><strong>Phone:</strong> 1234-9876</p>
            <p><strong>Email:</strong> <a href="mailto:hongking@gmail.com" className="text-blue-600 underline">hongking@gmail.com</a></p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col md:flex-row md:space-x-4">
        <button className="bg-pink-300 hover:bg-white border border-gray-800 text-black font-semibold rounded-lg px-6 py-3 mb-4 md:mb-0">
          Contact Me
        </button>
        <div className="flex space-x-4">
          <FaFacebook size={30} color="#4267B2" className="cursor-pointer hover:scale-110 transition-transform" />
          <FaInstagram size={30} color="#C13584" className="cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>
    </main>
  );
}
