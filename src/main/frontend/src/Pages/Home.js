import React, { Component } from "react";

import './../App.css';
import {  Card,Button, Container, Carousel} from 'react-bootstrap';
import conventionCenter from './conventionCenter.jpg';
class Home extends Component {
    state={
        show:false,
        index:0
    }
  
    

    handleClose(){
        this.setState({show:false})
    }

    handleOpen(){
        this.setState({show:true})
    }

    render() {

        return (
            <div className="Home">
            <img style={{maxWidth:"68%", height:"33rem",margin:"auto", marginTop:"0.5%" }}
                className="d-block w-100"
                 src={conventionCenter}
                 alt="First slide"
                />
                <div style={{ fontSize:"10px", color:"grey" ,marginLeft:"17%"}} >Picture of Indiana Convention Center</div>
                

        <Carousel style={{margin:"auto", maxWidth:"68%" , marginTop:"0.5%"}}>
        
         <Carousel.Item>
                
                
        
        < Card style={{ width: '100%'  ,margin:"auto", backgroundColor:"#c89666"}}>            
        <Card.Body>
                                                                {
                                                                    //insert app name here
                                                                }
        <Card.Title style={{fontWeight:"bold", fontSize:"20px"}} >[Insert App Name Here]</Card.Title>
        <Card.Text style={{ fontSize:"15px" ,marginLeft:"20px"}}>
            This is an App that aims to make hosting large events much safer in the time of COVID-19.
          
        </Card.Text>
        </Card.Body>
        </Card>  
        </Carousel.Item>
                                                            
        <Carousel.Item>
           
        < Card style={{ width: '100%'  ,margin:"auto",maxWidth:"100%", backgroundColor:"#c89666"}}>            
        <Card.Body>
                                                               
        <Card.Title style={{fontWeight:"bold", fontSize:"20px"}} >Calculator</Card.Title>
        <Card.Text style={{ fontSize:"15px" ,marginLeft:"20px"}}>
                 This page is a calculator that will calculate the new maximum capacity for a room required by CDC social distancing guidelines.
                After calculating, the room can be added to the rooms page to be tracked.
        </Card.Text>
        </Card.Body>
        </Card>  

        </Carousel.Item>

        <Carousel.Item>
           
        < Card style={{ width: '100%'  ,margin:"auto",maxWidth:"100%", backgroundColor:"#c89666"}}>            
        <Card.Body>
                                                              
        <Card.Title style={{fontWeight:"bold", fontSize:"20px"}} >Rooms</Card.Title>
        <Card.Text style={{ fontSize:"15px" ,marginLeft:"20px"}}>
             This page tracks the current capacity of rooms. The room will change color based on the percentage 
                of its current capacity out of its max capacity.
 
        </Card.Text>
        </Card.Body>
        </Card>  

        </Carousel.Item>

        

       
        <Carousel.Item>
           
        < Card style={{ width: '100%'  ,margin:"auto",maxWidth:"100%", backgroundColor:"#c89666"}}>            
        <Card.Body>
                                                               
        <Card.Title style={{fontWeight:"bold", fontSize:"20px"}} >Account</Card.Title>
        <Card.Text style={{ fontSize:"15px" ,marginLeft:"20px"}}>
            This is an example page where the attendees could access their QR code and scan on a RFID scanner to register themselves
            entering or exiting a room during an event.
        </Card.Text>
        </Card.Body>
        </Card>  
        </Carousel.Item>
        <Carousel.Item>
        <Card style={{ width: '100%'  ,margin:"auto",maxWidth:"100%", backgroundColor:"#c89666"}}>            
        <Card.Body>
                                                              
        <Card.Title style={{fontWeight:"bold", fontSize:"20px"}} >Map</Card.Title>
        <Card.Text style={{ fontSize:"15px" ,marginLeft:"20px"}}>
             This page is a work in progress.
 
        </Card.Text>
        </Card.Body>
        </Card>  

        </Carousel.Item>                                               
        </Carousel>

              
          
        </div>
        );
    }



}

export default Home;
