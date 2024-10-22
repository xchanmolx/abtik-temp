import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import { Icon } from 'antd';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact><Icon type="home" /> Home</NavigationItem>
        <NavigationItem link="/preparedness"><Icon type="project" /> Preparedness</NavigationItem>
        <NavigationItem link="/team"><Icon type="idcard" /> Team</NavigationItem>
        <NavigationItem link="/contact"><Icon type="phone" /> Contact</NavigationItem>
    </ul>
);

export default navigationItems;