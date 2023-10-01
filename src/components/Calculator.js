import React from "react";
import SvgFilled from "./SvgCircleFilled";
import SvgEmpty from "./SvgCircleEmpty";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [metric, setMetric] = useState(true);
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");
  const [metricResult, setMetricResult] = useState(false);

  const [ft, setFt] = useState(0);
  const [inch, setInch] = useState(0);
  const [st, setSt] = useState(0);
  const [lbs, setLbs] = useState(0);
  const [imperialResult, setImperialResult] = useState(false);

  const [result, setResult] = useState(true);

  useEffect(() => {
    if (cm > 0 && kg > 0) {
      setMetricResult(true);
      setResult(false);
    }
  }, [cm, kg]);

  useEffect(() => {
    if (ft > 0 && inch > 0 && lbs > 0 && st > 0) {
      setImperialResult(true);
      setResult(false);
    }
  }, [ft, inch, st, lbs]);
  return (
    <div
      className={`flex flex-col p-8 border rounded-lg bg-[#FFF] shadow-[16px 32px 56px 0px rgba(143, 174, 207, 0.25)]`}
    >
      <h2 className="font-inter font-semibold text-2xl leading-normal tracking-[0.03em] pb-8">
        Enter your details below
      </h2>
      {/*  RADIO BUTTON DIV */}
      <div className="flex w-[100%] pb-8">
        <div
          onClick={() => setMetric(true)}
          className="flex items-center justify-between w-[20%] mr-16"
        >
          {metric ? (
            <SvgFilled className="cursor-pointer" />
          ) : (
            <SvgEmpty className="cursor-pointer" />
          )}

          <p className="font-inter font-semibold text-base leading-[150%]">
            Metric
          </p>
        </div>
        <div
          onClick={() => setMetric(false)}
          className="flex items-center justify-between w-[22%]"
        >
          {!metric ? (
            <SvgFilled className="cursor-pointer" />
          ) : (
            <SvgEmpty className="cursor-pointer" />
          )}
          <p className="font-inter font-semibold text-base leading-[150%]">
            Imperial
          </p>
        </div>
      </div>
      {/*  RADIO BUTTON DIV ENDS */}
      {/*METRIC INPUT DIV */}
      {metric && (
        <div className="flex justify-between">
          <div className="relative">
            <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
              Height
            </p>
            <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
              cm
            </div>
            <input
              className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
              type="number"
              placeholder="0"
              onChange={(e) => setCm(e.target.value)}
              value={cm}
            ></input>
          </div>
          <div className="relative">
            <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
              Weight
            </p>
            <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
              kg
            </div>
            <input
              className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
              type="number"
              placeholder="0"
              value={kg}
              onChange={(e) => setKg(e.target.value)}
            ></input>
          </div>
        </div>
      )}
      {/*METRIC INPUT DIV ENDS */}
      {/* IMPERIAL INPUT DIV */}
      {!metric && (
        <div>
          <div className="relative mb-8">
            <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
              Height
            </p>
            <div className="flex  justify-between">
              <div className="absolute left-[180px] bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                ft
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
                type="number"
                placeholder="0"
              ></input>
              <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                in
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
                type="number"
                placeholder="0"
              ></input>
            </div>
          </div>
          <div className="relative">
            <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
              Weight
            </p>
            <div className="flex  justify-between">
              <div className="absolute left-[180px] bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                st
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
                type="number"
                placeholder="0"
              ></input>
              <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                lbs
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF]"
                type="number"
                placeholder="0"
              ></input>
            </div>
          </div>
        </div>
      )}
      {/* IMPERIAL INPUT DIV ENDS */}
      {/* DEFAULT SUMMARY DIV */}
      {result && (
        <div className="flex flex-col w-[500px] justify-center items-center p-8 gap-24 self-stretch rounded-tr-full rounded-br-full  bg-gradient-to-r from-[#345FF6] to-[#587DFF] mt-8">
          <div>
            <h3 className="font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#FFF] pb-4">
              Welcome!
            </h3>
            <p className="font-inter text-[#FFF] text-sm leading-[150%]">
              Enter your height and weight and you’ll see your BMI result here
            </p>
          </div>
        </div>
      )}
      {/*DEFAULT SUMMARY DIV ENDS */}
      {/* METRIC SUMMARY */}
      {metricResult && (
        <div className="flex items-center justify-around w-[500px] p-4 rounded-tr-full rounded-br-full  bg-gradient-to-r from-[#345FF6] to-[#587DFF] mt-8">
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-base leading-[150%] text-[#FFF]">
              Your BMI is...
            </p>
            <h1 className="font-inter font-semibold text-[64px] leading-[110%] tracking-[-0.2rem] text-[#FFF]">
              23.4
            </h1>
          </div>
          <p className="font-inter text-[#FFF] text-sm leading-[150%] w-[50%]">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between 63.3kgs - 85.2kgs.
          </p>
        </div>
      )}
      {/* METRIC SUMMARY ENDS */}
    </div>
  );
};

export default Calculator;
