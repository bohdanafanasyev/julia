// Main
import React, {Component} from 'react';
import { browserHistory } from 'react-router';


// Components
import Backdoor from './backdoor.js';
import JuliaNav from './navigation';
import JuliaControl from './juliacontrol';


export default class Julia extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    Tracker.autorun(() => {
      if(!Meteor.userId()) {
  			browserHistory.push('/julia')
      }
    })
  }

  renderChildren(props) {
    return (
      <div>
        <JuliaNav props={this.props}/>
        <JuliaControl />
        {this.props.children}
      </div>
  )}

  render(props) {

    var currentLocation = this.props.location.pathname;

      if (!Meteor.userId()) {
        return <div><Backdoor /></div>
      } else if (currentLocation == '/julia') {
        return <div className='julia-body'>
                 <JuliaControl />
                 <JuliaNav />
                 <div className='julia-welcome'>
                   <p>It's nice to see you again :)</p>
                   <p>Did anything new surprise you today?</p>
                 </div>
               </div>
      } else {
          return <div>{this.renderChildren()}</div>
      }
    }
}
