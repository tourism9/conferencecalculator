

import {Table } from 'react-bootstrap';
import React, { Component } from 'react';
class LogTable extends Component {

    //const [logs, setLogs]=React.useState([])

    componentDidMount() {
      var timer = setInterval(() => {  
       this.props.refreshLogs()
      }, 1000)
        this.setState({timer: timer});
      
    }
    

    componentWillUnmount(){
    
     clearInterval(this.state.timer);

    }
  


  render(){

    return (
        <Table striped bordered hover size="sm" responsive style={{ width: "50%", margin: "auto" , marginTop:"2%"}} >
        <thead>
         <tr>
            <th>Room Name</th>
            <th>User Name</th>
            <th>State</th>
            <th>Time</th>
             
          </tr>
  
        </thead>
      <tbody>
      { this.props.logs?.map((log, index)=>{
      
     //this.props.getRoom(log.roomID)
       /// console.log("here: "+user)
        //console.log("room: "+room)
        
        return(
<<<<<<< HEAD
        <tr key={log.logID}> 
          <td>{this.props.roomAndUserNames[index]==null?"Loading..":this.props.roomAndUserNames[index].roomName}</td>
          <td>{this.props.roomAndUserNames[index]==null?"Loading..":this.props.roomAndUserNames[index].userName}</td>
=======
        <tr key={log.id}> 
        <td>{log.roomID}</td>
        <td>{log.userId}</td>
>>>>>>> 89657eae38e9ac425ea8e57cf8d4e895ca9b1570
        <td>{log.enterOrExit}</td>
        <td>{log.dateAndTime}</td>
        </tr>)
      })}
      </tbody>
      </Table>
            );

}

}

export default LogTable;