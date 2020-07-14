import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import Table from "./../Components/Table";

class Rooms extends Component {
    state={
      rooms:[],
      isFetching:true
    }


    
 


    //allows us to unscribe to api call when switching pages. 
    abortController=new AbortController()
    componentDidMount() {
      this.refreshRoom()
    }

  refreshRoom(){
      console.log("WORKS");
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
    }

    componentDidUpdate() {
        console.log("updated");
    }

   
    render() {

        return (
          <div className="Rooms">

                                      {
                                     //table component will call both delete and refresh. 
                                       }

           <h1 style={{ "textAlign": "center"}}></h1>
          <Table roomsToRender={this.state.rooms} isFetching={this.state.isFetching} deleteRoom={this.deleteRoom.bind(this)} refreshRoom={this.refreshRoom.bind(this)}/>
            </div>
         
        );
      }
    

}




export default Rooms;
