import React from "react";
import MainSecondPictureComponent from "./MainSecondPictureComponent";
import MainSecondPriceComponent from "./MainSecondPriceComponent";
import MainSecondTextComponent from "./MainSecondTextComponent";

function MainSecondComponent(){

	return(
		<div className = "big">
		<div className = "small"> 
			<MainSecondPictureComponent/>
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/apartment/apartment2.jpg")} alt ="Foto" />
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/apartment/apartment3.jpg")} alt ="Foto" />
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/apartment/apartment4.jpg")} alt ="Foto" />
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/apartment/apartment5.jpg")} alt ="Foto" />
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>
	<div className = "small"> 
			<img className ="propertieimg" src={require("./image/apartment/apartment6.jpg")} alt ="Foto" />
			<MainSecondPriceComponent/>
			<MainSecondTextComponent/>
					</div>

		</div>

		)
}

export default MainSecondComponent;