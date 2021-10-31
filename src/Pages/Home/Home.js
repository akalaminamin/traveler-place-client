import React from "react";
import Banner from "../../Components/Banner/Banner";
import Services from "../../Components/Services/Services";
import Discount from "../../Components/Discount/Discount";
import Contact from "../../Components/Contact/Contact";
const Home = () =>{
    return(
        <>
            <Banner></Banner>
            <Services></Services>
            <Discount></Discount>
            <Contact></Contact>
        </>
    )
}

export default Home;