import React, { Component } from "react";
import history from './../history';
import Modal from 'react-bootstrap/Modal'
import {  Card,Button, Container } from 'react-bootstrap';
import conventionCenter from './conventionCenter.jpg';
class Home extends Component {
    state={
        show:false
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
            
                
              <Container>
                <Card style={{ width: '100%'  ,margin:"auto", marginTop:"1%", backgroundColor:""}}>
                
                <Card.Img  style={{   width: "100%", height:"600px", objectFit: "cover"}} variant="top" src={conventionCenter} />
                <div style={{ fontSize:"10px", color:"grey"}} >Picture of Indiana Convention Center</div>
                
                <Card.Body>
                <Card.Title style={{fontWeight:"bold", fontSize:"30px"}} >Conference Calculator</Card.Title>
                <Card.Text style={{ fontSize:"30px" ,marginLeft:"20px"}}>
                    This is an App that aims to making hosting large events much safer in the time of COVID-19.

                     
                </Card.Text>
                </Card.Body>

                </Card>
            </Container>
      
        </div>
        );
    }



}

export default Home;