import React from "react";
import classes from './BestFrends.module.css'

const BestFrends = (props) => {


    return (
        <div className={classes.BestFrends}>    
        { props.id }
        { props.frend }
        </div>
    )
}
export default BestFrends