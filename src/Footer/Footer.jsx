import "../Footer/Footer.css"

function Footer() {
    return (
        <div className="footer-bg">
            <div><p className="text-center text-light mt-3">Questions? Call 000-800-919-1743</p></div>
            <div className="d-flex justify-content-center">
                <p className="me-2 text-light">Help Centre</p>
                <p className="me-2 text-light">Medical Help</p>
                <p className="me-2 text-light">
                    Review</p>
                <p className="me-2 text-light">Contact Us
                </p>
            </div>

            <div>
                <p className="text-center me-2 text-light">© 2025 SafeSteps - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
