import React from 'react';

import './../App.css';
import { Form, Col, FormGroup,Label, Modal, Button } from 'react-bootstrap';

function Calculator() {
    
    const [newRoomData, setNewRoomData]=React.useState({
      name:"",
      width:0,
      length:0,
      minDistance:1,
      maxCapacity:0

    })

    

    const addNewRoom=()=>{
      
      //rooms.push(newRoomData);
     //use 'http://localhost:8080/api/v1/room' when testing on local web browser. 
     fetch( 'https://conferencecalculator.herokuapp.com/api/v1/room',{
       method:'POST',
       headers:{'Content-type': 'application/json'},
       credentials: "same-origin", 
       mode: "cors",
       cache: "no-cache", 
      body:JSON.stringify(newRoomData)
      }).then(r=>r.json()).then(res=>{
        if(res){
            console.log("post successful")
        }else{
          console.log("error")
          throw new Error('Something went wrong ...');
        }
      })
     
      //reset
      setNewRoomData({
        name:"",
        width:0,
        length:0,
        minDistance:1,
        maxCapacity:0,
        currentCapacity:0
      })

    }

//important function that calculates maxmimum capacity of a room. 
    const changeNewRoomData=(newName, newWidth, newHeight,newMinDistance )=>{
      //change this formula to calculate maximum Capacity
      const newMaxCapacity=Math.floor((newWidth*newHeight)/(2*newMinDistance*2*newMinDistance))
      setNewRoomData({
        name:newName,
       width:newWidth,
        length:newHeight,
        minDistance:newMinDistance,
         maxCapacity:newMaxCapacity
       })
    }


  return (
    <div className="Calculator"
    >
     <h1 style={{"textAlign": "center"}}> Please Enter the Following
     </h1>
      
    <Form className="calculatorForm">
      <Col>
      <Form.Group >
        <Form.Label >Room Name</Form.Label>
        <Form.Control  defaultValue={newRoomData.name}  onChange={(e) =>changeNewRoomData(
           e.target.value,
           newRoomData.width,
            newRoomData.length,
            newRoomData.minDistance
         )}/>
      </Form.Group>
      </Col>

    <Col>
    <Form.Group >
     <Form.Label>Width</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.width}  onChange={(e) =>changeNewRoomData( newRoomData.name, e.target.value,
         newRoomData.length,
        newRoomData.minDistance)}/>
    </Form.Group>
    <Form.Group >
      <Form.Label>Length</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.length}  onChange={(e) =>changeNewRoomData(
        newRoomData.name,
       newRoomData.width,
       e.target.value,
        newRoomData.minDistance
     )}/>
     </Form.Group>
     </Col>

     <Col>
     <Form.Group>
      <Form.Label>Min Distance between each person required by CDC Guidelines:</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.minDistance} onChange={(e) =>changeNewRoomData(
         newRoomData.name,
         newRoomData.width,
         newRoomData.length,
          e.target.value

      )}/>    

      </Form.Group>
      </Col>

      <div> <strong id="maxCapacity">Maximum Capacity: {newRoomData.maxCapacity}</strong></div>
     
      <Button variant="primary" className="btn-lg btn-block"  type="submit" onClick={addNewRoom}>
       Add to Layout       
       </Button>
  
   
    </Form>
  
  
          
  </div>
        );
      
    

}




export default Calculator;

