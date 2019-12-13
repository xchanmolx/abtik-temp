import React, { Component } from 'react';

import classes from './About.module.css';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

const { Title } = Typography;

const TextRandom = () => (
    <Random 
    text="ABOUT" 
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.6}
    effectChange={2.2} />
);

class About extends Component {    

    render () {
        return (
                <div className={classes.About}>  
                    <Title style={{color: "palevioletred"}}><TextRandom /></Title>                                    
                </div>
        );
    }    
}    

export default About;