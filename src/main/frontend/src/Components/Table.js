
import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";

class Table extends Component {

  
  state={
    roomsToRender:this.props.roomsToRender
  }

  render(){
    const renderRoom=(room, index)=>{
      console.log("I am doing"+room.name)
     return ( <tr key={index}> 
              <td>{room.name}</td>
              <td>{room.width}</td>
              <td>{room.length}</td>
              <td>{room.maxCapacity}</td>
              </tr> 
      
              
      )
    }
    const rooms=this.state.roomsToRender.map(renderRoom)
    return (
      <ReactBootStrap.Table striped bordered hover size="sm" responsive style={{ width: "50%", marginLeft: "20%" }} >
      <thead>
       <tr>
          <th>Room Name</th>
          <th>Room Width</th>
          <th>Room Length</th>
          <th>Max Capacity</th>
        </tr>
      </thead>
    <tbody>
      {rooms}
    </tbody>
    </ReactBootStrap.Table>

    )
  }
}

export default Table;