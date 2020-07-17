import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Table from "./../Components/Table";

class Rooms extends Component {
    state={
      rooms:[],
      isFetching:true,
      users:[]
    }


    
 


    //allows us to unscribe to api call when switching pages. 
    abortController=new AbortController()

    simulateRandomUser(){
      fetch('https://conferencecalculator.herokuapp.com/api/v1/user')
      .then(res=>res.json()).then(
      result=>{
       this.setState({rooms:result})
       this.setState({isFetching:false})
      })                             
    }
  
    componentDidMount() {
      this.refreshRoom()
     
    }

 

  refreshRoom(){
      //console.log("WORKS");
      fetch('https://conferencecalculator.herokuapp.com/api/v1/room',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
       this.setState({rooms:result})
       this.setState({isFetching:false})
      })
    }

    deleteRoom(id){
      fetch( 'https://conferencecalculator.herokuapp.com/api/v1/room/'+id,{
        method:'Delete'
       }).then(()=>
        //refresh rooms array after deleting
       this.refreshRoom()
       )

    }


    //unsubscribe when unmounted
    componentWillUnmount(){
      this.abortController.abort()
      clearInterval(this.state.timer);

    }

    componentDidUpdate() {
       // console.log("updated");
    }

    refreshUsers(){
      fetch('https://conferencecalculator.herokuapp.com/api/v1/user',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
       this.setState({users:result})
      })
    }


    startSimulation(){

    }

  

   
    render() {
        return (
          <div className="Rooms">

                                      {
                                     //table component will call both delete and refresh. 
                                       }

           <h1 style={{ "textAlign": "center"}}>
           <Button variant="primary" style={{"margin":"auto","height":"70px"}} className="btn-lg" onClick={this.startSimulation.bind(this)}>Start simulation</Button>
           </h1>
          <Table roomsToRender={this.state.rooms} users={this.state.users} isFetching={this.state.isFetching} deleteRoom={this.deleteRoom.bind(this)} refreshRoom={this.refreshRoom.bind(this)} refreshUsers={this.refreshUsers.bind(this)} />
          
          </div>
         
        );
      }
    

}




export default Rooms;
