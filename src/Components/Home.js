import React from "react";
import Header2 from "./Header2.js";
import FirstContent from "./FirstContent.js";
import SecondContent from "./SecondContent.js";
import SecondContentSmallScreen from "./SecondContentSmallScreen.js";
import Footer2 from "./Footer2"
const Home = () => {
    return (
        <>
            <div className="overflow-auto hide-scrollbar" style={{ maxHeight: '100vh' }}>
                <Header2 />
                <FirstContent />
                <SecondContent />
                <SecondContentSmallScreen/>
                <Footer2/>
            </div>
        </>
    )
}

export default Home;
