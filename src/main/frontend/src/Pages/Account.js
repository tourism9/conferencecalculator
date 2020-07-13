import React, { Component } from "react";
import qr from './qr.png';
import './styles.css';


class Account extends Component {
    
    render() {

        return (
          <div className="Account">

              <h1>Account page</h1>
              <p><img src={qr} alt="QR Code"/></p>
          </div>
        );
      }
    

}




export default Account;

