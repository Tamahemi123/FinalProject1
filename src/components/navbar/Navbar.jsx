import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/create-account">Create Account</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;



