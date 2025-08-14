import React from "react"
import Header from "../../component/common/Header"
import "./style.css"
import HeroSection from "../../component/common/HeroSection"
import FeaturedProperties from "../../component/FeaturedProperties"
import ClientFeedback from "../../component/ClientFeedback"
import ContactSection from "../../component/ContactUs/index"
import City from "../../component/City/index"
import Footer from "../../component/common/Footer"

const Home = () => {
    return (
        <div className="home-page">
            <Header/>
            <main>
                <HeroSection/>
                <FeaturedProperties/>
                <ClientFeedback/>
                <ContactSection/>
                <City/>
            </main>

            <Footer/>



        </div>
    )
}



export default Home;