import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
 

class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/*Projects 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover '}} >React Project #1</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with ReactJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover '}} >React Project #2</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with ReactJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://s3-us-west-2.amazonaws.com/devcodepro/media/blog/como-funciona-reactjs.png) center / cover '}} >React Project #3</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with ReactJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    {/*Projects 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) center / cover '}} >React Project #1</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with AngularJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) center / cover '}} >React Project #2</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with AngularJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) center / cover '}} >React Project #3</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with AngularJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )  
        }else if(this.state.activeTab === 2){
            return(
                <div className="projects-grid">
                    {/*Projects 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://jsavalle.com/wp-content/uploads/2018/04/1-KgEvwnPZwvfEL5mSi4Cyg.jpeg) center / cover '}} >React Project #1</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with VueJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://jsavalle.com/wp-content/uploads/2018/04/1-KgEvwnPZwvfEL5mSi4Cyg.jpeg) center / cover '}} >React Project #2</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with VueJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://jsavalle.com/wp-content/uploads/2018/04/1-KgEvwnPZwvfEL5mSi4Cyg.jpeg) center / cover '}} >React Project #3</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with VueJS.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }else if(this.state.activeTab === 3){
            return(
                <div className="projects-grid">
                    {/*Projects 1*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(http://www.programmings4beginners.com/wp-content/uploads/2018/01/mongodb.png) center / cover '}} >React Project #1</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with MongoBD.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 2*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(http://www.programmings4beginners.com/wp-content/uploads/2018/01/mongodb.png) center / cover '}} >React Project #2</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with MongoBD.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                    {/*Projects 3*/}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: '#000000', height: '176px', background: 'url(http://www.programmings4beginners.com/wp-content/uploads/2018/01/mongodb.png) center / cover '}} >React Project #3</CardTitle>
                        <CardText>
                            <p>You can check on the link below to see the project that I've done with MongoBD.</p> 
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>LinkedIn</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share"/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoBD</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;