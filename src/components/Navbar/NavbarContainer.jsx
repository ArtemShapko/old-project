import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";


let mapStateToPropse = (state) => {
    return {
        frendsData: state.Navbar.frendsData
    }
}
let mapDiaspathToPropse = (dispatch) => {
    return {
        testNavbar() {
            console.log(dispatch)
        }
    }
}
console.log()

const NavbarContainer = connect(mapStateToPropse, mapDiaspathToPropse)(Navbar)
    

export default NavbarContainer