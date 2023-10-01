import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={31}
    height={31}
    fill="none"
    {...props}
  >
    <circle cx={15.5} cy={15.5} r={13} fill="#fff" stroke="#345FF6" />
  </svg>
);
export default SvgComponent;
