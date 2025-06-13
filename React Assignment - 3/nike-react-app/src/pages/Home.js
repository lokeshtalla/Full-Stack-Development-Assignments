import React from 'react';
import shoeImage from '../assets/home.jpg';

const Home = () => (
  <div className="flex flex-1">
    {/* Left Section */}
    <div className="flex-1 p-10 flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-4">Your Feet Deserve The Best</h1>
      <p className="text-lg">Discover top quality Nike shoes here.</p>
    </div>

    {/* Right Section with Centered Image */}
    <div className="w-[50vw] h-full flex items-center justify-center p-8">
      <img
        src={shoeImage}
        alt="Nike Shoe"
        className="max-h-full max-w-full object-contain rounded-xl shadow-xl"
      />
    </div>
  </div>
);

export default Home;
