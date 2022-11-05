import React from "react";


const Preloader = (props) => {
    return (
        <div>
            <img style={{zIndex: 4, display: 'absolute'}} src={props.Spin}/>
        </div>
    )
}

export default Preloader