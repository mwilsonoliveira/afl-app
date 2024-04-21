type Svg = {
  width?: string;
  height?: string;
  fill?: string;
};

const Person = ({ width, height, fill }: Svg) => {
  return (
    <svg
      width={width || "24"}
      height={height || "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.3175 22.3335V19.7938C21.3175 18.4467 20.7823 17.1547 19.8298 16.2021C18.8772 15.2496 17.5852 14.7144 16.2381 14.7144H6.07937C4.73223 14.7144 3.44028 15.2496 2.48771 16.2021C1.53515 17.1547 1 18.4467 1 19.7938V22.3335"
        fill="none"
      />
      <path
        d="M21.3175 22.3335V19.7938C21.3175 18.4466 20.7823 17.1547 19.8297 16.2021C18.8772 15.2496 17.5852 14.7144 16.2381 14.7144H6.07937C4.73223 14.7144 3.44028 15.2496 2.48771 16.2021C1.53515 17.1547 1 18.4466 1 19.7938V22.3335"
        stroke={fill || "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.1587 11.1589C13.964 11.1589 16.2381 8.88474 16.2381 6.07949C16.2381 3.27423 13.964 1.00012 11.1587 1.00012C8.35345 1.00012 6.07935 3.27423 6.07935 6.07949C6.07935 8.88474 8.35345 11.1589 11.1587 11.1589Z"
        fill="none"
        stroke={fill || "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Person;
