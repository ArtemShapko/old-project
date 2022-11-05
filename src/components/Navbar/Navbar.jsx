import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Navbar.module.css' 
import BestFrends from "./BestFrends/BestFrends";



const Navbar = (props) => {
    console.log(props.frendsData)
    //let postElements = props.frendsData.map(currentValue => <BestFrends id={currentValue.id + '.'} frend={currentValue.frend}></BestFrends>)
    
    return (<nav className={classes.nav}>
        <div className={classes.item}><NavLink to="/profile">Profile</NavLink></div>
        <div className={classes.item}><NavLink to="/dialogs">Messages</NavLink></div>
        <div className={classes.item}><NavLink to="/users">users</NavLink></div>
        <div className={classes.item}><NavLink to="#">News</NavLink></div>
        <div className={classes.item}><NavLink to="#">Music</NavLink></div>
        <div className={classes.item}><NavLink to="#">Settings</NavLink></div>
        {/* {
            postElements
        } */}
        </nav>)
        
        

          
}

export default Navbar

