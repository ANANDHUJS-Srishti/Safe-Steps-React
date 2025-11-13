import img from "../Images/adapto.jpg"
import "../Transportation/Transportation.css"
function Transportation() {
  return (
    <div>
      <img className="adapto" src={img}/>
      <div className="flaoting-div">
        <p className="float-text-one">Reliable Transportation Support</p>
        <p className="float-text-one">Safe and timely rides for your hospital appointments and emergencies</p>
        <button className="btn btn-success">Book a Ride</button>
      </div>


       <div className="mt-5">
                <h3 className="text-center text-success">Our Ride Services</h3>
                <p className="text-muted text-center">From medical appointments to daily travel , we've got you covered.</p>

                <div className="row d-flex justify-content-center">
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Emergency Rides</div>
                        <div className="card-body"><p className="text-center">Quick response vehicles ready 24/7 for urgent medical needs.</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Medical Appointments
</div>
                        <div className="card-body"><p className="text-center">Reliable transportation to hospitals, clinics, and therapy centers.</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Accessible Vans</div>
                        <div className="card-body"><p className="text-center">Comfortable, wheelchair-accessible vans for safe travel.</p></div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Transportation
