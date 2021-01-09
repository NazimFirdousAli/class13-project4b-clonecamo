import React from 'react';

import services6 from '../images/services-6.svg'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import useWebAnimations,{backInLeft} from "@wellyshen/use-web-animations";



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(to right, #9803be, #660798)',
        boxSizing: 'borderBox',
        color: 'White',
    },
    image: {

        marginLeft: '50px',
    },
    pic1: {
        display: 'flex',
        height: '600px',
        width: '600px'
    },
    para: {
        textAlign: 'Left',
        marginTop: '150px',
    },
    heading: {
        fontSize: '50px',
        fontWeight: '500',
        fontFamily: "'Arial', 'sans-serif'",
        marginLeft: '20px',
        marginRight: '10px',
    },
    desc: {
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
    const {keyframes,timing} = backInLeft;
    const { ref } = useWebAnimations({
        keyframes,
        timing: {
          ...timing,
          delay: 1000, // Delay 1s
          duration: timing.duration * 2, // Speed up the animation
        },
      });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className={classes.image}>
                        <img ref={ref} className={classes.pic1} src={services6} alt='aaa' />
                    </div>
                </Grid>
                <Grid item xs={6}>
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
        </div>
    )
}
export default UxWriting;