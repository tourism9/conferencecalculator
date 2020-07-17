
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Accordion } from 'react-bootstrap';
import {Card } from 'react-bootstrap';


class Table extends Component {

  
  state={
    roomsToRender:this.props.roomsToRender,
    users:this.props.users
  }

  deleteAndRefresh(id){
    this.props.deleteRoom(id)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ roomsToRender: nextProps.roomsToRender,users:nextProps.users });  
  }

  render(){
      const isBackgroundGreen = false; //is capacity < 80%
      const isBackgroundYellow = false; //is capacity between 80% and 100%

    const renderRoom=(room, index)=>{
     //change color according to currentCapacity divided by max capacity
     let currentCapacity=room.numberEntered-room.numberExited
     return ( 
      <div className="cover" key={index}>
      <Accordion  defaultActiveKey="0" >
<<<<<<< HEAD
     <Card >       
     <Accordion.Toggle as={Card.Header} eventKey="1" style={{"backgroundColor":
     currentCapacity/this.state.roomsToRender[index].maxCapacity<0.50?"green":
      currentCapacity/this.state.roomsToRender[index].maxCapacity<=0.85? "orange":
     "red",
     
     "color": "black", "height":"80px", "fontWeight": "bold", "fontSize":"30px"}} >
=======
     <Card >
     <Accordion.Toggle as={Card.Header} eventKey="1" style={{"backgroundColor":isBackgroundGreen ? 'green' : isBackgroundYellow ? 'yellow' : 'red', "color": "black", "height":"80px", "fontWeight": "bold", "fontSize":"30px"}} >
>>>>>>> 9fea591d11021cc65ad818f20acac133bea5b789
      {room.name}
     

    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">

<<<<<<< HEAD
     <Card.Body className="roomInfo"> Current Capacity: {room.numberEntered-room.numberExited}/{room.maxCapacity} <br/> Number Entered: {room.numberEntered} <br/>Number Exited:{room.numberExited} <br/> Width: {room.width} {room.units} <br/> Length: {room.length} {room.units}<br/>
=======
      {
        //need to read data live to update current capacity. 
      }
     <Card.Body className="roomInfo"> Current Capacity: {room.currentCapacity}/{room.maxCapacity} <br/> Width: {room.width} {room.units} <br/> Length: {room.length} {room.units}<br/>
>>>>>>> 9fea591d11021cc65ad818f20acac133bea5b789
     <Button variant="danger" onClick={this.deleteAndRefresh.bind(this, room.id)} style={{"float":"right", "marginBottom":"3%"}}>delete</Button>
    </Card.Body>
    </Accordion.Collapse>
     </Card>
    </Accordion>
    </div>
      )
      
    }
    //iterate through the array of room and render them to the html above. 
    const rooms=this.state.roomsToRender.map(renderRoom)

    return (
      <div className="room">
        <h2 style={{"textAlign": "center"}}>{this.props.isFetching ? 'Loading....' : rooms}</h2>
        
      </div>
    )
    
    
  }
}

export default Table;
