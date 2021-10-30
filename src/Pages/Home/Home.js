import React from "react";
import Banner from "../../Components/Banner/Banner"
import Services from "../../Components/Services/Services"
import Discount from "../../Components/Discount/Discount"
import Footer from "../../Components/Footer/Footer";
const Home = () =>{
    return(
        <>
            <Banner></Banner>
            <Services></Services>
            <Discount></Discount>
            <Footer></Footer>
        </>
    )
}

export default Home;