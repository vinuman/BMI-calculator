import React from "react";
import logo from "../images/logo.svg";
import heroImg from "../images/image-man-eating.webp";
import Calculator from "../components/Calculator";
import exercise from "../images/icon-exercise.svg";
const images = require.context("../images", false, /\.(png|svg)$/);

const Home = () => {
  return (
    <div className="relative">
      {/* TOP SECTION */}
      <section className="w-[100%] flex flex-col rounded-md mb-4">
        {/* left */}
        <div className="md:px-24 py-12 flex flex-col rounded-md mb-4 md:flex-row items-center md:items-start md:w-[50%] w-[100%] bg-gradient-to-l from-[#D6E6FE] via-[rgba(214, 252, 254, 0.00)] md:rounded-b-[35px]">
          <img className="w-[36px] h-[36px]" src={logo} alt="logo"></img>
          <div className="md:pt-24 p-8">
            <h1 className="font-inter font-semibold md:text-[64px] text-[48px] leading-[110%] pb-4 text-center md:text-left">
              Body Mass Index Calculator
            </h1>
            <p className="font-inter font-normal leading-[150%] text-[#5E6E85] text-[16px] text-center md:text-left">
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
      <div className="md:absolute md:top-10 md:left-[650px] rounded-[16px] bg-white shadow-lg">
        <Calculator />
      </div>
      {/* MIDDLE SECTION DIV */}
      <div className="flex justify-center md:gap-36 gap-12 items-center w-[100%] md:py-16 md:px-16 md:pl-24">
        <div>
          <img
            className="w-[2400px]"
            src={heroImg}
            alt="image of a man eating food"
          ></img>
        </div>
        <div className="flex flex-col rounded-md mb-4">
          <h3 className="font-inter text-Gunmetal md:text-[48px] text-[32px] font-semibold leading-110 tracking-tight py-8 pb-8">
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
      {/*  HABITS SECTION */}
      <div className="flex md:flex-row flex-col rounded-md mb-4 justify-around md:w-[90%] rounded-md mx-auto py-16 px-8 bg-gradient-to-r from-#D6E6FE via-transparent to-transparent">
        <div className="flex items-center justify-center gap-4 md:flex-col rounded-md mb-4 md:w-[25%] w-[100%] ">
          <img
            className="w-[64px] h-[64px]"
            src={images("./icon-eating.svg")}
          ></img>
          <div className="flex flex-col rounded-md mb-4  w-[80%]">
            <h2 className="font-inter text-[#253347] text-xl font-semibold tracking-tight md:py-8 py-2">
              Healthy eating
            </h2>
            <p className="font-inter text-[#5E6E85] text-base font-normal leading-150">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:flex-col rounded-md mb-4 md:w-[25%] w-[100%]  py-8">
          <img className="w-[64px] h-[64px]" src={exercise}></img>
          <div className="flex flex-col rounded-md mb-4  w-[80%]">
            <h2 className="font-inter text-[#253347] text-xl font-semibold tracking-tight md:py-8 py-2">
              Regular exercice
            </h2>
            <p className="font-inter text-[#5E6E85] text-base font-normal leading-150">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:flex-col rounded-md mb-4 md:w-[25%] w-[100%] ">
          <img
            className="w-[64px] h-[64px]"
            src={images("./icon-sleep.svg")}
          ></img>
          <div className="flex flex-col rounded-md mb-4  w-[80%]">
            <h2 className="font-inter text-[#253347] text-xl font-semibold tracking-tight md:py-8 py-2">
              Adequate sleep
            </h2>
            <p className="font-inter text-[#5E6E85] text-base font-normal leading-150">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </div>
      </div>
      {/*  HABITS SECTION ENDS */}
      {/* LAST SECTION WEBView */}
      <section className="px-8 py-16 hidden md:block">
        {/*  DIV 1 */}
        <div className="flex justify-between px-32 pb-4">
          <div className="flex flex-col rounded-md mb-4 w-[50%] rounded-r-xl">
            <h2 className="text-[48px] text-[#253347] font-semibold leading-[110%] tracking-tight">
              Limitations of BMI
            </h2>
            <p className="text-[16px] text-[#5E6E85] font-normal leading-[150%]">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 w-[30%] shadow-xl p-8">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-gender.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Gender
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
        </div>
        {/*  DIV 1 ENDS */}
        {/*  DIV 2 */}
        <div className="flex gap-12 justify-end">
          <div className="flex flex-col rounded-md mb-4 w-[30%] shadow-xl p-8 rounded-xl">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-age.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Age
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 w-[30%] shadow-xl p-8 rounded-xl">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-muscle.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Muscle
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>
        {/*  DIV 2 ENDS */}
        {/* DIV 3 */}
        <div className="flex justify-center gap-12">
          <div className="flex flex-col rounded-md mb-4 w-[30%] shadow-xl p-8 rounded-xl">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-pregnancy.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Pregnancy
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 w-[30%] shadow-xl p-8 rounded-xl">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-race.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Race
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
        {/* DIV 3 ENDS */}
      </section>
      {/* LAST SECTION WEBVIEW ENDS */}
      {/* LAST SECTION TAB/MOB VIEW */}
      <section className="px-8 py-8 lg:hidden">
        <h1 className="text-center font-family['Inter'] text-[32px] font-semibold leading-[110%] tracking-tight text-[#253347] pb-4">
          Limitations of BMI
        </h1>
        <p className="text-[16px] text-[#5E6E85] font-normal leading-[150%] text-center mb-8">
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
        <div className="flex flex-col rounded-md mb-4">
          <div className="flex flex-col rounded-md mb-4 shadow-md p-4">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-gender.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Gender
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 shadow-md p-4">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-age.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Age
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 shadow-md p-4">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-muscle.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Muscle
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 shadow-md p-4">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-pregnancy.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Pregnancy
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="flex flex-col rounded-md mb-4 shadow-md p-4">
            <div className="flex items-center pb-4 gap-4">
              <img
                className="w-[32px] h-[32px]"
                src={images("./icon-race.svg")}
              ></img>
              <h4 className="text-base text-[#253347] font-semibold leading-normal tracking-tight">
                Race
              </h4>
            </div>
            <p className="text-base font-normal leading-[150%] text-[#5E6E85]">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </section>
      {/*  MOB/TABVIEW ENDS */}
    </div>
  );
};

export default Home;
