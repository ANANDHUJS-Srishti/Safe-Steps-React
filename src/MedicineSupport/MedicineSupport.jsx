import img from "../Images/M.jpg"
import "../MedicineSupport/MedicineSupport.css"
function MedicineSupport() {
  return (
    <div>
      <img className="med-img" src={img}/>
      <div className="med-supp-float">
        <p className="supp-text-one">Medicine Delivery and health support</p>
        <p className="supp-text-one">Fast and reliable medicine delivery for your health and safety</p>
        <button className="btn btn-success">Request Support</button>
      </div>

      <div>
        <p className="text-center">Our Medicine Support</p>
        <p className="text-center text-muted">Your health is our top priority — quick delivery and safe handling ensured.</p>

         <div className="row d-flex justify-content-center">
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Prescription Pickups
</div>
                        <div className="card-body"><p className="text-center">We collect prescriptions and deliver medicines to your doorstep.</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">24/7 Support
</div>
                        <div className="card-body"><p className="text-center">Available anytime for emergencies or critical care supplies.</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Medical Guidance</div>
                        <div className="card-body"><p className="text-center">Access information about dosage, usage, and safe medicine practices</p></div>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default MedicineSupport
