import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { LandingLayout } from "@/layout";
import { LandingNavbar } from "@/containers";
import { TypingText } from "@/components";
function Homepage() {
	return (
		<Fragment>
			<LandingNavbar></LandingNavbar>
			<LandingLayout>
				<div className="homepage">
					<div className="homepage-container">
						<h1 className="company-name">Welcome To UNIVERSA</h1>
						<h2 className="company-slogan">Chase Your Dream</h2>
						<div className="typing-text-container">
							<main className="typing-text-main">
								<TypingText />
							</main>
						</div>
					</div>
					<div className="homepage-right"></div>
				</div>
			</LandingLayout>
		</Fragment>
	);
}

export default Homepage;
