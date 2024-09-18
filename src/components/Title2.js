import React from "react";
import fact1 from "../assets/fact_1.png";
import fact2 from "../assets/fact_2.png";
import fact3 from "../assets/fact_3.png";
import fact4 from "../assets/fact_4.png";

const Title2 = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-violet-100">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl font-bold">
            It pays to shop with Rakuten
          </h1>
          <p className="text-lg">
            Numbers don’t lie. Shopping with Rakuten adds up big time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center">
            <img
              src={fact1}
              alt="20M people earning Cash Back"
              className="mb-2 w-28"
            />
            <h1 className="text-xl font-bold">20M</h1>
            <p className="text-lg text-center font-roboto">
              People earning Cash Back <br /> with Rakuten
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={fact2} alt="$3.2B total paid" className="mb-2 w-28" />
            <h1 className="text-xl font-bold">$3.2B</h1>
            <p className="text-lg text-center font-roboto">
              Total paid to members <br /> since 1999
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={fact3} alt="30,000+ reviews" className="mb-2 w-28" />
            <h1 className="text-xl font-bold">30,000+</h1>
            <p className="text-lg text-center">
              5-star reviews on <br /> Trustpilot
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={fact4}
              alt="$90.16 average Cash Back"
              className="mb-2 w-28"
            />
            <h1 className="text-xl font-bold">$90.16</h1>
            <p className="text-lg text-center">
              Average Cash Back per <br /> member in 2023
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center gap-4 m-20 text-center">
        <h1 className="text-3xl font-bold font-roboto ">
          Join now for an extra 10% Cash Back on purchases made in your first 7
          days.*
        </h1>
        <button className="px-10 py-4 mt-10 font-bold text-white rounded-full shadow-lg bg-violet-600">
          {" "}
          Join Now{" "}
        </button>
        <br />
        <br /> <br />
        <div>
          <p className="text-purple-500">
            <a href="#">*Terms and Bonus Cap apply.</a>
          </p>
          <p className="items-center content-center justify-center mt-4 ">
            By becoming a member, you agree to our Terms & Conditions and
            Privacy Policy. <br />
            All trademarks are proprietary to Ebates Inc. <br />
            ©2024 Ebates Inc. dba Rakuten. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Title2;
