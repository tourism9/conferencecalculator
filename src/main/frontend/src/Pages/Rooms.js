import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Table from "./../Components/Table";

class Rooms extends Component {
    state={
      rooms:[],
      
    }

    abortController=new AbortController()
    componentDidMount() {
      
     fetch('http://localhost:8080/api/v1/room',{signal: this.abortController.signal})
     .then(res=>res.json()).then(
     result=>{
      this.setState({rooms:result})
       
     })
    
       return function cleanup(){
         this.abortController.abort()
       }
   
   
    }
  
    componentWillUnmount(){
      this.abortController.abort()
    }
   
   
    render() {

        return (
          <div className="Rooms">

              <h1 style={{"textAlign": "center"}} >Start the backend server and add room in calculator to view this table</h1>
          <Table roomsToRender={this.state.rooms}/>
          
            </div>
         
        );
      }
    

}




export default Rooms;