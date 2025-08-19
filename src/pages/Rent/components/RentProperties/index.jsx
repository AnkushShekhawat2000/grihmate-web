import React from "react"
import "./style.css"

const RentProperties = () => {
    return (
        <div className="rent-properties">
            <div className="filter-sidebar">
                 
                 <div class="sidebar">
                            <h3>Find Properties By</h3>

                        
                            <div class="filter-section">
                                <label for="location"><i class="fas fa-map-marker-alt"></i> Location</label>
                                <input type="text" id="location" placeholder="Enter Location..."/>
                            </div>

                    
                            <div class="filter-section">
                                <p>Property Type</p>
                                <label><input type="radio" name="property" value="1RK"/> 1RK</label>
                                <label><input type="radio" name="property" value="1BHK"/> 1BHK</label>
                                <label><input type="radio" name="property" value="2BHK"/> 2BHK</label>
                                <label><input type="radio" name="property" value="3BHK"/> 3BHK</label>
                            </div>

                           
                            <div class="filter-section">
                                <p>Price Range: <span id="price-value">₹0 - ₹300,000</span></p>
                                <input type="range" min="0" max="300000" step="1000" value="0" id="priceRange"/>
                            </div>

                      
                            <div class="filter-section">
                                <p>Furnished</p>
                                <label><input type="radio" name="furnished" value="fully"/> Fully Furnished</label>
                                <label><input type="radio" name="furnished" value="semi"/> Semi Furnished</label>
                                <label><input type="radio" name="furnished" value="unfurnished"/> Unfurnished</label>
                            </div>

                       
                            <button class="search-btn">Search</button>
                 </div>


            </div>
            <div className="cards-s ection"> </div>
        </div>
    )
}

export default RentProperties