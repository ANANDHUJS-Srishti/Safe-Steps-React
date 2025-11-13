import "../Login/Login.css"
import { Link } from "react-router-dom"
function Login() {
    return (
        <div>
            <div className="card w-50 mx-auto login-card p-3">
                <form>
                    <h3 className="text-center">Login</h3>
                    <input type="text" placeholder="username" className="form-control mb-3" />
                    <input type="password" placeholder="password" className="form-control" />
                  <div className="d-flex justify-content-center">
                      <button className="btn btn-success mt-3">Login</button>
                  </div>
                </form>
             <div className="d-flex justify-content-center mt-4">
                     <p>Don't have an account? <Link to="/register">Register</Link></p>
             </div>
            </div>
        </div>
    )
}

export default Login
