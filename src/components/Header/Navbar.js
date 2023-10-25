
import { Link } from 'react-router-dom';
import '../Header/Navbar.css';
import Cart from '../Cart/Cart';

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg nav-color  navbar-dark m-auto">
                <div class="container">

                    {/* <img src={logo} alt="logo" class="navbar-brand logo" /> */}

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">

                                <Link to="/home" class="nav-link active">Home</Link>
                            </li>
                            <li class="nav-item">

                                <Link to="/about" class="nav-link">About</Link>
                            </li>
                            <li class="nav-item">

                                <Link to="/store" class="nav-link">Store</Link>
                            </li>
                            <li class="nav-item">

                                <Link to="/contact" class="nav-link">Contact Us</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item ">
                                <Cart />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
