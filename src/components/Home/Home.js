import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <Jumbotron>
                    <h2>
                        Devin Encalada
                    </h2>
                    <p>Resume website</p>
                </Jumbotron>
                <Link to="/about">
                    <Button bsStyle="primary">About</Button>
                </Link>
            </div>
        )
    }
}

export default Home;
