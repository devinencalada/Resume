import React, { Component } from 'react';
import './About.css';
import { Grid, Image } from 'semantic-ui-react';
import profilePic from '../../images/profilePic.png';

import './About.css';

class About extends Component{
    render(){
        return(
            <Grid columns="equal" divided>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Image src={profilePic} size="large" circular centered/>
                    </Grid.Column>
                    <Grid.Column>
                        Information
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default About;
