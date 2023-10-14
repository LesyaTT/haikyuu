import {Header} from "../components/header";
import {About} from "../components/homePage/about";
import {Hero} from "../components/homePage/hero";
import {Episodes} from "../components/homePage/episodes";
import {Seasons} from "../components/homePage/seasons";
import {Welcome} from "../components/homePage/welcome";
import {Characters} from "../components/homePage/characters";
import {Teams} from "../components/homePage/teams";
import {Merch} from "../components/homePage/merch";
import {Blog} from "../components/homePage/blog";
import apiClient from "@/api.js";

const backgroundImageUrl = "/imgs/hero-bg.jpg";

export const HomePage = () => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
        apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    return (
        <>
            <div
                className="w-full h-screen pe-[100px] ps-[100px]"
                style={{
                    backgroundImage: `url(${backgroundImageUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center top",
                    position: "relative",
                    zIndex: 5,
                }}
            >
                <div
                    className="absolute inset-0 left-0 top-0 w-[50%]"
                    style={{
                        backdropFilter: "blur(3px)",
                        background: `linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0) 100%)`,
                        zIndex: -5,
                    }}
                ></div>
                <Header color="black"/>
                <Hero/>
            </div>
            <div className="xl:ms-[230px] xl:me-[230px] md:ms-[100px] md:me-[100px]">
                <About/>
                <Episodes/>
                <Seasons/>
                <Welcome/>
                <Characters/>
                <Teams/>
                <Merch/>
                <Blog/>
                <Header color={'white'}/>
            </div>
        </>
    );
};
