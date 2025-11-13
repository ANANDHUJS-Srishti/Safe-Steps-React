import "../HomePage/HomePage.css"
import homeimg from "../Images/homehero.jpg"
import picone from "../Images/Assistive-Devices-1.jpg"
import pictwo from "../Images/q.webp"
import picthree from "../Images/w.png"
import carone from "../Images/car1.jpeg"
import cartwo from "../Images/car2.jpeg"
import carthree from "../Images/car3.jpeg"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <div className="home-pg-div">
                <img className='home-pg-img' src={homeimg} />

            </div>
            <div className="d-flex justify-content-center ">
                <button className="btn btn-danger btn-lg sos-bt"><p className="sos-text">SOS</p></button>
            </div>
            <div className="sec-div">
                <h1 className="sec-div-head">Our Services</h1>
                <p className="sec-div-para text-muted">We offer compassionate care and dependable support for all your daily needs.</p>
            </div>
            <div className="card-div r">
                <div className="row d-flex justify-content-center card-row-size">
                    <div className="card col-sm-3 me-4">
                        <img className="img-cover" src={picone} />
                        <div className="card-head"><p className="text-center"><h3 className="mt-3">Personal Care</h3></p></div>
                        <div className="card-body"><p className="text-center">Find trusted volunteers to assist with your daily activities and companionship.</p></div>
                        <div className="card-footer d-flex justify-content-center"><Link to="/personalcare"><button className="btn btn-success">Explore</button></Link></div>
                    </div>
                    <div className="card col-sm-3 me-4">
                        <img className="img-cover" src={pictwo} />
                        <div className="card-head"><p className="text-center"><h3 className="mt-3">Transportation
                        </h3></p></div>
                        <div className="card-body"><p className="text-center">Reliable and safe transport options for hospital visits and emergencies.</p></div>
                        <div className="card-footer d-flex justify-content-center"><Link to="/transportation"><button className="btn btn-success">Book a Ride</button></Link></div>
                    </div>
                    <div className="card col-sm-3">
                        <img className="img-cover" src={picthree} />
                        <div className="card-head"><p className="text-center"><h3 className="mt-3">Medicine Support</h3></p></div>
                        <div className="card-body"><p className="text-center">Quick access to medical supply support and prescription assistance.</p></div>
                        <div className="card-footer d-flex justify-content-center"><Link to="/medicine"><button className="btn btn-success">MedicalSupport</button></Link></div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="carousel-div">
                            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                                </div>


                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img className="carousel-im " src={carone} alt="Los Angeles" />
                                    </div>
                                    <div class="carousel-item">
                                        <img className="carousel-im " src={cartwo} alt="Chicago" />
                                    </div>
                                    <div class="carousel-item">
                                        <img className="carousel-im " src={carthree} alt="New York" />
                                    </div>
                                </div>

                                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 bg-light ">
                        <h2>Why Choose SafeSteps?</h2>
                      
                        <p className="text-muted">We are dedicated to making lives easier for people with disabilities through technology, compassion, and community. Our volunteers, drivers, and medical partners ensure you receive reliable, respectful assistance every time.</p>
                        <p className="text-success">✅ Reliable 24/7 Assistance</p>
                        <p  className="text-success">Trusted Volunteers</p>
                        <p  className="text-success">Easy and Fast Access</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
