export const OrangeButton = ({ info }) => {
  return (
    <>
      <button className="hover:shadow-white font-bold bg-lightorange flex ps-10 pe-10 pt-2 pb-2 items-center text-xl rounded-lg" value={ info }>
        { info } <img src="/imgs/arrow-btn.svg" alt="arrow" className="w-[35px]"/>
      </button>
    </>
  );
};
