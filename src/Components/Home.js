import React from "react";
import FirstContent from "./FirstContent.js";
import SecondContent from "./SecondContent.js";
import SecondContentSmallScreen from "./SecondContentSmallScreen.js";

const Home = () => {
    return (
        <div>
            <FirstContent />
            <SecondContent />
            <SecondContentSmallScreen />
        </div>
    );
}

export default Home;
