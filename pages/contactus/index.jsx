import { Fragment } from "react";
import { LandingLayout } from "@/layout";
import { LandingNavbar } from "@/containers";
import { TypingText } from "@/components";
function ContactUs() {
	return (
		<Fragment>
			<LandingNavbar></LandingNavbar>
			<LandingLayout>
				<div className="homepage">
					<div className="homepage-left">
						<h1 className="company-name">Welcome To UNIVERSA</h1>
						<h2 className="company-slogan">Chase Your Dream</h2>
						<div className="typing-text-container">
							<main className="typing-text-main">
								<TypingText />
							</main>
						</div>
					</div>
					<div className="homepage-right">
						<h1 style={{ zIndex: 10 }}>Contact Us Coming Soon</h1>
					</div>
				</div>
			</LandingLayout>
		</Fragment>
	);
}

export default ContactUs;
