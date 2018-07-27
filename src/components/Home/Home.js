import React, { Component } from 'react';
import { Container, Header, Button, Grid } from 'semantic-ui-react';
import './Home.css';

class Home extends Component{
    generateButton(link, icon){
        return(
            <div className="button">
                <Grid.Column>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <Button circular color={icon} icon={icon} />
                    </a>
                </Grid.Column>
            </div>
        )

    }
    render(){
        return(
            <div className="home">
                <Container text>
                    <Grid>
                        <Grid.Row>
                            <Header
                                as='h1'
                                content='John Devin Encalada'
                                style={{
                                    fontSize: '4em',
                                    fontWeight: 'normal',
                                    marginBottom: 0,
                                    marginTop: '3em',
                                }}
                            />
                            <Header
                                as='h2'
                                content='Software Engineer'
                                style={{
                                    fontSize: '1.7em',
                                    fontWeight: 'normal',
                                    marginTop: '1.5em',
                                }}
                            />
                        </Grid.Row>
                        <Grid.Row columns={10}>
                            {this.generateButton("https://www.facebook.com/devin.encalada", "facebook")}
                            {this.generateButton("https://twitter.com/devin_encalada", "twitter")}
                            {this.generateButton("https://www.instagram.com/devinencalada", "instagram")}
                            {this.generateButton("https://www.linkedin.com/in/john-encalada-b6680b146", "linkedin")}
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Home;
