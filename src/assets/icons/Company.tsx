type Svg = {
  width?: string;
  height?: string;
  fill?: string;
};

const Company = ({ width, height, fill }: Svg) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 21H22"
        stroke={fill || "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 13H5C4.44772 13 4 13.4477 4 14V20C4 20.5523 4.44772 21 5 21H7C7.55228 21 8 20.5523 8 20V14C8 13.4477 7.55228 13 7 13Z"
        stroke={fill || "#000"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M6 17H6.5"
        stroke={fill || "#000"}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        d="M19 2H9C8.44772 2 8 2.44772 8 3V20C8 20.5523 8.44772 21 9 21H19C19.5523 21 20 20.5523 20 20V3C20 2.44772 19.5523 2 19 2Z"
        stroke={fill || "#000"}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 6.25H13.3667V8.11667H11.5V6.25ZM15.2333 6.25H17.1V8.11667H15.2333V6.25ZM11.5 9.51667H13.3667V11.3833H11.5V9.51667ZM15.2333 9.51667H17.1V11.3833H15.2333V9.51667ZM15.2333 12.7833H17.1V14.65H15.2333V12.7833ZM15.2333 16.05H17.1V17.9167H15.2333V16.05Z"
        fill={fill || "#000"}
      />
    </svg>
  );
};

export default Company;
