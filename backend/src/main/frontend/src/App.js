import React from 'react';
import './App.css';
import Table from "./Components/Table";
import { Input, Form, Label, Modal, ModalHeader, ModalBody, ModalFooter, TableStrap, Button } from 'react-bootstrap';

function App(){
 
 //create a bool in state called modalshow to toggle.                                                 
    const [show, setShow] = React.useState(false);
    const [newRoomData, setNewRoomData]=React.useState({
      name:"",
      width:0,
      length:0,

      //need to change
      maxCapacity:10
    })

    // temporary data for now. Need to retrieve information from database using GET with API
    const [rooms,setRoomData]=React.useState([{name:"Ballroom1", width:500, length:300, maxCapacity:10}]) 
   //*************************************************************************** */
   
    const handleOpen=()=>setShow(true);
    const handleClose=()=>setShow(false);
    const addNewRoom=()=>{
      //Need to do a post request to store room info to the server
      
      setShow(false);
      rooms.push(newRoomData);
      console.log(rooms);
      //reset
      setNewRoomData({
        name:"",
        width:0,
        length:0,
        maxCapacity:0
      })

      
    }
    
    
  return (
      
      <div className="App" >
        
        <Button color="primary" style={{ float:"left", marginLeft:"10%" }}  onClick={handleOpen}>Add Room</Button>
        
        {//this is the pop up that shows when button is clicked
        }
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new room</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {
            //the inputs in the pop up window. 
          }
          <Form.Group >
          <Form.Label >Room Name</Form.Label>
          <Form.Control placeholder="Room name" onChange={(e) =>setNewRoomData({
            
             name:e.target.value,
             width:newRoomData.width,
            length:newRoomData.length,
            maxCapacity:newRoomData.maxCapacity
    
          })}/>

          <Form.Label>Width</Form.Label>
          <Form.Control type="number" step="1" onChange={(e) =>setNewRoomData({
            name:newRoomData.name,
            width:e.target.value,
            length:newRoomData.length,
            maxCapacity:newRoomData.maxCapacity
   
         })}/>
          <Form.Label>Length</Form.Label>
          <Form.Control type="number" step="1" onChange={(e) =>setNewRoomData({
             name:newRoomData.name,
             width:e.target.value,
            length:e.target.value,
            maxCapacity:newRoomData.maxCapacity
   
         })}/>
          </Form.Group>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNewRoom}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

         
        <Table roomsToRender={rooms}/>
       
      </div>
    );

  
}

export default App;
