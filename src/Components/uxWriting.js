import React from 'react';

import services6 from '../images/services-6.svg'
import services7 from '../images/services-7.svg'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import useWebAnimations, { fadeInLeft } from "@wellyshen/use-web-animations";
import Fade from 'react-reveal/Fade';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(to right, #9803be, #660798)',
        boxSizing: 'borderBox',
        color: 'White',
        [theme.breakpoints.down("md")]: {
            paddingBottom: 50,
        },
    },
    gridLeft: {
        display: 'flex',
        justifyContent: "flex-end",
        padding: "100px 50px",

        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            justifyContent: "center",
            padding: 0,
            marginTop: 0,
        },
    },
    gridRight: {
        display: 'flex',
        justifyContent: "flex-start",
        padding: "100px 50px",
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            justifyContent: "center",
            padding: 0,
            marginTop: 10,
        },

    },

    image: {
        marginTop: '100px',
        width: '100%',
        [theme.breakpoints.down("md")]: {
            width: "60%",
        },
        [theme.breakpoints.down("sm")]: {
            width: "80%",
        },
        [theme.breakpoints.down("xs")]: {
            width: "90%",
        },

    },

    para: {
        textAlign: 'Left',
        marginTop: '150px',
        [theme.breakpoints.down("md")]: {
            marginTop: '-50px'
        }

    },
    
    para1: {
        textAlign: 'Left',
        [theme.breakpoints.down("md")]: {
            marginTop: '40px'
        }

    },
    heading: {
        fontSize: '50px',
        fontWeight: '500',
        fontFamily: "'Arial', 'sans-serif'",
        marginLeft: '20px',
        marginRight: '10px',
        [theme.breakpoints.down("md")]: {
            textAlign:'center',
            marginTop:'60px'
        }
    },
    desc: {
        fontFamily: "'Arial', 'sans-serif'",
        marginLeft: '20px',
        marginRight: '20px',
        display: 'block',
        fontSize: 20,
    },
    desc1: {
        fontFamily: "'Arial', 'sans-serif'",
        marginLeft: '20px',
        marginRight: '20px',
        display: 'block',
        fontSize: 20,
    },
    
    list: {
        display: "inline",
        marginTop: -7,
    },
    listItem: {
        fontSize: 16,
        fontWeight: 200,
        float: "left",
        paddingTop: "25px",
        paddingRight: "50px",
    }

}));

function UxWriting() {
    const classes = useStyles();
    // const {keyframes,timing} = fadeInLeft;
    // const { ref } = useWebAnimations({
    //     keyframes,
    //     timing: {

    //       delay: 1000, // Delay 1s
    //       duration: timing.duration * 2, // Speed up the animation
    //       overflow: 'hidden',
    //     },
    //   });

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridLeft}  >
                    <div className={classes.image}>
                        <Fade left big>
                            <img src={services6} alt='aaa' />
                        </Fade>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridRight}>
                    <div className={classes.para}>
                        <h1 className={classes.heading}>UX Writing</h1>
                        <p className={classes.desc}>I develop clear and useful text in product interfaces to help users reach a specific goal, whether that's completing a form or tapping a button. This includes every type of content from on-screen help systems, user onboarding and in-app messages to push notifications and tooltips.</p>
                        <div className={classes.list}>
                            <ul>
                                <li className={classes.listItem}>Microcopy</li>
                                <li className={classes.listItem}>Taxonomy & Labeling</li>
                                <li className={classes.listItem}>Chatbots</li>
                                <li className={classes.listItem}>User Research</li>
                                <li className={classes.listItem}>Content Style Guide</li>
                                <li className={classes.listItem}>User Testing</li>
                                <li className={classes.listItem}>Design Principles</li>
                                <li className={classes.listItem}>Prototype</li>
                            </ul>
                        </div>
                    </div>

                </Grid>

            </Grid>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridLeft}  >
                    <div className={classes.para1}>
                        <h1 className={classes.heading}>Website Copywriting</h1>
                        <p className={classes.desc1}>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>


                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6} className={classes.gridRight}>
                    <div className={classes.image}>
                        <Fade right big>
                            <img src={services7} alt='aaa' />
                        </Fade>
                    </div>

                </Grid>

            </Grid>
        </div>
    )
}
export default UxWriting;