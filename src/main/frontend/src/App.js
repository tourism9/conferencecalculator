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

         
         <div className="navButton">
            <Button style={buttonStyle} variant="secondary"onClick={() => history.push('/') } >Home</Button>
            <Button style={buttonStyle} variant="secondary"onClick={() => history.push('/Map') } >Map</Button>
            <Button  style={buttonStyle} variant="secondary"onClick={() => history.push('/Calculator')}>Calculator</Button>
            <Button   style={buttonStyle} variant="secondary" onClick={() => history.push('/Rooms')}>Rooms</Button>
            <Button style={buttonStyle} variant="secondary" onClick={() => history.push('/Account')}>Account</Button>
         </div>

          <Routes />
          {//These are navigation buttons. We can add image to the button later.
          }
      </div>

    );
}
export default App;
