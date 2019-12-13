import React from 'react';

import classes from './Contact.module.css';
import { Random } from 'react-animated-text';
import { Typography } from 'antd';

const { Title } = Typography;

const TextRandom = () => (
    <Random 
    text="CONTACT"
    effect="stretch" 
    effectDirection="up"
    effectDuration={0.9}
    effectChange={2.2} />
);

const contact = () => (
    <div className={classes.Contact}>
        <Title style={{color: "palevioletred"}}><TextRandom /></Title>
    </div>
);

export default contact;