import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
    <div className="footer">
        <Link to="/about">Help</Link>
        <Link to="/about">Careers</Link>
        <Link to="/about">Privacy</Link>
        <Link to="/about">Terms</Link>
        <Link to="/about">About</Link>
    </div>
)

export default Footer