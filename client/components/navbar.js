import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

export default class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

    $('.nav-link').click(function() {
      $('.nav-link-active').removeClass('nav-link-active');
      $(this).addClass('nav-link-active');
    });

    Tracker.autorun(() => {

      var currentPath = this.props.props.location.pathname

      if (currentPath == '/') {
        $('.linkTime').addClass('nav-link-active');
      } else if (currentPath == '/portfolio') {
        $('.linkPort').addClass('nav-link-active');
      } else if (currentPath == '/about') {
        $('.linkAbout').addClass('nav-link-active');
      }

    });
  }

  render() {

    return (

      <nav className="navbar flex-navbar navbar-fixed-top main-navbar">


        <div className='navbar-brand bold logo'>
          <Link to='/'>LOGO</Link>
        </div>


        <ul className="nav navbar-nav main-nav">
          <li className="nav-item">
            <Link className="nav-link linkTime bold " to='/'>TIMELINE</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link linkPort bold" to='/portfolio' >PORTFOLIO</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link linkAbout bold" to='/about' >ABOUT</Link>
          </li>
        </ul>

      </nav>
    )
  }

}
