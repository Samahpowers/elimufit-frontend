import React from "react";
import FirstContent from "./FirstContent.js";
import SecondContent from "./SecondContent.js";
import SecondContentSmallScreen from "./SecondContentSmallScreen.js";
import ThirdContent from "./ThirdContent.js";

const Home = () => {
    return (
        <div>
            <FirstContent />
            <SecondContent />
            <SecondContentSmallScreen />
            <ThirdContent/>
        </div>
    );
}

export default Home;
