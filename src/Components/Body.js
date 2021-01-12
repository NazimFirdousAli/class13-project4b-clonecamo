import React, { useRef } from 'react';
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
        height: '100%',
    },
    parentGrid: {


    },

    grid1: {
        display: 'flex',
        marginTop: '150px',
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            marginTop: '50px',
            justifyContent: 'center'
        },

    },
    grid2: {
        display: 'flex',
        marginTop: '150px',
        color: 'White',
        fontFamily: "'Montserrat', sans-serif",
        justifyContent: "flex-end",
        [theme.breakpoints.down("sm")]: {
            paddingTop: '0px',
            justifyContent: 'center'
        },

    },
    div2: {
    maxWidth: 500,
    padding: 50,
    marginBottom: 250,
    [theme.breakpoints.down("md")]: {
        textAlign: "center",
        marginBottom: 70,
      },
      [theme.breakpoints.down("xs")]: {
        textAlign: "center",
        padding: 10,
        marginBottom: 40,
      },

    },
    heading1: {

        fontSize: '100px',
        fontWeight: '500',
        marginTop: '0',
        marginBottom:'0',
        [theme.breakpoints.down("md")]: {
            fontWeight: '700',
            fontSize: 65,
            marginTop: '-110px',
          },
        

    },
    heading2: {
        fontSize: '62px',
        fontWeight: '400',
        marginTop: -20,
        marginBottom:0,
        width:'100%',
        [theme.breakpoints.down("md")]: {
            fontSize: 38,
            marginTop:'0px'
          },

    },
    para: {
        color: 'White',
        textAlign: 'left',
        fontSize: '24px',
        fontWeight: '400',
        paddingRight: '80px',
        [theme.breakpoints.down("md")]: {
            fontSize: 22,
            textAlign:'center',
            padding:0,
        }
    },

    button1: {
        display: 'flex',
        padding:'40px 0px',
        borderRadius: "40px",
        [theme.breakpoints.down("md")]: {
            paddingLeft:'35px',
            margin: "auto",
            marginTop:'-25px',
            justifyContent: 'center'

        },
    },
    

    message: {
        background: 'linear-gradient(to bottom, #23ffdb, #1b5dbf)',
        color: 'White',
        width: '200px',
        heigth: '50px',
        padding: '10px',
        borderRadius: '300px',
        [theme.breakpoints.down("md")]: {
            padding:'2 3 ',
            fontSize:12
        },
    },
    image1: {
        height: 500,
        position: "absolute",
        zIndex: 0,
        [theme.breakpoints.down("md")]: {
            height: 400,
          },
          [theme.breakpoints.down("sm")]: {
            height: 300,
            width: "100%",
          },
          [theme.breakpoints.down("xs")]: {
            height: 250,
            width: "100%",
          },
        
    },

    image2: {
        height: 500,
        position: "absolute",
        zIndex: 2,
        [theme.breakpoints.down("md")]: {
            height: 400,
          },
          [theme.breakpoints.down("sm")]: {
            height: 300,
            width: "100%",
          },
          [theme.breakpoints.down("xs")]: {
            height: 250,
            width: "100%",
          },
    },

    image3: {
        height: 500,
        position: "absolute",
        zIndex: 1,
        [theme.breakpoints.down("md")]: {
            height: 400,
          },
          [theme.breakpoints.down("sm")]: {
            height: 300,
            width: "100%",
          },
          [theme.breakpoints.down("xs")]: {
            height: 250,
            width: "100%",
          },
    },
    imgs: {
        position: 'relative',
        width: '100%',
        height: 500,
        [theme.breakpoints.down("md")]: {
            height: 400,
          },
          [theme.breakpoints.down("sm")]: {
            height: 300,
          },
          [theme.breakpoints.down("xs")]: {
            marginBottom: -50,
          },

    }

}));


function Body() {
    const classes = useStyles();

    const brainRef = useRef(null);
    const lightRef = useRef(null);

    useWebAnimations({
        ref: brainRef,
        keyframes: [
            { transform: 'translateY(0px)' },
            { transform: 'translateY(-40px)' },
            { transform: 'translateY(0px)' },
        ],
        timing: {
            duration: 6000,
            iterations: Infinity,
        }
    })

    useWebAnimations({
        ref: lightRef,
        keyframes: [
            { opacity: 10 },
            { opacity: 0 },
            { opacity: 5 },
            { opacity: 0 },
            { opacity: 4 },

        ],
        timing: {
            duration: 500,
            iterations: Infinity,
        }
    })





    return (
        <div className={classes.root}>
            <Grid container spacing={0} direction='row-reverse' className={classes.parentGrid}>
                <Grid item xs={12} sm={12} md={6} className={classes.grid1}>
                    <div className={classes.imgs} >
                        <img ref={lightRef} src={Intro_Front_Layer} className={classes.image3} alt='aba' />
                        <img ref={brainRef} src={Intro_Brain} className={classes.image2} alt='aaa' />
                        <img src={Intro_Featured_image} className={classes.image1} alt='ala' />
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}className={classes.grid2}>
                    <div className={classes.div2}>
                        <h1 className={classes.heading1}>CORTEX</h1>
                        <h2 className={classes.heading2}> COPYWRITER</h2>
                        <p className={classes.para}>
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