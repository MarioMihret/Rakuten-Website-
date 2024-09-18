import React from 'react';

const Members = () => {
  const stores = [
    { name: 'Walmart', url: 'https://www.walmart.com' },
    { name: 'QVC', url: 'https://www.qvc.com' },
    { name: 'Saks Fifth Avenue', url: 'https://www.saksfifthavenue.com' },
    { name: 'Sephora', url: 'https://www.sephora.com' },
    { name: 'Expedia', url: 'https://www.expedia.com' },
    { name: 'Neiman Marcus', url: 'https://www.neimanmarcus.com' },
    { name: 'Dell Technologies', url: 'https://www.dell.com' },
    { name: 'Bloomingdale\'s', url: 'https://www.bloomingdales.com' },
    { name: 'Hotels.com', url: 'https://www.hotels.com' },
    { name: 'Ulta Beauty', url: 'https://www.ultabeauty.com' },
    { name: 'Staples', url: 'https://www.staples.com' },
    { name: 'Dick\'s Sporting Goods', url: 'https://www.dickssportinggoods.com' },
    { name: 'Lenovo', url: 'https://www.lenovo.com' },
    { name: 'Nordstrom Rack', url: 'https://www.nordstromrack.com' },
    { name: 'Quill', url: 'https://www.quill.com' },
    { name: 'Saks OFF 5TH', url: 'https://www.saksoff5th.com' },
    { name: 'PetSmart', url: 'https://www.petsmart.com' },
    { name: 'Under Armour', url: 'https://www.underarmour.com' },
    { name: 'Travelocity', url: 'https://www.travelocity.com' },
    { name: 'Nike', url: 'https://www.nike.com' },
    { name: 'Aeropostale', url: 'https://www.aeropostale.com' },
    { name: 'Sam\'s Club', url: 'https://www.samsclub.com' },
    { name: 'Hobby Lobby', url: 'https://www.hobbylobby.com' },
    { name: 'SHEIN', url: 'https://www.shein.com' },
    { name: 'TEMU', url: 'https://www.temu.com' },
    { name: 'Valvoline', url: 'https://www.valvoline.com' },
    { name: 'adidas', url: 'https://www.adidas.com' },
    { name: 'Live Nation', url: 'https://www.livenation.com' },
    { name: 'Chewy', url: 'https://www.chewy.com' },
    { name: 'Zappos', url: 'https://www.zappos.com' },
    { name: 'Samsung', url: 'https://www.samsung.com' },
    { name: 'H&M', url: 'https://www.hm.com' },
    { name: 'Ticketmaster', url: 'https://www.ticketmaster.com' },
    { name: 'Instacart', url: 'https://www.instacart.com' },
    { name: 'Crocs', url: 'https://www.crocs.com' },
    { name: 'Dermstore', url: 'https://www.dermstore.com' },
    { name: 'Walgreens', url: 'https://www.walgreens.com' },
    { name: 'Apple.com', url: 'https://www.apple.com' },
    { name: 'Kroger', url: 'https://www.kroger.com' },
    { name: 'Ace Hardware', url: 'https://www.acehardware.com' },
    { name: 'New Balance', url: 'https://www.newbalance.com' },
    { name: 'GameStop', url: 'https://www.gamestop.com' },
    { name: 'Office Depot and OfficeMax', url: 'https://www.officedepot.com' },
    { name: 'Cabela\'s', url: 'https://www.cabelas.com' },
    { name: 'Converse', url: 'https://www.converse.com' },
    { name: 'AliExpress', url: 'https://www.aliexpress.com' },
    { name: 'Urban Outfitters', url: 'https://www.urbanoutfitters.com' },
    { name: 'Banana Republic', url: 'https://www.bananarepublic.gap.com' },
    { name: 'LEGO', url: 'https://www.lego.com' },
    { name: 'Shutterfly', url: 'https://www.shutterfly.com' },
    { name: 'Bed Bath and Beyond', url: 'https://www.bedbathandbeyond.com' },
    { name: 'Belk', url: 'https://www.belk.com' },
    { name: 'BIRKENSTOCK', url: 'https://www.birkenstock.com' },
    { name: 'Kay Jewelers', url: 'https://www.kay.com' },
    { name: 'Carter\'s', url: 'https://www.carters.com' },
    { name: 'Warriors Shop', url: 'https://www.warriors.com/shop' },
  ];

    return ( <>
      <div ><h1 className='justify-center text-3xl font-bold text-center font-roboto'>Stores our members love</h1></div>
      <div className="grid grid-cols-2 gap-4 p-4 m-5 font-bold md:grid-cols-4 text-violet-600">
          
      {stores.map((store, index) => (
        <a
          key={index}
          href={store.url}
          className="text-violet-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {store.name}
        </a>
      ))}
        </div>
        </>
  );
};

export default Members;