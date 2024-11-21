import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[100vh] bg-[url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Tasty Bites</h1>
          <p className="text-xl mb-8">Experience the finest culinary delights</p>
          <a href="#menu" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
            View Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;