import React from "react"
import Header from "../../component/common/Header"
import "./style.css"
import HeroSection from "../../component/common/HeroSection"
import FeaturedProperties from "../../component/FeaturedProperties"

const Home = () => {
    return (
        <div className="home-page">
            <Header/>
            <main>
                <HeroSection/>
                <FeaturedProperties/>
            </main>

        </div>
    )
}



export default Home;