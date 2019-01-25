import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
 

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                        <img src="https://mitadmissions.org/wp-content/uploads/2018/07/avatar_5492.jpg" 
                        alt=" Black Avatar"
                        style={{height: '200px'}}
                        />
                        </div>

                        <h3 style={{paddingTop: '2em'}}>Donat NSHIMIYIMANA</h3>
                        <h4 style={{color: 'grey'}}>Programmer</h4>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>My profession goal  are basing on volunteering in community activities, Especially in technology and doing the careful work practices management, finding the solutions of community problems, the supportive and  creation of innovative processes and other ways of improving the substandard of living.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                        <h5>Address</h5>
                        <p>Kigali-Rwanda</p>
                        <p>KK 297 Street, Kigali</p>

                        <h5>Phone Number</h5>
                        <p>(+250) 785 039 498</p>
                        <p>(+250) 726 071 995</p>

                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        
                        <Education 
                            startYear={2018}
                            endYear="Present"
                            schoolName="OpenClassrooms"
                            schoolDescription="OpenClassrooms is the Europe's largest online education platform, Where I'm studying programming c# .NET application and also coding in Html/css, Bootstrap, ReactJS, MongoDB."
                        />

                        <Education 
                            startYear={2016}
                            endYear={2020}
                            schoolName="University of Rwanda"
                            schoolDescription="I'm currently an IT(Information and Technology) student in the University of Rwanda, CST(College of science and technology)"
                        />

                        <Education 
                            startYear={2013}
                            endYear={2015}
                            schoolName="Kayonza modern secondary school(KMMS)"
                            schoolDescription="I've completed my high school in Kayonza modern secondary school(KMMS), where I was studying Math Physics and Computer(MPC)"
                        />

                        <Education 
                            startYear={2010}
                            endYear={2012}
                            schoolName="College de Butamwa(CDB)"
                            schoolDescription="I've completed my ordinary level in College de Butamwa(CDB)"
                        />

                        <Education 
                            startYear={2010}
                            endYear={2012}
                            schoolName="Nyakabanda Primary school"
                            schoolDescription="I've completed my primary level in Nyakabanda Primary school"
                        />


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;