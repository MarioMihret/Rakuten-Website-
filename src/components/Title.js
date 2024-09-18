import React from 'react';
import asset1 from '../assets/asset2-1600x800.png';
import asset2 from '../assets/asset3-1600x800 (1).png';
import asset3 from '../assets/asset4-1600x800.png';

const Title = () => {
  return (
    <div className="px-4 py-12 mx-auto space-y-16 max-w-7xl">
      <div className="flex flex-col items-center justify-between p-8 bg-white rounded-lg shadow-lg md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900">We’ve paid members over $3.2 <br /> billion in Cash Back</h1>
          <p className="text-lg text-gray-700">There’s a reason we’re the #1 Cash Back shopping <br /> companion. Don’t believe us? Just ask our <br /> community of 15+ million members.</p>
        </div>
        <div className="md:w-1/2">
          <img src={asset1} alt="Cash Back" className="w-full rounded-lg shadow-md" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between p-6 bg-white rounded-lg shadow-lg md:flex-row">
        
      <div className="md:w-1/2">
          <img src={asset2} alt="More Cash Back" className="w-full rounded-lg shadow-md" />
        </div>
              
              <div className="md:w-1/2">
          <h1 className="m-6 mb-4 text-3xl font-extrabold text-gray-900">More for you, all with Cash Back</h1>
          <p className="m-6 mb-4 text-lg text-gray-700 ">Earn on everything from clothes and electronics <br /> to restaurants and ride-sharing. We’ll find you <br /> deals on more brands, apps, and services.</p>
        </div>
        
      </div>

      <div className="flex flex-col items-center justify-between p-8 bg-white rounded-lg shadow-lg md:flex-row">
        <div className="md:w-1/2">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900">Shop whenever you want, <br /> however you want</h1>
          <p className="text-lg text-gray-700">Shopping smarter doesn’t have to be harder. Start <br /> with Rakuten via desktop, the App, or our <br /> extension and let us do the deal-finding for you.</p>
        </div>
        <div className="md:w-1/2">
          <img src={asset3} alt="Shop Anytime" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default Title;