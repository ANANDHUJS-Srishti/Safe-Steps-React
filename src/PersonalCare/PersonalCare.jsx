import cover from "../Images/personal.png"
import "../PersonalCare/PersonalCare.css"

function PersonalCare() {
    return (
        <div>
            <div>
                <img className="cover-pic" src={cover} />
                <div className="cover-pic-text ">
                    <p className="cover-text-one">Personal Care and Volunteer Support</p>
                    <p className="cover-text-two">Find Trusted Volunteers who assist you with daily needs companionship and community care.</p>
                    <button className="btn btn-success btn-lg">Find volunteers near you</button>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-center text-success">What We Offer</h3>
                <p className="text-muted text-center">Our volunteers are trained to provide personalized care with respect, compassion, and dedication</p>

                <div className="row d-flex justify-content-center">
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Daily Assitance</div>
                        <div className="card-body"><p className="text-center">Help with meals, and routine activities with care and dignity</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Home Visits</div>
                        <div className="card-body"><p className="text-center">Scheduled visits by certified volunteers to offer companionship and help at home</p></div>
                    </div>
                    <div className="card col-sm-3 me-3">
                        <div className="card-head text-center mt-3">Community Support</div>
                        <div className="card-body"><p className="text-center">Access to local networks and groups for long-term social connection.</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalCare
