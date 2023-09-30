import React from "react";
import logo from "../images/logo.svg";
import Calculator from "../components/Calculator";

const Home = () => {
  return (
    <div className="relative">
      {/* TOP SECTION */}
      <section className="w-[100%]">
        {/* left */}
        <div className="px-24 py-12 w-[50%] bg-gradient-to-l from-[#D6E6FE] via-[rgba(214, 252, 254, 0.00)] rounded-b-[35px]">
          <img src={logo} alt="logo"></img>
          <div className="pt-24">
            <h1 className="font-inter font-semibold text-5xl leading-[110%] pb-4 text-[64px]">
              Body Mass Index Calculator
            </h1>
            <p className="font-inter text-base font-normal leading-[150%] text-[#5E6E85] text-[16px]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        {/* RIGHT */}
      </section>
      <div className="absolute top-10 left-[650px] rounded-[16px] bg-white">
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
