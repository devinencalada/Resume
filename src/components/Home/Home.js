import React, { Component } from 'react';
import { Container, Header, Button, Grid } from 'semantic-ui-react';
import './Home.css';

class Home extends Component{
    render(){
        return(
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
                            <Grid.Column>
                                <a href="https://www.facebook.com/devin.encalada" target="_blank" rel="noopener noreferrer">
                                    <Button circular color='facebook' icon='facebook' />
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href="https://twitter.com/devin_encalada" target="_blank" rel="noopener noreferrer">
                                    <Button circular color='twitter' icon='twitter' />
                                </a>
                            </Grid.Column>
                            <Grid.Column>
                                <a href="https://www.linkedin.com/in/john-encalada-b6680b146" target="_blank" rel="noopener noreferrer">
                                    <Button circular color='linkedin' icon='linkedin' />
                                </a>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
        )
    }
}

export default Home;
