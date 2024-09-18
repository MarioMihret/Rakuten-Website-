import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faPinterest,
  faInstagram,
  faTelegram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const sections = [
    {
      title: 'DOWNLOAD OUR APP',
      items: [
        'Rakuten Mobile Apps',
        'Available for iOS and Android',
      ],
    },
    {
      title: 'PARTNER SITES',
      items: ['Canada', 'Japan', 'Cartera', 'ShopStyle', 'Rakuten France'],
    },
    {
      title: 'ABOUT',
      items: [
        'Getting Started',
        'About Us',
        'Our New Name',
        'Advertising & Partnerships',
        'Influencers & Partners',
        'Press Room',
        'Careers',
        'Blog',
        'Site Map',
        'Terms & Conditions',
        'Privacy Policy',
        'Do Not Sell or Share My Personal Information / Personal Data Opt-out',
        'Help',
      ],
    },
    {
      title: 'STORES & BRANDS',
      items: [
        'Best Buy',
        'Kohl\'s',
        'Lowe\'s',
        'Macy\'s',
        'Nordstrom',
        'Old Navy',
        'Priceline',
        'Target',
        'See All Brands',
        'See All Stores',
      ],
    },
    {
      title: 'SEASONAL PAGES',
      items: [
        'Black Friday',
        'Cyber Monday',
        'Green Monday',
        'Holiday Gifts',
        'Presidents Day Sales',
      ],
    },
    {
      title: 'POPULAR CATEGORIES',
      items: [
        'Baby & Toddler',
        'Clothing',
        'Accessories',
        'Electronics',
        'Travel & Vacations',
        'Health & Beauty',
        'Shoes',
        'Home & Garden',
        'Food, Drinks & Restaurant',
      ],
    },
    {
      title: 'TOOLS & SERVICES',
      items: [
        'In-Store Cash Back',
        'Rakuten Browser Extension',
        'Available for Google Chrome',
      ],
    },
  ];

  return (
    <footer className="p-6 text-white bg-gray-800">
      <div className="container grid grid-cols-2 gap-6 mx-auto sm:grid-cols-3 lg:grid-cols-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="mb-2 text-sm font-bold">{section.title}</h3>
            <ul className="space-y-1 list-none">
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-300 hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <hr className="my-6 border-gray-600" />
      <div className="flex justify-end mb-4 space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-white" size="lg" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="text-gray-300 hover:text-white" size="lg" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faPinterest} className="text-gray-300 hover:text-white" size="lg" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-white" size="lg" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTelegram} className="text-gray-300 hover:text-white" size="lg" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} className="text-gray-300 hover:text-white" size="lg" />
        </a>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-400">© 2024 Rakuten, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;