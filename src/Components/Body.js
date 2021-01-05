import React from 'react';
import Intro_Featured_image from '../images/Intro_Featured_Image_Empty.svg';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'radial-gradient(circle, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 70%)',
        boxSizing: 'borderBox',
    },
    grid1: {
        display: 'flex',
        [theme.breakpoints.up("sm")]: {
            paddingTop: 50,
            justifyContent: "flex-end",
        },

        [theme.breakpoints.down("sm")]: {
            paddingTop: 0,
            justifyContent: "center",
        },
    },
    grid2: {
        display: 'flex',
        textAlign:'center',
        marginTop:'-10px',
        [theme.breakpoints.up("sm")]: {
            paddingTop: 100,
            justifyContent: "flex-start",
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: 20,
            justifyContent: "center",
        },
    },
    div2: {
        color: 'White',

    },
    div3: {

        fontSize: '100px',
        fontWeight: '500',
        marginTop:'-20px',
    },
    div4: {
        fontSize: '62px',
        fontWeight: '400',
        marginTop: '-100px',

    },
    div5: {
        color: 'White',
        textAlign:'left',
        fontSize: '22px',
        fontWeight: '200',
        padding: '50px',
        paddingTop: '0px',
        paddingLeft: '0px',
        paddingRight: '182px'


    }
}));


function Body() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} direction='row-reverse' className={classes.parentGrid}>
                <Grid item xs={12} sm={6}>
                    <div >
                        <img src={Intro_Featured_image} alt='ala' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}>
                    <div className={classes.div2}>
                        <h1 className={classes.div3}>CORTEX</h1>
                        <h2 className={classes.div4}> COPYWRITER</h2>
                        <p className={classes.div5}>
                        Enhance your communications with psychology-based copywriting and UX writing
                        </p>
                    </div>
                </Grid>
            </Grid>
        </div>
    );

}
export default Body;