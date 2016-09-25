import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Data Base
import { Posts } from '../imports/collections/posts';
import { Albums } from '../imports/collections/albums';

// Importing components
import App from './components/app';

// App children
import Timeline from './components/timeline/timeline';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Album from './components/portfolio/album';

// Julia
import Julia from './components/julia/julia';
import JuliaTimeline from './components/julia/timeline/timeline';
import JuliaPortfolio from './components/julia/portfolio/portfolio';
import JuliaAbout from './components/julia/about/about';

//Defining routes
const Routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Timeline}/>
      <Router path='about' component={About} />
      <Router path='portfolio' component={Portfolio} />
      <Route path="portfolio/:url" component={Album} />
    </Route>
    <Route path='/julia' component={Julia} >
      <Route path='/julia/timeline' component={JuliaTimeline} />
      <Route path='/julia/portfolio' component={JuliaPortfolio} />
      <Route path='/julia/about' component={JuliaAbout} />
    </Route>
  </Router>
);

// Loading routes
Meteor.startup(() => {
  ReactDOM.render(Routes, document.querySelector('.universe'));
});
