import React from 'react';
import './App.css';
import { Button } from 'react-bootstrap';

import Routes from './Routes';
import history from './history';


function App(){
  const buttonStyle={
   
    
    marginLeft:"1%",
    padding:"2%",
   
    
    
  }

  return (
    
      <div className="App" >
         <Routes />
         {//we can add image to the button later. 
         }
         
         <Button style={buttonStyle} variant="secondary"onClick={() => history.push('/') } >Map</Button>
         
         <Button style={buttonStyle} variant="secondary"onClick={() => history.push('/Calculator')}>Calculator</Button>
         
         <Button style={buttonStyle} variant="secondary" onClick={() => history.push('/Rooms')}>Rooms</Button>
         <Button style={buttonStyle} variant="secondary" onClick={() => history.push('/Account')}>Account</Button>
         
      </div>

    );
}
export default App;