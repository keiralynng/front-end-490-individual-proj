import "./Footer.css"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <footer className = "footer">
        <span className = "footer-left">
            <Link to="/films" style={{color: "white", TextDecoration: "none"}}>
                Films
            </Link>
        </span>

        <nav className="footer-right">
            <Link to="/actors" style={{color: "white", TextDecoration: "none"}}>
            Actors
            </Link>
        </nav>
        </footer>
    )
}