import React, { Component } from "react";

import Table from "./../Components/Table";
import LogTable from "./../Components/LogTable";
class Rooms extends Component {


  constructor(props) {
    super(props);
  
    this.state={
      rooms:[],
      isFetching:true,
      logs:[],
      roomAndUserNames:[]
    }


    this.refreshRooms=this.refreshRooms.bind(this)
    this.getSpecificUser=this.getSpecificUser.bind(this)
    this.getSpecificRoom=this.getSpecificRoom.bind(this)
  
    
  }
    
 
  
  componentDidMount() {
     this.refreshRooms();
     this.refreshLogs();

     //refresh room every second to update current capacity.
     var timer = setInterval(() => {  
      this.refreshRooms()
     }, 1000)
   }

 
    findLogRoomAndUser(){
      this.state.logs.map((log, index)=>{
      this.getSpecificRoom(log.roomID)
      this.getSpecificUser(log.userID)
        if(this.state.currentRoom!=null&&this.state.currentUser!=null){
          let a = this.state.roomAndUserNames.slice(); //creates the clone of the state
          a[index] = { roomName:this.state.currentRoom.name, userName:this.state.currentUser.firstName+" "+this.state.currentUser.lastName}
           this.setState({roomAndUserNames: a});
        }
      })
      
    }


    //allows us to unscribe to api call when switching pages. 
    abortController=new AbortController()

    enterNewLog(){
      fetch( 'https://conferencecalculator.herokuapp.com/api/v1/log',{
       method:'POST',
       headers:{'Content-type': 'application/json'},
       credentials: "same-origin", 
       mode: "cors",
       cache: "no-cache", 
      body:JSON.stringify(this.state.newLog)
      }).then(r=>r.json()).then(res=>{
        if(res){
            console.log("post successful")
        }else{
          console.log("error")
          throw new Error('Something went wrong ...');
        }
      })
     
      //reset
      this.setState({newLog:{
      }})
    }


 


   getSpecificUser(id){
      
     fetch('https://conferencecalculator.herokuapp.com/api/v1/user/'+id)
    .then(res=>res.json()).then(
      result=>{
       this.setState({currentUser:result})
      })
    
    }

    refreshLogs(){
      fetch('https://conferencecalculator.herokuapp.com/api/v1/log',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
       this.setState({logs:result})
       this.findLogRoomAndUser();
      })
    }

     getSpecificRoom(id){
      
      let response=  fetch('https://conferencecalculator.herokuapp.com/api/v1/room/'+id)
      .then(res=>res.json()).then(
       result=>{
        this.setState({currentRoom:result})
       })
        
     }
  refreshRooms(){
   
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
       this.refreshRooms()
       )

    }

    //unsubscribe when unmounted
    componentWillUnmount(){
      this.abortController.abort()
      clearInterval(this.state.timer);
    }

    componentDidUpdate() {

    }


   
    render() {
        return (
          <div className="Rooms">

                                      {
                                     //table component will call both delete and refresh. 
                                       }
           <h1 style={{ "textAlign": "center"}}> Click the Rooms for more information
           </h1>
          <Table roomsToRender={this.state.rooms} users={this.state.users} isFetching={this.state.isFetching} deleteRoom={this.deleteRoom.bind(this)} />
          

          
          {

            //The table showing who entered/exited what room at a specific time. 
          //<LogTable logs={this.state.logs} refreshLogs={this.refreshLogs.bind(this)} findLogRoomAndUser={this.findLogRoomAndUser.bind(this)} roomAndUserNames={this.state.roomAndUserNames} />
          }
          </div>
         
        );
      }
    

}




export default Rooms;
