
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import {Accordion } from 'react-bootstrap';
import {Card } from 'react-bootstrap';


class Table extends Component {

  /*
  state={
    roomsToRender:this.props.roomsToRender,
    
  }
  */

  deleteAndRefresh(id){
    this.props.deleteRoom(id)
  }
  /*
  componentWillReceiveProps(nextProps) {
    this.setState({ roomsToRender: nextProps.roomsToRender});  
  }
*/

  render(){
      let isBackgroundGreen = false; //is capacity < 80%
      let isBackgroundYellow = false; //is capacity between 80% and 100%

    const renderRoom=(room, index)=>{
      /*
      isBackgroundGreen = false;
       isBackgroundYellow = false;
      if((room.numberEntered-room.numberExited)/room.maxCapacity<0.80){
        isBackgroundGreen=true;
      }else if((room.numberEntered-room.numberExited)/room.maxCapacity>0.8&&(room.numberEntered-room.numberExited)/room.maxCapacity<1){
       isBackgroundYellow=true;
      }
      */
      return ( 
       <div className="cover" key={index}>
        <Accordion  defaultActiveKey="0" >
      <Card >
                                                      {
                                                        //updating color of the room according to backend.
                                                      }
       <Accordion.Toggle as={Card.Header} eventKey="1" style={{"backgroundColor":room.color, "color": "black", "height":"80px", "fontWeight": "bold", "fontSize":"30px"}} >
      {room.name}
     
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">

      {
        
        //<br/> Number Entered: {room.numberEntered} <br/> Number Exited: {room.numberExited}
        //perform calculation in the backend to find currentCapacity and then send it to the frontend. 
      }
     <Card.Body className="roomInfo"> Current Capacity: {room.currentCapacity}/{room.maxCapacity} <br/> Width: {room.width} {room.units} <br/> Length: {room.length} {room.units}<br/>
     <Button variant="danger" onClick={this.deleteAndRefresh.bind(this, room.id)} style={{"float":"right", "marginBottom":"3%"}}>delete</Button>
    </Card.Body>
    </Accordion.Collapse>
     </Card>
    </Accordion>
    </div>
      )
      
    }
    //iterate through the array of room and render them to the html above. 
    const rooms=this.props.roomsToRender.map(renderRoom)

    return (
      <div className="room">
        <h2 style={{"textAlign": "center"}}>{this.props.isFetching ? 'Loading....' : rooms}</h2>
        
      </div>
    )
    
    
  }
}

export default Table;
