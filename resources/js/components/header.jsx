import "../../css/links.css";
import {OrangeButton} from "@/components/orangeButton.jsx";
import apiClient from "@/api.js";
import {AuthButton} from "@/components/homePage/authButton.jsx";
export const Header = ({ color }) => {
  return (
    <>
      <header className="flex justify-between w-full h-24 items-center">
        <img src='/imgs/logo.svg' className="lg:h-[120px] h-[160px]" alt="" srcset="" />
        <div className="flex justify-between w-1/2">
          <Link color={color} adress="/" text="Home" />
          <Link color={color} adress="#about" text="About" />
          <Link color={color} adress="#episodes" text="Episodes" />
          <Link color={color} adress="#characters" text="Characters" />
          <Link color={color} adress="https://haikyuu.fandom.com/wiki/Haikyuu!!_Wiki" text="Wiki" />
          <Link color={color} adress="#merch" text="Merch" />
          <Link color={color} adress="#blog" text="Blog" />
        </div>
        <div className="flex items-center">
          <button className="lg:w-[35px] w-[45px] h-[45px] mr-[15px]">
            <svg
              className="hover:stroke-lightorange"
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="lg:w-[35px] w-[45px] h-[45px] mr-[15px]">
            <svg
              className={`hover:stroke-lightorange`}
              viewBox="0 0 24 24"
              fill="none"
              stroke={color}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00195 17H5.60636C4.34793 17 3.71872 17 3.58633 16.9023C3.4376 16.7925 3.40126 16.7277 3.38515 16.5436C3.37082 16.3797 3.75646 15.7486 4.52776 14.4866C5.32411 13.1835 6.00031 11.2862 6.00031 8.6C6.00031 7.11479 6.63245 5.69041 7.75766 4.6402C8.88288 3.59 10.409 3 12.0003 3C13.5916 3 15.1177 3.59 16.2429 4.6402C17.3682 5.69041 18.0003 7.11479 18.0003 8.6C18.0003 11.2862 18.6765 13.1835 19.4729 14.4866C20.2441 15.7486 20.6298 16.3797 20.6155 16.5436C20.5994 16.7277 20.563 16.7925 20.4143 16.9023C20.2819 17 19.6527 17 18.3943 17H15.0003M9.00195 17L9.00031 18C9.00031 19.6569 10.3435 21 12.0003 21C13.6572 21 15.0003 19.6569 15.0003 18V17M9.00195 17H15.0003"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
            <AuthButton />
        </div>
      </header>
    </>
  );
};

const Link = ({ color, text, adress }) => {
  return (
    <a
      className={`lg:text-2xl text-3xl text-${color} link-wrapper hover:text-lightorange`}
      href={`${adress}`}
    >
      {text}
    </a>
  );
};
