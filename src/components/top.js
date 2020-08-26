import React from "react";

import "./styletop.scss";
import "./../sass/styleapp.scss";
import Weather from "./weather";




export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
      
     
    };
   
  }
  
  render() {
 
   

    return (
      <>
      <div className="top-container">
        <div className="title">Weather app</div>
        <Weather {...this.props} />
         
      </div>
   </>
    );
  }
}
