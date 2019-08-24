import React from "react";
import FooterlistComponent from "./FooterlistComponent";
import FooterpicComponent from "./FooterpicComponent";
import FootertextComponent from "./FootertextComponent";

function FooterComponent (){

	return(
		<div id="foo">
		<FooterpicComponent/>
		<FootertextComponent/>
		<FooterlistComponent/>
		</div>

		)
}

export default FooterComponent;