import React from "react";
import MainFourthPictureComponent from "./MainFourthPictureComponent";
import MainFourthPriceComponent from "./MainFourthPriceComponent";
import MainFourthTextComponent from "./MainFourthTextComponent";

function MainFourthComponent(){

	return(
		<div className = "big">
		<div className = "small"> 
			<MainFourthPictureComponent/>
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Land/land2.jpg")} alt ="Foto" />
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Land/land3.jpg")} alt ="Foto" />
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Land/land4.jpg")} alt ="Foto" />
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Land/land5.jpg")} alt ="Foto" />
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>
	<div className = "small"> 
				<img className ="propertieimg" src={require("./image/Land/land6.jpg")} alt ="Foto" />
			<MainFourthPriceComponent/>
			<MainFourthTextComponent/>
					</div>

		</div>

		)
}

export default MainFourthComponent;