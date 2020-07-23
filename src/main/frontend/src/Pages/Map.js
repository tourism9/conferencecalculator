import React, { Component } from "react";
import floorOne from './floorOne.png';
import floorTwo from './floorTwo.png';

class Map extends Component {

  
    render() {

        return (
          <div className="Map">

              <h1>Interactive Map Coming Soon</h1>

              <h2>Floor One</h2>

              <img className={'floor'} src={floorOne} />

              <h2> Floor Two</h2>

              <img className={'floor'} src={floorTwo} />
         
        
          </div>
        );
      }
    
  

}




export default Map;

