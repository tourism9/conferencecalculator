import React, { Component } from "react";

import Table from "./../Components/Table";
import LogTable from "./../Components/LogTable";
class Rooms extends Component {
    state={
      rooms:[],
      isFetching:true,
      users:[],
      logs:[],
      newLog:{},
      updatedUser:{firstName:"", lastName:"", username:"",password:0}
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


    refreshUsers(){
      fetch('https://conferencecalculator.herokuapp.com/api/v1/user',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
        
       this.setState({users:result})
      // console.log(result)
      })
    }

    



    updateUsers(id){
      fetch( 'https://conferencecalculator.herokuapp.com/api/v1/user/'+id,{
       method:'Put',
       headers: {
        'Content-Type': 'application/json',
      },
       credentials: "same-origin", 
       mode: "cors",
       cache: "no-cache", 
         
      body:JSON.stringify(this.state.updatedUser)
      }).then(r=>r.json()).then(res=>{
        if(res){
            console.log("put successful")
        }else{
          console.log("error")
          throw new Error('Something went wrong ...');
        }
      })
    }


    refreshLogs(){
      fetch('https://conferencecalculator.herokuapp.com/api/v1/log',{signal: this.abortController.signal})
      .then(res=>res.json()).then(
      result=>{
       this.setState({logs:result})
      })
    }

   

  
    componentDidMount() {

     // this.setState({updatedUser:{firstName:"john", lastName:"doughDough", username:"johndough",password:"12345" }})
      this.refreshRoom()
     this.refreshLogs()
      this.refreshUsers()
    

     
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

    }


   
    render() {
        return (
          <div className="Rooms">

                                      {
                                     //table component will call both delete and refresh. 
                                       }
           <h1 style={{ "textAlign": "center"}}> 
           </h1>
          <Table roomsToRender={this.state.rooms} users={this.state.users} isFetching={this.state.isFetching} deleteRoom={this.deleteRoom.bind(this)} refreshRoom={this.refreshRoom.bind(this)} refreshUsers={this.refreshUsers.bind(this)}  updateUser={this.updateUsers.bind(this)}/>
          <LogTable logs={this.state.logs} refreshLogs={this.refreshLogs.bind(this)}/>
          </div>
         
        );
      }
    

}




export default Rooms;
