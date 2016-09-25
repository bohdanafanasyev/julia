import React from 'react';


//Components
import Navbar from './navbar';

export default (props) => {

  return (

    <div>
      <Navbar props={props}/>
      {props.children}
    </div>
    
  );
};
