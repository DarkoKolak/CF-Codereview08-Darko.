import React from "react";
import MainPictureComponent from "./MainPictureComponent";
import MainPriceComponent from "./MainPriceComponent";
import MainTextComponent from "./MainTextComponent";

function MainFirstComponent(){

	return(
		<div className = "big">
		<div className = "small"> 
			<MainPictureComponent/>
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/propertie2.jpg")} alt ="Foto" />
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/propertie3.jpg")} alt ="Foto" />
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/propertie4.jpg")} alt ="Foto" />
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/propertie5.jpg")} alt ="Foto" />
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/propertie6.jpg")} alt ="Foto" />
			<MainPriceComponent/>
			<MainTextComponent/>
					</div>

		</div>

		)
}

export default MainFirstComponent;