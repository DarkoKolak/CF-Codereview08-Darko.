import React from 'react';
import {NavLink} from "react-router-dom";

function NavComponent(){

	return(
		<ul id = "navbar">
		<li><NavLink style={{ textDecoration: 'none',color: 'white' }}  to="/RedirectMain" exact activeClassName="active"> Home </NavLink></li>
		<li><NavLink style={{ textDecoration: 'none',color: 'white' }}  to="/MainFirstComponent" exact activeClassName="active"> Houses</NavLink></li>
		<li><NavLink style={{ textDecoration: 'none',color: 'white' }}  to="/MainSecondComponent" exact activeClassName="active"> Apartments</NavLink></li>
		<li><NavLink style={{ textDecoration: 'none',color: 'white' }} to="/MainThirdComponent" exact activeClassName="active"> Garages </NavLink></li>
		<li><NavLink style={{ textDecoration: 'none',color: 'white' }} to="/MainFourthComponent" exact activeClassName="active"> Land </NavLink></li>
		</ul>


		)
}

export default NavComponent;