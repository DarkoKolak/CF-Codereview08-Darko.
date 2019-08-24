import React from "react";


function FooterlistComponent(){
		var { SocialIcon } = require('react-social-icons');

	return(

		<ul id ="social-media">
		<li> <SocialIcon url="http://linkedin.com" /></li>
		<li><SocialIcon url="http://facebook.com" /></li>
		<li><SocialIcon url="http://twitter.com" /></li>
		<li><SocialIcon url="http://instagram.com" /></li>
		</ul>

		)
}

export default FooterlistComponent;