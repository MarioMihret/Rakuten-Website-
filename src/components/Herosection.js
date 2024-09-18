import React from 'react';
import image1 from '../assets/sign_up.png';

const HeroSection = () => {
  return (
    <section className="grid h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Column: Heading */}
      <div className="flex flex-col justify-center p-10" style={{ backgroundColor: '#E4E0FC' }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl">Get Cash Back at Thousands of Stores</h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl">
          Rakuten saves you money while you shop the brands you love. <br />
          Join today and find out why Rakuten shoppers get it.
        </p>
        <div className='mt-8'>
          <button className="px-6 py-3 text-sm font-bold bg-white rounded-full shadow-lg text-violet-600 md:px-10 md:py-5">
            Join Now
          </button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="h-full bg-center bg-cover" style={{ backgroundImage: `url(${image1})` }}>
      </div>
    </section>
  );
}

export default HeroSection;