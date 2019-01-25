import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
 

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Donat NSHIMIYIMANA</h2>
                        <img 
                            src="https://mitadmissions.org/wp-content/uploads/2018/07/avatar_5492.jpg" 
                            alt=" Black Avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        I am currently student on OpenClassrooms, Europe's largest online education platform. 
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'anton'}}>
                                        <i className="fa fa-phone-square"> (+250) 785 039 498</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'anton'}}>
                                        <i className="fa fa-fax"> (+250) 726 071 995</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'anton'}}>
                                        <i className="fa fa-envelope">donatnshimiyimana@gmail.com</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'anton'}}>
                                        <i className="fa fa-skype"> 078 503 9498</i>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'anton'}}>
                                        <i className="fa fa-whatsapp"> (+250) 726 071 995</i>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;