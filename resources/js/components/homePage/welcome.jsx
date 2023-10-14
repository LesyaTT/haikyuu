export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="md:mt-[50px] xl:mt-[90px] flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-white font-bold md:text-4xl xl:text-6xl">
            Welcome to the Haikyuu!! world!
          </h2>
          <p className="text-white md:text-2xl xl:text-4xl mb-5">
            Enter your email adress to recieve notifications about new episodes
          </p>
          <div className="flex items-center">
            <input
              className="rounded-lg md:w-[250px] xl:w-[400px] ps-6 md:h-[36px] xl:h-[52px] me-5"
              type="text"
              placeholder="qwerty123@gmail.com"
            />
            <button
              className="hover:shadow-white font-bold bg-lightorange flex md:ps-5 md:pe-5 xl:ps-10 xl:pe-10 md:pt-1 xl:pt-3 xl:pb-3 md:pb-1 text-lg xl:text-xl rounded-lg"
              value="Subscribe"
            > Subscribe </button>
          </div>
        </div>
        <img className="md:w-[400px] xl:w-[750px]" src="/imgs/team.png" alt="" />
      </section>
    </>
  );
};
