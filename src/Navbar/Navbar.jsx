import logo from "../Images/logo1.jpeg"
import "../Navbar/Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">

                    <img className="nav-img" src={logo} />

                    <a className="navbar-brand p-3" href="javascript:void(0)">SafeSteps</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="mynavbar">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">Contact</a>
                            </li>

                        </ul>
                       
                    </div>
                     <div className="nav-item d-flex justify-content-end">
                            <Link to="/login"><button className="btn btn-success me-3">Login</button></Link>
                        </div>


                </div>
            </nav>
        </div>
    )
}

export default Navbar
