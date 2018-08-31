import React, { Component } from 'react';

class TitlePage extends Component {
	render() {
		return (
			<div className="title-page-container">
				{/* <div className="color-overlay"> */}
				<h1>Hi, I'm Charles.</h1>
				<h2>SOFWARE DEVELOPER</h2>
				<p>_____________________________</p>
				<p>I'm a Computer Science student at University of Waterloo. I </p>
				<div className="contact-container">
					<p>
						<i className="fas fa-envelope"></i>
						wang.charles234@gmail.com
          </p>
					<p>
						<i class="fas fa-phone"></i>
						+1 647-633-3568
					</p>
					<p>
						<i class="fab fa-github"></i> 
						charleswang234
					</p>
					<p>
						<i class="fab fa-linkedin"></i>
						charlesccwang
					</p>
				</div>
				{/* </div> */}

			</div>
		)
	}
}

export default TitlePage;