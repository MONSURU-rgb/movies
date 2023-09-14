import React from "react";

function Upcoming() {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <g filter="url(#filter0_d_1320_693)">
        <rect
          x="2"
          y="1"
          width="25"
          height="25"
          fill="url(#pattern0)"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1320_693"
          x="0"
          y="0"
          width="29"
          height="29"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1320_693"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1320_693"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <use xlinkHref="#image0_1320_693" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_1320_693"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

export default Upcoming;
