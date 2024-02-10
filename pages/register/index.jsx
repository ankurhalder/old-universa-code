import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { TypingText } from "@/components";
import { LandingLayout } from "@/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import useRegistration from "@/hooks/registration";
import getColleges from "@/hooks/getColleges";
function Register() {
	const {
		email,
		setEmail,
		selectedCollege,
		setSelectedCollege,
		handleEmailChange,
		handleCollegeChange,
		loading,
		handleRegistration,
	} = useRegistration();
	console.log("selectedCollege:", selectedCollege);
	const [colleges, setColleges] = useState([]);
	useEffect(() => {
		async function fetchColleges() {
			const collegesData = await getColleges();
			setColleges(collegesData);
		}

		fetchColleges();
	}, []);
	return (
		<Fragment>
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
								<option value="" disabled>
									Please select
								</option>
								{colleges.map((college) => (
									<option key={college.college_id} value={college.college_name}>
										{college.college_name}
									</option>
								))}
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
								<button
									onClick={handleRegistration}
									disabled={loading}
									className={loading ? "loading" : ""}
								>
									{loading ? "Registering..." : "Register"}
								</button>
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

export default Register;
