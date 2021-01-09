import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RainbowText from 'react-rainbow-text';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: 'fixed',
      width:'100%'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      backgroundColor:'rgba(255, 255, 255, 0.18)',
      border:"1px solid rgba(255, 255, 255, 0.39)"
    },
    title: {
      flexGrow: 1,
      textAlign:'center',
      fontSize:'18px',
      fontFamily:"'Arial', 'sans-serif'",
    },
    appbar:{
        background: 'linear-gradient(90deg, rgba(75,6,193,1) 0%, rgba(206,2,189,1) 100%);',
    },

  }));


function Navbar(){
    const classes = useStyles();

    return(
        
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>   
            <Typography variant="h6" className={classes.title}>
              <RainbowText overflow='hidden'>
              Switch experience
              </RainbowText>
              <ArrowDropDownIcon className={classes.dropdown}/>
              
            </Typography>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
export default Navbar;