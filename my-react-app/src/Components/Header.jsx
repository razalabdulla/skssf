import React, { useState, useEffect } from 'react';
import './Header.css'
function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // State to manage the open/close state of the navbar

    // Function to toggle the navbar
    const toggleNavbar = () => {
        setMenuOpen(!menuOpen); // Toggle the state
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('navbar-scroll');
                // Change color of all <a> tags to black
                const aTags = document.querySelectorAll('.navbar a');
                aTags.forEach(aTag => {
                    aTag.style.color = 'black';
                });
            } else {
                navbar.classList.remove('navbar-scroll');
                // Reset color of all <a> tags
                const aTags = document.querySelectorAll('.navbar a');
                aTags.forEach(aTag => {
                    aTag.style.color = ''; // Reset to default
                });
            }
        });

        // Clean up event listener
        return () => {
            window.removeEventListener('scroll');
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <>
            <header></header>
            <nav className="navbar navbar-expand-sm fixed-top navbar-light">
                <div className="container">
                    <a className="navbar-brand main-head" href="#" style={{ fontSize: '42px', color: 'black', display: 'flex',fontWeight:'500',marginTop:'9px', flexDirection: 'column' ,fontFamily:'inherit'}}>
                        SKSSF <span className="sub-head" >pilavalapp unit</span>
                    </a>
                    <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 8h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2m18 8H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2m0-5H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2"></path></svg>
                    </button>
                    <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbar1">
                        <ul className="navbar-nav nvr">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Poster</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="sticky-top bg-white hidden-spacer"> </div>
        </>
    );
}

export default Header;
