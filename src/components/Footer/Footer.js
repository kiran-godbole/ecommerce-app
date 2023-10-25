import React from 'react';
import './Footer.css';
import { FaYoutube, FaFacebookSquare, FaSpotify } from "react-icons/fa"


const Footer = () => {
    return (
        <footer class="bg-dark py-5">
            <div class='container text-light text-center'>
                <p class='display-5 mb-3'>Feel the music</p>
                <small class='text-white-50'>Copyright by KiranGodbole. All rights reserved.</small>
                <div>
                    <a href="https://www.youtube.com/">
                        <FaYoutube />
                    </a>
                    <a href="https://www.facebook.com/">

                        <FaFacebookSquare />
                    </a>
                    <a href="https://open.spotify.com/">

                        <FaSpotify />
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer;
