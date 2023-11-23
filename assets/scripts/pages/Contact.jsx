import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../blocks/Nav";

function Contact() {
    return (
        <div>
            <Nav />
            <h1>Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Contact;
