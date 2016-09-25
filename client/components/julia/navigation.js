// Main
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';


export default class JuliaNav extends Component {

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

      if (currentPath == '/julia/timeline') {
        $('.linkTime').addClass('nav-link-active');
      } else if (currentPath == '/julia/portfolio') {
        $('.linkPort').addClass('nav-link-active');
      } else if (currentPath == '/julia/about') {
        $('.linkAbout').addClass('nav-link-active');
      }

    });
  }



  render() {

    return (

      <nav className="navbar navbar-fixed-top bg-default flex-navbar julia-nav">


        <div className='navbar-brand bold logo'>
          <Link to='/'>LOGO</Link>
        </div>


        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link linkTime bold" to='/julia/timeline'>TIMELINE</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link linkPort bold" to='/julia/portfolio'>PORTFOLIO</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link linkAbout bold" to='/julia/about'>ABOUT</Link>
          </li>

          <li className="nav-item">
            <Link  className="nav-link bold" to='#' data-toggle="modal" data-target="#modalJulia">Hello, Name!</Link>
          </li>
        </ul>


      </nav>
    )
  }

}
