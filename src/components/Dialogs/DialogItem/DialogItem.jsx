import React from "react";
import { NavLink } from "react-router-dom";
import classes from './DialogItem.module.css' 

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog}>
            <div className={classes.item}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAA
          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">
          </img>
                <NavLink className={classes.text} to={path}>{props.name}</NavLink>
             </div>
        </div>
    ) 
}

export default DialogItem