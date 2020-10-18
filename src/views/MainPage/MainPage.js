/*eslint-disable*/ import React from 'react';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// @material-ui/icons
import Favorite from '@material-ui/icons/Favorite';
// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
// import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from 'components/Parallax/Parallax.js';

import mainPageStyle from 'assets/jss/material-kit-pro-react/views/mainPageStyle.js';

// Sections for this page
import SectionTech from './Sections/TechStuff.js';

const useStyles = makeStyles(mainPageStyle);

export default function MainPage({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();
    return (
        <div>
            <Header
                color='transparent'
                brand='Dano Colombo'
                // links={<HeaderLinks dropdownHoverColor="info" />}
                fixed
                changeColorOnScroll={{
                    height: 300,
                    color: 'info',
                }}
                {...rest}
            />
            <Parallax image={require('assets/img/bg8.jpg')} filter='dark'>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                            <h1 className={classes.title}>
                                and here we are...
                            </h1>
                            <h4>
                                Welcome to my little dot on the internet. Not
                                sure how you found me or what you might be
                                looking for, but here you are.
                            </h4>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <SectionTech />
                    {/* <SectionFood /> */}
                    {/* <SectionWork /> */}
                </div>
            </div>
            <Footer
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    {/* <a
                    href="https://www.creative-tim.com/?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a> */}
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    {/* <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a> */}
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    {/* <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a> */}
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    {/* <a
                    href="https://www.creative-tim.com/license?ref=mkpr-landing"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a> */}
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , Dano Colombo
                        </div>
                    </div>
                }
            />
        </div>
    );
}
