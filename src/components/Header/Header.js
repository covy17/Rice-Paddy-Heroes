import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

class Header extends Component {
  state = {
    collapse: false
  }

  hamburgerToggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }))
  }

  render(){
    return (
      <header className="headerStyle">
          <div className="logo-div">
              <img src={require("../../images/rph-hat-trans.png")} id="headerLogo" alt="RPH LOGO"/>
          </div>
          <div className="link-div">
              <Link to="/" className="linkStyle">Home</Link>
              <Link to="/" className="linkStyle">About</Link>
              <Link to="/" className="linkStyle">Members</Link>
              <Link to="/" className="linkStyle">Media</Link>
              <Link to="/" className="linkStyle">Booking</Link>
              <Link to="/" className="linkStyle">Events</Link>
              <div className={this.state.collapse ? "change hamburger-menu" : "hamburger-menu"} onClick={this.hamburgerToggle}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
          </div>
      </header>
    )
  }
}

export default Header