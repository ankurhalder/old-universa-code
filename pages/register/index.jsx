import React, { useState, Fragment } from "react";
import Link from "next/link";
import { TypingText } from "@/components";
import { LandingNavbar } from "@/containers";
import { LandingLayout } from "@/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
function Homepage() {
	const [email, setEmail] = useState("");
	const [selectedCollege, setSelectedCollege] = useState("Please Select");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleCollegeChange = (e) => {
		setSelectedCollege(e.target.value);
	};
	function isEmailValid(email) {
		// Use a regular expression to validate the email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	const handleRegistration = () => {
		if (!isEmailValid(email)) {
			alert("Please enter a valid email address.");
			return;
		} else if (!selectedCollege) {
			alert("Please select a college.");
			return;
		} else {
			console.log("hitted register api");
			let collegeId = "";
			switch (selectedCollege) {
				case "IEM Kolkata":
					collegeId = "306";
					break;
				case "UEM Kolkata":
					collegeId = "304";
					break;
				case "UEM Jaipur":
					collegeId = "305";
					break;
				default:
					collegeId = "NULL";
					break;
			}
			console.log(collegeId);
			console.log(email);
			console.log(selectedCollege);
			try {
				fetch(`https://universa-api-gateway.onrender.com/services/account/`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email: email, college_id: collegeId }),
				})
					.then((response) => response.json())
					.then((res) => {
						console.log(res);
					});
			} catch (error) {
				console.log(error);
			}
		}
	};
	// @end of register box
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
						{/* Login box content starts from here*/}
						<div className="registrationForm">
							<h2>
								Your Pathway to Academic Excellence: Register Now on Universa
								<span role="img" aria-label="Wink Emoji">
									😉
								</span>
							</h2>
							<div className="choose-college-container">
								<div className="icon-container">
									<FontAwesomeIcon icon={faGraduationCap} />
								</div>
								<h3 className="choose-your-college">Choose your college</h3>
							</div>
							<select
								id="mySelect"
								value={selectedCollege}
								onChange={handleCollegeChange}
							>
								<option value="" disabled defaultValue>
									Please select
								</option>
								<option value="IEM Kolkata">IEM Kolkata</option>
								<option value="UEM Kolkata">UEM Kolkata</option>
								<option value="UEM Jaipur">UEM Jaipur</option>
							</select>

							<input
								placeholder="Email Address"
								type="email"
								id="email"
								name="email"
								value={email}
								onChange={handleEmailChange}
							/>

							<div className="register-button-container">
								<button onClick={handleRegistration}>Register</button>
							</div>

							<div className="goto-login">
								<h3>
									Already registered?
									<span>
										<Link href="/">click here to login</Link>
									</span>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</LandingLayout>
		</Fragment>
	);
}

export default Homepage;
