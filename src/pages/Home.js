import React from "react";
import logo from "../images/logo.svg";
import heroImg from "../images/image-man-eating.webp";
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
      {/*  TOP SECTION ENDS */}
      <div className="absolute top-10 left-[650px] rounded-[16px] bg-white shadow-[16px 32px 56px 0px rgba(143, 174, 207, 0.25)]">
        <Calculator />
      </div>
      {/* MIDDLE SECTION DIV */}
      <div className="flex justify-center gap-36 items-center   w-[100%] py-16 px-16 pl-24">
        <div>
          <img
            className="w-[2400px]"
            src={heroImg}
            alt="image of a man eating food"
          ></img>
        </div>
        <div className="flex flex-col">
          <h3 className="font-inter text-Gunmetal text-[48px] font-semibold leading-110 tracking-tight pb-8">
            What your BMI result means
          </h3>
          <p className="font-inter text-[#5E6E85] text-[16px] font-normal leading-150 w-[90%]">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>
      {/* MIDDLE SECTION DIV ENDS */}
    </div>
  );
};

export default Home;
