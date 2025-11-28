import "../HomePage/HomePage.css";
import homeimg from "../Images/homehero.jpg";
import picone from "../Images/Assistive-Devices-1.jpg";
import pictwo from "../Images/q.webp";
import picthree from "../Images/w.png";
import carone from "../Images/car1.jpeg";
import cartwo from "../Images/car2.jpeg";
import carthree from "../Images/car3.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

function HomePage() {
  const [showModal, setShowModal] = useState(false);
  const [sosSent, setSosSent] = useState(false);

  const handleSend = () => {
    setSosSent(true);
    setTimeout(() => {
      setShowModal(false);
      setSosSent(false);
    }, 1500);
  };

  return (
    <div>
      <div className="home-pg-div">
        <img className="home-pg-img" src={homeimg} />
      </div>

      <div className="d-flex justify-content-center ">
        <button
          className="btn btn-danger btn-lg sos-bt"
          onClick={() => setShowModal(true)}
        >
          <p className="sos-text">SOS</p>
        </button>
      </div>

      <div className="sec-div">
        <h1 className="sec-div-head">Our Services</h1>
        <p className="sec-div-para text-muted">
          We offer compassionate care and dependable support for all your daily needs.
        </p>
      </div>

      <div className="card-div r">
        <div className="row d-flex justify-content-center card-row-size">
          <div className="card col-sm-3 me-4">
            <img className="img-cover" src={picone} />
            <div className="card-head text-center">
              <h3 className="mt-3">Personal Care</h3>
            </div>
            <div className="card-body text-center">
              Find trusted volunteers to assist with your daily activities and companionship.
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/personalcare">
                <button className="btn btn-success">Explore</button>
              </Link>
            </div>
          </div>

          <div className="card col-sm-3 me-4">
            <img className="img-cover" src={pictwo} />
            <div className="card-head text-center">
              <h3 className="mt-3">Transportation</h3>
            </div>
            <div className="card-body text-center">
              Reliable and safe transport options for hospital visits and emergencies.
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/transportation">
                <button className="btn btn-success">Book a Ride</button>
              </Link>
            </div>
          </div>

          <div className="card col-sm-3">
            <img className="img-cover" src={picthree} />
            <div className="card-head text-center">
              <h3 className="mt-3">Medicine Support</h3>
            </div>
            <div className="card-body text-center">
              Quick access to medical supply support and prescription assistance.
            </div>
            <div className="card-footer d-flex justify-content-center">
              <Link to="/medicine">
                <button className="btn btn-success">Medical Support</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <div className="carousel-div">
              <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="carousel-im" src={carone} alt="Los Angeles" />
                  </div>
                  <div className="carousel-item">
                    <img className="carousel-im" src={cartwo} alt="Chicago" />
                  </div>
                  <div className="carousel-item">
                    <img className="carousel-im" src={carthree} alt="New York" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 bg-light">
            <h2>Why Choose SafeSteps?</h2>
            <p className="text-muted">
              We are dedicated to making lives easier for people with disabilities through technology, compassion, and community.
            </p>
            <p className="text-success">✅ Reliable 24/7 Assistance</p>
            <p className="text-success">✅ Trusted Volunteers</p>
            <p className="text-success">✅ Easy and Fast Access</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm SOS</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                {!sosSent ? <p>Are you sure you want to send an SOS?</p> : <p className="text-success fw-bold">SOS Sent!</p>}
              </div>

              {!sosSent && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSend}
                  >
                    Send
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;