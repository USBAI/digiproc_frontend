import NavBar from "../components/nav_bar";
import './styling/services.css'





export default function Services() {



    return(
        <>
            <NavBar />
            <div className="__ourservices_49jf9">
                <div>
                    <div>
                        <h1>Our Services</h1>
                    </div>
                    <div>
                        <div className="__cardslists_denf9">
                            <div className="__Savings_cost_avoidance">
                                <div>
                                    <img src="https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65f027f41dc52076020a58b8_savings%201-p-800.jpg" alt="" />
                                    <p className="pricing_d9jdf">90 000 SEK</p>
                                </div>
                                <div>
                                    <h1>Savings & Cost avoidance</h1>
                                </div>
                            </div>
                            <div className="Code_of_Conduct">
                                <div>
                                    <img src="https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65f027eda059f7aa5b4f99de_terms%20%26%20conditions%201-p-800.jpg" alt="" />
                                    <p className="pricing_d9jdf">90 000 SEK</p>
                                </div>
                                <div>
                                    <h1>Code of Conduct</h1>
                                </div>
                            </div>
                            <div className="ESG_measurement">
                                <div>
                                    <img src="https://cdn.prod.website-files.com/631606e83c13edc22cfb6d57/65b2465a479e2daaf82cab42_ESG-p-800.jpg" alt="" />
                                    <p className="pricing_d9jdf">90 000 SEK</p>
                                </div>
                                <div>
                                    <h1>ESG measurement</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}