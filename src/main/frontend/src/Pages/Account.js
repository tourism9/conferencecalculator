import React, { Component } from "react";
import qr from './qr.png';
import './styles.css';


class Account extends Component {
    
    render() {

        return (
          <div className="Account">

              <h1>Event Participant Information</h1>
              <p style={{textAlign:"center", fontSize:"25px", marginTop:"2%"}}>Room Check-in/Check-out QR Code:
                <img style={{borderStyle:"solid", marginTop:"1%"}} src={qr} alt="QR Code"/></p>
          </div>
        );
      }
    

}




export default Account;

