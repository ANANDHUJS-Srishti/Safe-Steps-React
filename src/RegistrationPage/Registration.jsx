import { Link } from "react-router-dom"
import "../RegistrationPage/Register.css"


function Registration() {
    return (
        <div>
            <div className="card w-50 mx-auto reg-card p-3">
                <form>
                    <h3 className="text-center">Register</h3>
                    <input type="text" placeholder="username" className="form-control mb-3" />
                    <input type="email" placeholder="email" className="form-control mb-3" />
                    <textarea placeholder="address" className="form-control mb-3"></textarea>
                    <input type="tel" placeholder="phone number" className="form-control mb-3" />
                    <input type="tel" placeholder="Emergency number one" className="form-control mb-3" />
                    <input type="tel" placeholder="Emergency number two" className="form-control mb-3" />
                    <input type="radio" name="gender" value="male" className="me-2" /> Male
                    <input type="radio" name="gender" value="female" className="ms-3 me-2" /> Female<br></br>
                    <select className="form-control mb-3">
                        <option >Kerala</option>
                        <option >Tamilnadu</option>
                        <option >AndraPradesh</option>
                        <option >Delhi</option>
                        <option >Jammu</option>
                        <option >Assam</option>
                        <option>Uttarpradesh</option>
                    </select>
                    <input type="password" placeholder="password" className="form-control" />
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success mt-3">Register</button>
                    </div>
                </form>
                <div className="d-flex justify-content-center mt-4">
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Registration
