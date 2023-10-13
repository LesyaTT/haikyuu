import { SecTitle } from "../secTitle";
const backgroundImageUrl = "/imgs/about-img.png";

export const About = () => {
  return (
    <>
      <section id="about" className="flex justify-between pt-[100px] pb-[80px]">
        <div className="w-[50%]">
          <SecTitle title={"About Anime"} />
          <p className="mt-[40px] text-white text-3xl">
            Haikyuu!! - anime about volleyball, released by the studio
            Production I.G, which, by the way, ate a dog on the sports genre:
            she previously released Kuroko no Basket about basketball, Prince of
            Tennis about tennis and Diamond no Ace about baseball. The script is
            based on manga.
            <br />
            <br />
            Shoyo Hinata decides to take up volleyball seriously after watching
            this game several times. Now he is fulfilling his dream by creating
            a real volleyball team. Three years later, they achive a hitherto
            unprecedented success for themselves - they get to a major sports
            tournament. Despite the lack of experience, Hinata hopes for
            success. But they are unluckly with the draw, and in the first round
            the team will have to play with a strong team. The playmaker of this
            team almost single-handedly defeats the opponent. After such a
            defeat, Hinata hopes for a rematch.
          </p>
        </div>
        <div className="w-[1024px]"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        />
      </section>
    </>
  );
};
