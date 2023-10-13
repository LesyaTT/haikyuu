export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="mt-[90px] flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-white font-bold text-6xl">
            Welcome to the Haikyuu!! world!
          </h2>
          <p className="text-white text-4xl mb-5">
            Enter your email adress to recieve notifications about new episodes
          </p>
          <div className="flex items-center">
            <input
              className="rounded-lg w-[400px] ps-6 h-[52px] me-5"
              type="text"
              placeholder="qwerty123@gmail.com"
            />
            <button
              className="hover:shadow-white font-bold bg-lightorange flex ps-10 pe-10 pt-3 pb-3 items-center text-xl rounded-lg"
              value="Subscribe"
            > Subscribe </button>
          </div>
        </div>
        <img className="w-[750px]" src="/imgs/team.png" alt="" />
      </section>
    </>
  );
};
