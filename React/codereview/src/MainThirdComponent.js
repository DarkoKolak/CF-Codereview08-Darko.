import React from "react";
import MainThirdPictureComponent from "./MainThirdPictureComponent";
import MainThirdPriceComponent from "./MainThirdPriceComponent";
import MainThirdTextComponent from "./MainThirdTextComponent";

function MainThirdComponent(){

	return(
		<div className = "big">
		<div className = "small"> 
			<MainThirdPictureComponent/>
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Garage/garage2.jpg")} alt ="Foto" />
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Garage/garage3.jpg")} alt ="Foto" />
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Garage/garage4.jpg")} alt ="Foto" />
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Garage/garage5.jpg")} alt ="Foto" />
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Garage/garage6.jpg")} alt ="Foto" />
			<MainThirdPriceComponent/>
			<MainThirdTextComponent/>
					</div>

		</div>

		)
}

export default MainThirdComponent;