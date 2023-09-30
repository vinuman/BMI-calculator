import React from "react";
import SvgFilled from "./SvgCircleFilled";
import SvgEmpty from "./SvgCircleEmpty";

const Calculator = () => {
  return (
    <div
      className={`flex flex-col p-8 border rounded-lg bg-[#FFF] shadow-[16px 32px 56px 0px rgba(143, 174, 207, 0.25)]`}
    >
      <h2 className="font-inter font-semibold text-2xl leading-normal tracking-[0.03em] pb-8">
        Enter your details below
      </h2>
      {/*  RADIO BUTTON DIV */}
      <div className="flex w-[100%] pb-8">
        <div className="flex items-center justify-between w-[20%] mr-16">
          <SvgFilled className="cursor-pointer" />
          <p className="font-inter font-semibold text-base leading-[150%]">
            Metric
          </p>
        </div>
        <div className="flex items-center justify-between w-[22%]">
          <SvgEmpty className="cursor-pointer" />
          <p className="font-inter font-semibold text-base leading-[150%]">
            Imperial
          </p>
        </div>
      </div>
      {/*  RADIO BUTTON DIV ENDS */}
      {/* INPUT DIV */}
      <div className="flex justify-between">
        <div>
          <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
            Height
          </p>
          <input
            className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
            type="number"
            placeholder="0"
          ></input>
        </div>
        <div>
          <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
            Weight
          </p>
          <input
            className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
            type="number"
            placeholder="0"
          ></input>
        </div>
      </div>
      {/* INPUT DIV ENDS */}
      {/* SUMMARY DIV */}
      <div className="flex flex-col justify-center items-center p-8 gap-24 self-stretch rounded-tr-full rounded-br-full  bg-gradient-to-r from-[#345FF6] to-[#587DFF] mt-8">
        <div>
          <h3 className="font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#FFF] pb-4">
            Welcome!
          </h3>
          <p className="font-inter text-[#FFF] text-sm leading-[150%]">
            Enter your height and weight and you’ll see your BMI result here
          </p>
        </div>
      </div>
      {/* SUMMARY DIV ENDS */}
    </div>
  );
};

export default Calculator;
