import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
 

class Landing extends Component {
    render() {
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://mitadmissions.org/wp-content/uploads/2018/07/avatar_5492.jpg" alt=" Black Avatar" className="avatar-img"/>
                    </Cell>

                    <div className="banner-text">
                        <h1>Full Stack Web developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | Javascript | React | React native | nodeJs | Express | MongoDB | Csharp | Rubby</p>

                        <div className="social-links">
                            {/*LinkedIn */}
                            <a href="www.linkedin.com/in/donat-nshimiyimana-180a79173" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                            {/*Free code camp */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true"/>
                            </a>

                            {/*Github */}
                            <a href="https://github.com/donatnshimiyimana" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Landing;