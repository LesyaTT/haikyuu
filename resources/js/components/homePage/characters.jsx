import { LearnMoreButton } from "../learnMoreButton";
import { OrangeButton } from "../orangeButton";
import { SecTitle } from "../secTitle";
import {importData} from '../../import';

export const Characters = () => {
    const info = importData('characters');

  return (
    <>
      <section id="characters">
        <div className="flex justify-between items-center mb-[50px]">
          <SecTitle title={"Main Characters"} />
          <OrangeButton info={"See all characters"} />
        </div>
        <div className="flex justify-between">
            {info.map(item => (
                <CharactersCard img={item.img_path} name={item.name} height={`${item.height} cm`} position={item.position} />
            ))}
        </div>
      </section>
    </>
  );
};

const CharactersCard = ({ img, name, height, position }) => {
    return(
        <>
            <div className="md:w-[250px] xl:w-[500px] border-2 md:p-[20px] xl:p-[40px] border-lightorange rounded-xl hover:shadow-white">
                <img src={img} alt=""  className="rounded-full md:h-[300px] xl:h-[550px]"/>
                <h4 className="font-bold text-lightorange md:text-2xl xl:text-5xl text-center mb-5 mt-4"> {name} </h4>
                <div className="">
                    <p className="flex justify-between font-bold text-white md:text-xl xl:text-3xl mb-2">Height: <span className="font-light md:text-xl xl:text-3xl">{height}</span></p>
                    <p className="flex justify-between font-bold text-white md:text-xl xl:text-3xl">Position: <span className="font-light md:text-xl xl:text-3xl">{position}</span></p>
                    <LearnMoreButton />
                </div>
            </div>
        </>
    )
}
