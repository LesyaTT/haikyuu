export const LearnMoreButton = () => {
  return (
    <>
      <button className="flex items-center text-lightorange text-3xl mt-3 underline-offset-8 underline">
        Learn more{" "}
        <svg
          width="30px"
          height="30px"
          className="ms-2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M20 12L16 8M20 12L16 16"
            stroke="#FF9900"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </>
  );
};
