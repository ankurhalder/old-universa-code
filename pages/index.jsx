import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { LandingLayout } from "@/layout";
import { LandingNavbar } from "@/containers";
import { TypingText } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

function Homepage() {
	const router = useRouter();
	const [userId, setUserId] = useState("2023005500");
	const [password, setPassword] = useState("Universa@2021");

	function handleLogin() {
		console.log("hitted login api");
		if (!isPasswordValid(password)) {
			alert(
				"Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character."
			);
			setPassword("");
		} else {
			fetch(
				`https://universa-api-gateway.onrender.com/services/account/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						user_id: userId,
						password: password,
					}),
				}
			)
				.then(function (response) {
					if (response.ok) {
						console.log(response);

						return response.json();
					} else {
						throw new Error(response.statusText);
					}
				})
				.then(function (data) {
					console.log(data);
					localStorage.setItem("applicant_login_data", data.authToken);
					if (data.status === true && data.data.type === "applicant") {
						router.push("/applicant");
						const a = localStorage.getItem("applicant_login_data");
						console.log(a);
					} else {
						// Handle other cases if needed
					}
				})
				.catch(function (error) {
					console.error("Error logging in:", error);
				});
		}
	}

	function isPasswordValid(password) {
		const passwordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		return passwordRegex.test(password);
	}

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
						<div className="glassmorphism-login-box">
							<h1 className="loginbox-heading">
								Step Inside your Academic Realm
								<span role="img" aria-label="Wink Emoji">
									🙂
								</span>
							</h1>
							<div className="input-icon-container-username">
								<div className="icon-container">
									<FontAwesomeIcon icon={faUser} />
								</div>
								<input
									type="text"
									placeholder="UserId"
									className="input-field user-id-input"
									value={userId}
									onChange={(e) => setUserId(e.target.value)}
								/>
							</div>
							<div className="input-icon-container-password">
								<div className="icon-container">
									<FontAwesomeIcon icon={faKey} />
								</div>
								<input
									type="password"
									placeholder="Password"
									className="input-field password-input"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="check-box-container">
								<input
									type="checkbox"
									name="remember-me"
									id="remember-me"
									className="remember-me-checkbox"
									value="remember-me"
								/>
								<label className="remember-me-label">Remember Me</label>
							</div>
							<div className="login-button-container">
								<button className="login-button" onClick={handleLogin}>
									Login
								</button>
							</div>
							<div className="social-login">
								<p>Login with:</p>
								<span className="facebook">
									<FontAwesomeIcon icon={faFacebook} />
								</span>
								<span className="google">
									<FontAwesomeIcon icon={faGoogle} />
								</span>
							</div>
							<div className="options">
								<span className="forget-password">Forgot Password?</span>
								<span>
									<p className="new-to-universa">New to universa?</p>
									<p className="chick-to-register">
										<Link href="/register">Click here to Register</Link>
									</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</LandingLayout>
		</Fragment>
	);
}

export default Homepage;
