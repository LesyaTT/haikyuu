import { LearnMoreButton } from "../learnMoreButton";
import { OrangeButton } from "../orangeButton";
import { SecTitle } from "../secTitle";
import {importData} from '../../import';

export const Teams = () => {
    const info = importData('teams');

  return (
    <>
      <section id="teams" className="md:mt-[60px] xl:mt-[100px]">
        <div className="flex justify-between items-center mb-[50px]">
          <SecTitle title={"Volleyball Teams"} />
          <OrangeButton info={"See all teams"} />
        </div>
        <div className="flex justify-between">
            {info.map(item => (
                <TeamsCard img={item.img_path} name={item.name} />
            ))}
        </div>
      </section>
      ;
    </>
  );
};

const TeamsCard = ({ img, name }) => {
    return(
        <>
            <div className="md:w-[250px] xl:w-[480px]">
                <img src={img} alt="" className="rounded-2xl hover:shadow-white mb-4"/>
                <h2 className="font-bold text-white md:text-4xl xl:text-6xl">{ name }</h2>
                <LearnMoreButton />
            </div>
        </>
    )
}
