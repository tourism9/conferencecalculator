import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Table from "./../Components/Table";

class Rooms extends Component {
    state={
      rooms:[]
    }


    
 


    //allows us to unscribe to api call when switching pages. 
    abortController=new AbortController()
    componentDidMount() {
      this.refreshRoom()
    }

   async refreshRoom(){
      console.log("WORKS");
      await fetch('http://localhost:8080/api/v1/room',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
       this.setState({rooms:result})
      })
    }

    deleteRoom(id){
      fetch( 'http://localhost:8080/api/v1/room/'+id,{
        method:'Delete'
       }).then(()=>

        //refresh rooms array after deleting
       this.refreshRoom()
       )
         
        

        

    }


    //unsubscribe when unmounted
    componentWillUnmount(){
      this.abortController.abort()
    }

   
   
    render() {

        return (
          <div className="Rooms">

                                      {
                                     //table component will call both delete and refresh. 
                                       }

           <h1 style={{ "textAlign": "center"}}>Start the backend server and add room using the calculator</h1>
          <Table roomsToRender={this.state.rooms} deleteRoom={this.deleteRoom.bind(this)} refreshRoom={this.refreshRoom.bind(this)}/>
            </div>
         
        );
      }
    

}




export default Rooms;