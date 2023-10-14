export const OrangeButton = ({ info }) => {
  return (
    <>
      <button className="hover:shadow-white font-bold bg-lightorange flex md:ps-5 md:pe-5 xl:ps-10 xl:pe-10 md:pt-1 xl:pt-2 xl:pb-2 md:pb-1 items-center md:text-lg xl:text-xl rounded-lg" value={ info }>
        { info } <img src="/imgs/arrow-btn.svg" alt="arrow" className="w-[35px]"/>
      </button>
    </>
  );
};
