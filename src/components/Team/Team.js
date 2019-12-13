import React, { Component } from 'react';

import classes from './Team.module.css';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

const { Title } = Typography;

const TextRandom = () => (
    <Random 
    text="TEAM" 
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.6}
    effectChange={2.2} />
);

class About extends Component {    

    render () {
        return (
                <div className={classes.Team}>  
                    <Title style={{color: "#FF851B"}}><TextRandom /></Title>                                    
                </div>
        );
    }    
}    

export default About;