import React from "react";

interface IIconProps {
  width: string;
  height: string;
}

export function AnswerIcon({ width, height }: IIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.75 0.416504H1.41667C0.6375 0.416504 0 1.054 0 1.83317V10.3332C0 11.1123 0.6375 11.7498 1.41667 11.7498H11.3333L14.1667 14.5832V1.83317C14.1667 1.054 13.5292 0.416504 12.75 0.416504ZM11.3333 8.9165H2.83333V7.49984H11.3333V8.9165ZM11.3333 6.7915H2.83333V5.37484H11.3333V6.7915ZM11.3333 4.6665H2.83333V3.24984H11.3333V4.6665Z"
        fill="#999999"
      />
    </svg>
  );
}
