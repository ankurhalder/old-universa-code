import { Fragment } from "react";
import { LandingLayout } from "@/layout";
import { TypingText } from "@/components";
import Link from "next/link";
import useLogin from "@/hooks/login";
function Homepage() {
	const { userId, setUserId, password, setPassword, handleLogin } = useLogin();
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
						<div className="glassmorphism-login-box">
							<h1 className="loginbox-heading">
								Step Inside your Academic Realm
								<span role="img" aria-label="Wink Emoji">
									🙂
								</span>
							</h1>
							<div className="input-icon-container-username">
								<div className="icon-container"></div>
								<input
									type="text"
									placeholder="UserId"
									className="input-field user-id-input"
									value={userId}
									onChange={(e) => setUserId(e.target.value)}
								/>
							</div>
							<div className="input-icon-container-password">
								<div className="icon-container"></div>
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
								<span className="facebook"></span>
								<span className="google"></span>
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
