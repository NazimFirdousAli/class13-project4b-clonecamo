import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(to right, #570091, #7522b6)',
        height:'100px',
        boxSizing: 'borderBox',
        color: 'White',
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            
        </div>
    )

}
export default Footer;