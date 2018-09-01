import React, { Component } from 'react';

class TitlePage extends Component {
	render() {
		return (
			<div className="title-page-container">
				<div className="color-overlay"></div>
				<div className="introduction"> 
					<h1>Hi, I'm Charles.</h1>
					<p className="job">SOFTWARE DEVELOPER</p>
					<hr className="line-break"></hr>
					<div className="contact-container">
						<p className="contact-item">
							<i className="fas fa-envelope"></i>
							wang.charles234@gmail.com
          					</p>
						<p className="contact-item">
							<i class="fas fa-phone"></i>
							+1 647-633-3568
							</p>
						<p className="contact-item">
							<i class="fab fa-github"></i>
							charleswang234
							</p>
						<p className="contact-item">
							<i class="fab fa-linkedin"></i>
							charlesccwang
							</p>
					</div>
				</div>
			</div>
		)
	}
}

export default TitlePage;