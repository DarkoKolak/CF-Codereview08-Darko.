import React from 'react';
import NavComponent from "./navbar";
import HeaderpicComponent from "./headerpic";
import HeadertextComponent from "./headertext";

function HeaderComponent(){

	return(
			<div className = "headercontainer">
			<HeaderpicComponent />
			<HeadertextComponent/>
			<NavComponent />
			</div>

		)
}


export default HeaderComponent;