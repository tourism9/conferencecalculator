import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';

class Home extends Component {

    // temporary data for now. Need to retrieve information from database using GET with API


    //*************************************************************************** */
    // <Button variant="btn btn-success" onClick={() => history.push('/Products')}>Click button to view products</Button>
    render() {

        return (
            <div className="Home">

                <h1>Home page</h1>

                <form>

                </form>
                {//<Table roomsToRender={rooms}/>
                }
            </div>
        );
    }



}

export default Home;