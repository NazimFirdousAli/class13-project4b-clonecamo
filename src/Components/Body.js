import React,{useRef} from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";


import Intro_Featured_image from '../images/Intro_Featured_Image_Empty.svg';
import Intro_Brain from '../images/Intro_Brain.svg';
import Intro_Front_Layer from '../images/Intro_Front_Layer.svg';


import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'radial-gradient(circle, rgba(206,2,189,1) 0%, rgba(75,6,193,1) 70%)',
        boxSizing: 'borderBox',
        height: '600px',
        width:'100%'

    },

    grid1: {
        display: 'flex',
        [theme.breakpoints.up("sm")]: {
            paddingTop: 100,
            justifyContent: "flex-start",
        },
        [theme.breakpoints.down("sm")]: {
            paddingTop: 20,
            justifyContent: "center",
        },
    },
    grid2: {
        display: 'flex',

        [theme.breakpoints.up("sm")]: {
            paddingTop: 100,
            justifyContent: "flex-end",
            textAlign: 'center',
        },

        [theme.breakpoints.down("sm")]: {
            paddingTop: 0,
            justifyContent: "center",
        },
    },
    div2: {
        color: 'White',
        fontFamily: "'Montserrat', sans-serif",

    },
    div3: {

        fontSize: '100px',
        fontWeight: '500',
        marginTop: '-20px',
    },
    div4: {
        fontSize: '62px',
        fontWeight: '400',
        marginTop: '-80px',

    },
    div5: {
        color: 'White',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '400',
        margin: '50px',
        paddingLeft: '90px',
        paddingRight: '80px'

    },

    button1: {
        padding: "0.8rem 1.5rem",
        marginLeft: '115px',
        display: 'flex',
        marginRight: '105px',
        alignItems: 'left',

    },

    message: {
        background: 'linear-gradient(to bottom, #23ffdb, #1b5dbf)',
        color: 'White',
        width: '200px',
        heigth: '50px',
        padding: '10px',
        borderRadius: '300px',
    },
    image1: {
        height: 500,
        position: "absolute",
        zIndex: 0,
    },

    image2: {
        height: 500,
        position: "absolute",
        zIndex: 0,
    },

    image3: {
        height: 500,
        position: "absolute",
        zIndex: 0,
    },

}));


function Body() {
    const classes = useStyles();

    const brainRef = useRef(null);
    const lightRef = useRef(null);

    useWebAnimations({
        ref: brainRef,
        keyframes:[
            {transform:'translateY(0px)'},
            {transform:'translateY(-40px)'},
            {transform:'translateY(0px)'},
        ],
        timing:{
            duration:6000,
            iterations: Infinity,
        }
    })

    useWebAnimations({
        ref: lightRef,
        keyframes:[
            {opacity:0},
            {opacity:0},
            {opacity:0.1},
            {opacity:0},
            {opacity:0},
            {opacity:0},
            {opacity:0.3},
            {opacity:0.4},
            
        ],
        timing:{
            duration:500,
            iterations: Infinity,
        }
    })

    



    return (
        <div className={classes.root}>
            <Grid container spacing={0} direction='row-reverse' className={classes.parentGrid}>
                <Grid item xs={12} sm={6}>
                    <div className={classes.imgs} >
                        <img ref={lightRef} src={Intro_Front_Layer} className={classes.image3} alt='aba' />
                        <img ref={brainRef} src={Intro_Brain} className={classes.image2} alt='aaa' />
                        <img src={Intro_Featured_image} className={classes.image1} alt='ala' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}>
                    <div className={classes.div2}>
                        <h1 className={classes.div3}>CORTEX</h1>
                        <h2 className={classes.div4}> COPYWRITER</h2>
                        <p className={classes.div5}>
                            Enhance your communications with psychology-based copywriting and UX writing
                        </p>
                        <div className={classes.button1}>
                            <Button className={classes.message}>Send a message</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );

}
export default Body;