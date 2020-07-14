
import React, { Component } from 'react';
import Overlay from 'react-bootstrap/Overlay'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import PopoverContent from 'react-bootstrap/PopoverContent'
import PopoverTitle from 'react-bootstrap/PopoverTitle'
import { Button } from 'react-bootstrap';
import {Accordion } from 'react-bootstrap';
import {Card } from 'react-bootstrap';
class Table extends Component {

  
  state={
    roomsToRender:this.props.roomsToRender
  }

  deleteAndRefresh(id){
    this.props.deleteRoom(id)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ roomsToRender: nextProps.roomsToRender});  
  }

  



  render(){

    const renderRoom=(room, index)=>{
     console.log("I am doing"+room.name)
     return ( 
      <div className="cover" key={index}>
      <Accordion  defaultActiveKey="0" >
     <Card >
     <Accordion.Toggle as={Card.Header} eventKey="1" style={{"backgroundColor":"green", "color": "black", "height":"80px", "fontWeight": "bold", "fontSize":"30px"}} >
      {room.name}
     

    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">

      {
        //need to read data live to update current capacity. 
      }
     <Card.Body className="roomInfo"> Current Capacity: 0/{room.maxCapacity} <br/> Width: {room.width} {room.units} <br/> Length: {room.length} {room.units}<br/>
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
