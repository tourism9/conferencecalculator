import React from 'react';
import './App.css';
import { Button , Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap';

import Routes from './Routes';
import history from './history';


function App(){
  const buttonStyle={
    
  }
  /*
  <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>

        <Button style={buttonStyle} variant="info" onClick={() => history.push('/') } >Home</Button>
        <Button style={buttonStyle} variant="info" onClick={() => history.push('/Map') } >Map</Button>
            <Button  style={buttonStyle} variant="info" onClick={() => history.push('/Calculator')}>Calculator</Button>
            <Button   style={buttonStyle} variant="info" onClick={() => history.push('/Rooms')}>Rooms</Button>
            <Button style={buttonStyle} variant="info"  onClick={() => history.push('/Account')}>Account</Button>
      */

      /*
 <Nav.Link href="/rooms"><Button style={buttonStyle} variant="info" onClick={() => history.push('/Map') } >Map</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info" onClick={() => history.push('/Calculator')}>Calculator</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info" onClick={() => history.push('/Rooms')}>Rooms</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info"  onClick={() => history.push('/Account')}>Account</Button></Nav.Link>

      */

      
  return (
    
      <div className="App" >
     
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">EventAndPrevent</Navbar.Brand>
        
        <Nav className="mr-auto">
        <Container expand="lg">
        <Nav.Link><Button style={buttonStyle} variant="info" onClick={() => history.push('/Map') } >Map</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info" onClick={() => history.push('/Calculator')}>Calculator</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info" onClick={() => history.push('/Rooms')}>Rooms</Button></Nav.Link>
        <Nav.Link><Button style={buttonStyle} variant="info"  onClick={() => history.push('/Account')}>Account</Button></Nav.Link>
        </Container> 
        </Nav>
        
         </Navbar>

      
            <Routes />
      </div>

    );
}
export default App;
