import React from "react";
import SvgFilled from "./SvgCircleFilled";
import SvgEmpty from "./SvgCircleEmpty";
import { useState, useEffect } from "react";

const Calculator = () => {
  const [metric, setMetric] = useState(true);
  const [cm, setCm] = useState("");
  const [kg, setKg] = useState("");
  const [metricResult, setMetricResult] = useState(false);

  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");
  const [st, setSt] = useState("");
  const [lbs, setLbs] = useState("");
  const [imperialResult, setImperialResult] = useState(false);

  const [result, setResult] = useState(true);
  const [BMI, setBMI] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");

  //METRIC BMI CALCULATION
  useEffect(() => {
    if (cm > 50 && kg > 10) {
      let heightInMeters = cm / 100;
      let heightInMetersSquare = heightInMeters * heightInMeters;
      let bmi = kg / heightInMetersSquare;
      let formattedBmi = parseFloat(bmi).toFixed(1);
      let lowerBound = parseFloat(18.5 * heightInMetersSquare).toFixed(1);
      let upperBound = parseFloat(24.9 * heightInMetersSquare).toFixed(1);
      setLowerLimit(lowerBound);
      setUpperLimit(upperBound);
      setBMI(formattedBmi);
      setMetricResult(true);
      setResult(false);
    }
  }, [cm, kg]);

  //IMPERIAL BMI CALCULATION
  useEffect(() => {
    if (ft > 2 && inch >= 0 && st >= 2 && lbs >= 0) {
      let heightInCms = ft * 30.48 + inch * 2.54;
      let weightInKg = st * 6.35 + lbs * 0.453592;
      let bmi = parseFloat(weightInKg / (heightInCms / 100) ** 2).toFixed(1);
      let lowerBoundKg = ((heightInCms / 100) ** 2 * 18.5).toFixed(1);
      let upperBoundKg = ((heightInCms / 100) ** 2 * 24.9).toFixed(1);
      let lowerBoundSt = (lowerBoundKg / 6.35).toFixed(1);
      let upperBoundSt = (upperBoundKg / 6.35).toFixed(1);
      setBMI(bmi);
      setLowerLimit(lowerBoundSt);
      setUpperLimit(upperBoundSt);
      setImperialResult(true);
      setResult(false);
    }
  }, [ft, inch, st, lbs]);

  return (
    <div
      className={`flex flex-col lg:p-8 p-4 rounded-lg bg-[#FFF] shadow-lg mx-auto mt-4`}
    >
      <h2 className="font-inter font-semibold text-2xl leading-normal tracking-[0.03em] pb-8">
        Enter your details below
      </h2>
      {/*  RADIO BUTTON DIV */}
      <div className="flex w-[100%] p-4 items-center">
        <div
          onClick={() => {
            setMetric(true);
            setImperialResult(false);
            setResult(true);
            setCm("");
            setKg("");
            setFt("");
            setSt("");
            setLbs("");
            setInch("");
          }}
          className="flex items-center justify-around lg:w-[20%] w-[40%] mr-16 "
        >
          {metric ? (
            <SvgFilled className="cursor-pointer" />
          ) : (
            <SvgEmpty className="cursor-pointer" />
          )}

          <p className="font-inter font-semibold text-base leading-[150%] ">
            Metric
          </p>
        </div>
        <div
          onClick={() => {
            setMetric(false);
            setMetricResult(false);
            setResult(true);
            setCm("");
            setKg("");
            setFt("");
            setSt("");
            setLbs("");
            setInch("");
          }}
          className="flex items-center justify-around lg:w-[23%] w-[40%] mr-16 "
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
              className="flex p-4 items-start self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[100%]"
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
              className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[100%]"
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
              <div className="absolute left-[160px] bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                ft
              </div>
              <input
                className="flex p-4 items-start lg:gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[120%] lg:w-[40%]"
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setFt(e.target.value);
                }}
                value={ft}
              ></input>
              <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                in
              </div>
              <input
                className="flex p-4 items-start lg:gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[100%] lg:w-[40%]"
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setInch(e.target.value);
                }}
                value={inch}
              ></input>
            </div>
          </div>
          <div className="relative">
            <p className="font-inter text-[#5E6E85] text-sm leading-[150%]">
              Weight
            </p>
            <div className="flex  justify-between">
              <div className="absolute left-[160px] bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                st
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[120%] lg:w-[40%]"
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setSt(e.target.value);
                }}
                value={st}
              ></input>
              <div className="absolute right-3 bottom-4 font-inter font-semibold text-xl leading-normal tracking-[0.03em] text-[#345FF6]">
                lbs
              </div>
              <input
                className="flex p-4 items-start gap-24 self-stretch rounded-lg border border-[#D8E2E7] bg-[#FFF] w-[100%] lg:w-[40%]"
                type="number"
                placeholder="0"
                onChange={(e) => {
                  setLbs(e.target.value);
                }}
                value={lbs}
              ></input>
            </div>
          </div>
        </div>
      )}
      {/* IMPERIAL INPUT DIV ENDS */}
      {/* DEFAULT SUMMARY DIV */}
      {result && (
        <div className="flex flex-col lg:w-[500px] justify-center items-center p-8 gap-24 self-stretch rounded-tr-full rounded-br-full  bg-gradient-to-r from-[#345FF6] to-[#587DFF] mt-8">
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
            <h1 className="font-inter font-semibold lg:text-[64px] text-[48px] leading-[110%] tracking-[-0.2rem] text-[#FFF]">
              {BMI}
            </h1>
          </div>
          <p className="font-inter text-[#FFF] text-sm leading-[150%] w-[50%]">
            Your BMI suggests you’re{" "}
            {BMI < 18.5 || BMI === 18.5
              ? "underweight"
              : BMI > 18.5 && BMI < 24.9
              ? "normal weight"
              : BMI > 24.9 && BMI <= 29.9
              ? "overweight"
              : "obese"}
            . Your ideal weight is between{" "}
            <span className="text-[16px] font-bold">
              {lowerLimit} - {upperLimit}
            </span>
          </p>
        </div>
      )}
      {/* METRIC SUMMARY ENDS */}
      {/* IMPERIAL SUMMARY DIV */}
      {imperialResult && (
        <div className="flex items-center justify-around w-[500px] p-4 rounded-tr-full rounded-br-full  bg-gradient-to-r from-[#345FF6] to-[#587DFF] mt-8">
          <div className="flex flex-col">
            <p className="font-inter font-semibold text-base leading-[150%] text-[#FFF]">
              Your BMI is...
            </p>
            <h1 className="font-inter font-semibold text-[64px] leading-[110%] tracking-[-0.2rem] text-[#FFF]">
              {BMI}
            </h1>
          </div>
          <p className="font-inter text-[#FFF] text-sm leading-[150%] w-[50%]">
            Your BMI suggests you’re{" "}
            {BMI < 18.5 || BMI === 18.5
              ? "underweight"
              : BMI > 18.5 && BMI < 24.9
              ? "normal weight"
              : BMI > 24.9 && BMI <= 29.9
              ? "overweight"
              : "obese"}
            . Your ideal weight is between{" "}
            <span className="text-[16px] font-bold">
              {lowerLimit} - {upperLimit}
            </span>
          </p>
        </div>
      )}
      {/* IMPERIAL SUMMARY DIV ENDS */}
    </div>
  );
};

export default Calculator;
