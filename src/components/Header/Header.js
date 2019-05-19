import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

function Header() {
  return (
    <header className="headerStyle">
        <div className="logo-div">
            <img src={require("../../images/rph-hat-trans.png")} id="headerLogo" alt="RPH LOGO"/>
        </div>
        <div className="link-div">
            <Link to="/" className="linkStyle">Home</Link>
        </div>
    </header>
  )
}

export default Header