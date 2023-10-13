import { OrangeButton } from "../orangeButton";
import { SecTitle } from "../secTitle";

export const Merch = () => {
  return (
    <>
      <section id="merch" className="mt-[80px]">
        <div className="flex justify-between items-center mb-[50px]">
          <SecTitle title={"Haikyuu!! Merch"} />
          <OrangeButton info={"Other products"} />
        </div>
        <div className="w-full flex items-center">
          <div className="w-full flex justify-between">
            <div className="w-[50%]">
              <p className="text-white text-4xl mb-[40px]">
                At Haikyuu Merch Store, everything we promise revolves around
                our mission of comforting a huge numbers of Haikyuu lovers that
                cannot find a good place to buy a wide-ranged licensed product.
                Here, we are supported by the creators of the series and we &
                you can respect the author who make that masterpiece for us.
                <br />
                <br />
                Inspiring and comforting are the first things we always want to
                give to our customers, the Haikyuu fans. To achieve that, we
                make it as convenient as possible for such fans and communities,
                customers services is always the top priority. Customers-first
                mindset is well-set in our company, everyone in our team always
                want to treat our customers with the utmost respect and provide
                them with the highest quality service that they deserve.
              </p>
              <OrangeButton info={"Buy now"} />
            </div>
            <div
              className="w-[60%] min-h-[50%]"
              style={{
                background: 'url("/imgs/merch/itachiama.png") 100px center no-repeat, url("/imgs/merch/sakusa.png") right -55px no-repeat',
                backgroundSize: "65%, 47%",
              }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
};
