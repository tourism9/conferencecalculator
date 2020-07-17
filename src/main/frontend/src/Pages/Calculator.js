import React from 'react';

import './../App.css';
import './styles.css';
import { Form, Col, FormGroup, Button, Dropdown } from 'react-bootstrap';

function Calculator() {
  const [unit, setUnit]=React.useState("Feet")
    const [newRoomData, setNewRoomData]=React.useState({
      name:"",
      width:0,
      length:0,
      minDistance:1,
      maxCapacity:0,
      currentCapacity:0,
      units:unit
    })


   

    

    const addNewRoom=()=>{
      
  
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
        currentCapacity:0,
        units:unit
      })

    }

//important function that calculates maxmimum capacity of a room. 
    const changeNewRoomData=(newName, newWidth, newHeight,newMinDistance )=>{
      //change this formula to calculate maximum Capacity
      const newMaxCapacity=Math.floor((newWidth*newHeight)/(newMinDistance*newMinDistance))
      setNewRoomData({
        name:newName,
       width:newWidth,
        length:newHeight,
        minDistance:newMinDistance,
         maxCapacity:newMaxCapacity,
         units:unit
       })
    }


  return (
    <div className="Calculator"
    >
     <h1 style={{"textAlign": "center"}}> Please Enter the Following
     </h1>
    


    <Form className="calculatorForm">
      <div>
     
       <Dropdown>
       <Form.Label className="label" style={{"marginRight":"5%", "marginBottom":"2%"}}>Current Unit:</Form.Label>
        <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn-lg"  style={{"fontSize":"20px"}}>
            {unit}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1"  onClick={(e)=>setUnit(e.target.text)}>Feet</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={(e)=>setUnit(e.target.text)}>Inches</Dropdown.Item>
           <Dropdown.Item href="#/action-3" onClick={(e)=>setUnit(e.target.text)}>Meters</Dropdown.Item>
        </Dropdown.Menu>
       </Dropdown>
      </div>

     
      <Form.Group >
        <Form.Label className="label">Room Name</Form.Label>
        <Form.Control  defaultValue={newRoomData.name}  onChange={(e) =>changeNewRoomData(
           e.target.value,
           newRoomData.width,
            newRoomData.length,
            newRoomData.minDistance
         )}/>
      </Form.Group>
      

    
    <Form.Group >
        <Form.Label className="label">Width in {unit.toLowerCase()}</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.width}  onChange={(e) =>changeNewRoomData( newRoomData.name, e.target.value,
         newRoomData.length,
        newRoomData.minDistance)}/>
    </Form.Group>
    <Form.Group >
      <Form.Label className="label">Length in {unit.toLowerCase()}</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.length}  onChange={(e) =>changeNewRoomData(
        newRoomData.name,
       newRoomData.width,
       e.target.value,
        newRoomData.minDistance
     )}/>
     </Form.Group>
     

     
     <Form.Group>
      <Form.Label className="label">Minimum Distance between each person required by CDC Guidelines in {unit.toLowerCase()}:</Form.Label>
      <Form.Control type="number" defaultValue={newRoomData.minDistance} onChange={(e) =>changeNewRoomData(
         newRoomData.name,
         newRoomData.width,
         newRoomData.length,
          e.target.value

      )}/>    

      </Form.Group>
     

      <div> <strong id="maxCapacity">Maximum Capacity: {newRoomData.maxCapacity}</strong></div>
     
      <Button variant="primary" className="btn-lg btn-block" style={{ "marginTop":"2%"}} onClick={addNewRoom}>
       Add to Layout       
       </Button>

    </Form>
  
  
          
  </div>
        );
      
    

}




export default Calculator;

