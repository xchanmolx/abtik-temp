import React, { Component } from 'react';

import classes from './Home.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import { Random } from 'react-animated-text';

const TextRandom = () => (
    <Random 
    text="HOME" 
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.3}
    effectChange={2.2} />
);

class Home extends Component {

    render () {
        
        return (
            <Auxiliary>
                <div className={classes.Home}>
                    <h1><TextRandom/></h1>
                </div>
            </Auxiliary>
        );
    }
}

export default Home;