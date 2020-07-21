import React, { Component } from "react";
import history from './../history';
import Modal from 'react-bootstrap/Modal'
import { Form, FormGroup, Button, Dropdown } from 'react-bootstrap';
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

                <h1>Home page</h1>

               
                {//<Table roomsToRender={rooms}/>
                //<Button variant="primary" style={{"marginLeft":"auto","height":"70px"}} className="btn-lg" >Start simulation</Button>
                }
            
            
        </div>
        );
    }



}

export default Home;