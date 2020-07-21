

import {Table } from 'react-bootstrap';
import React, { Component } from 'react';
class LogTable extends Component {

    //const [logs, setLogs]=React.useState([])

    componentDidMount() {
      
      //console.log(logs)
      this.props.refreshLogs()
      
    }
  


  render(){

    return (
        <Table striped bordered hover size="sm" responsive style={{ width: "50%", margin: "auto" , marginTop:"2%"}} >
        <thead>
         <tr>
            <th>Room ID</th>
            <th>User ID</th>
            <th>State</th>
            <th>Time</th>
             
          </tr>
  
        </thead>
      <tbody>
      { this.props.logs?.map((log)=>{
        return(
        <tr key={log.id}> 
        <td>{log.roomID}</td>
        <td>{log.userId}</td>
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