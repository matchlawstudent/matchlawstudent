import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import Cards from "./helpers/Card/Card";
import Footer from "./Footer/Footer";


function Home() {
    return (
        <>  
            <HeroSection />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;