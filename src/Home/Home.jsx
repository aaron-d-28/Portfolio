import React from "react";
import { Link } from "react-router-dom";
import P5Background from "../ani.jsx";
import Typewritereffect from "./Typewritereffect.jsx";
import SomeThingsAboutMe from "./Personalinfo.jsx";
const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Background Animation */}
            <P5Background />

            <div className="text-center  mr-40 ml-56  pt-90  pr-160 bg-amber-400" >
               <div >
                   <h1 className="text-4xl font-bold text-white">HI</h1>
                   <h2 className="text-3xl font-semibold text-white mt-2">
                       I'm A{" "}
                       <span className="text-green-400">
                    <Typewritereffect/>
                </span>
                   </h2>
               </div>

                   <img src="/assets/monitor-svgrepo-com.svg"/>
            </div>
            <SomeThingsAboutMe />

        </div>
    );
};

export default Home;