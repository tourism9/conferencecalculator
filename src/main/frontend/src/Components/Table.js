
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
    roomsToRender:this.props.roomsToRender,
    users:this.props.users
  }

  deleteAndRefresh(id){
    this.props.deleteRoom(id)
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ roomsToRender: nextProps.roomsToRender,users:nextProps.users });  
  }

  /*
  simulateRandomUser(){
    var timer = setInterval(() => {  
        
      let range= this.state.roomsToRender.length
      let index= Math.floor(Math.random() * Math.floor(range));
      let random=Math.floor(Math.random() * (2 -(-2)  +1))-2
    if(this.state.roomsToRender.length!=0){
      if(this.state.roomsToRender[index].currentCapacity<=0&&random<0){
          random=random*-1;
      }else if(this.state.roomsToRender[index].currentCapacity>=this.state.roomsToRender[index].maxCapacity&&random>0){
        random=random*-1;
      }

      
      
        this.setState(prevState => ({
          roomsToRender: prevState.roomsToRender.map(
          (obj, i) => ( index=== i ? Object.assign(obj, {currentCapacity:obj.currentCapacity+random }) : obj)
          )
          }));

      }
      }, 1000)
    
         this.setState({timer: timer});
    }

*/
    


  componentDidMount() {

     
  }

   //unsubscribe when unmounted
   componentWillUnmount(){
    clearInterval(this.state.timer);

  }



  render(){

    const renderRoom=(room, index)=>{
     //change color according to currentCapacity divided by max capacity
     return ( 
      <div className="cover" key={index}>
      <Accordion  defaultActiveKey="0" >
     <Card >       
     <Accordion.Toggle as={Card.Header} eventKey="1" style={{"backgroundColor":
     this.state.roomsToRender[index].currentCapacity/this.state.roomsToRender[index].maxCapacity<0.50?"green":
     this.state.roomsToRender[index].currentCapacity/this.state.roomsToRender[index].maxCapacity<=0.85? "orange":
     "red",
     
     "color": "black", "height":"80px", "fontWeight": "bold", "fontSize":"30px"}} >
      {room.name}
     

    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">

      {
        //need to read data live to update current capacity. 
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
    const rooms=this.state.roomsToRender.map(renderRoom)

    return (
      <div className="room">
        <h2 style={{"textAlign": "center"}}>{this.props.isFetching ? 'Loading....' : rooms}</h2>
        
      </div>
    )
    
    
  }
}

export default Table;
