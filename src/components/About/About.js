import React, { Component } from 'react';
import './About.css';
import { Grid, Image, Header } from 'semantic-ui-react';
import profilePic from '../../images/profilePic.png';

import './About.css';

class About extends Component{
    render(){
        return(
            <Grid container stackable columns={2}>
                    <Grid.Column>
                        <Image src={profilePic} size="large" circular centered/>
                    </Grid.Column>
                    <Grid.Column>
                            <Header as="h2">About Me</Header>
                            I am a detailed oriented engineer with 1 year of experience in web development.
                            I have a solid mathematical background to develop advanced and efficient algorithms and
                            am very passionate about learning and using new emerging technologies. As a programmer I
                            emphasize good code quality by following coding standards, Test-driven development, Pair
                            programming, and code reviews. I am confident that my experience in the field qualifies me
                            for consideration.
                    </Grid.Column>

            </Grid>
        )
    }
}

export default About;
