import React from 'react';
import image from '../assets/browser-extension.png';
import image2 from '../assets/merchantlogo_assets_@2x.png';
import how1 from '../assets/howitworks--get-paid.png';
import how2 from '../assets/howitworks---shop.png';
import how3 from '../assets/howitworks--join.png';

const Section = () => {
  return (
    <>
      {/* Top Section */}
      <div class="flex flex-col items-center p-4 text-center">
  <img class="w-24 mb-2 md:w-32 lg:w-36" src="https://static.rakuten.com/img/media/dls/override/1678318728528/browser-extension.png" alt="Find coupons and Cash Back in just 1 click with our extension." />
  <p class="text-base md:text-lg lg:text-xl">Find coupons and Cash Back in just 1 click with our extension.</p>
  <a href="/button-landing/redirect?utm=onboarding_button_page" target="_blank">
    <button class="px-4 py-2 mt-3 text-white transition duration-200 rounded-full bg-violet-600 font-roboto hover:bg-violet-700">
      Add To Chrome
    </button>
  </a>
</div>


      {/* Main Section */}
      <div className='grid h-screen grid-cols-1 md:grid-cols-2'>
        <div className='flex items-center justify-center'>
          <img className='h-auto max-w-full' src={image2} alt="" />
        </div>

        <div className='flex flex-col justify-center p-6 mt-10 md:mt-0'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl'>Get paid for shopping at all <br /> your favorite stores</h1>
          <p className='mt-4 text-base md:text-lg'>
            Sound too good to be true? Here’s the deal: <br />
            Stores pay us a commission for sending you their way. <br />
            We share that with you as Cash Back. Everyone wins!
          </p>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="flex flex-col items-center justify-center p-6 bg-violet-100">
        <h1 className="text-3xl font-bold leading-relaxed text-center">How It Works</h1>

        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <h2 className='text-2xl font-roboto'>Join</h2>
            <p>Sign up for a free account in less than 30 seconds.</p>
            <img className='w-20 mt-2' src={how3} alt="" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className='text-2xl font-roboto'>Shop</h2>
            <p>Start shopping on rakuten.com, the Rakuten App, or our extension.</p>
            <img className='w-20 mt-2' src={how2} alt="" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className='text-2xl font-roboto'>Get Paid</h2>
            <p>Watch your Cash Back balance grow, then get paid via check or PayPal.</p>
            <img className='w-20 mt-2' src={how1} alt="" />
          </div>
        </div>

        <div className='flex justify-center mt-6'>
          <button className='px-10 py-4 font-bold text-purple-600 bg-white rounded-full shadow-2xl'>Add To Chrome</button>
        </div>
      </div>
    </>
  );
}

export default Section;