import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const LandingNavbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const router = useRouter();
	const [activePage, setActivePage] = useState(router.pathname);
	useEffect(() => {
		setActivePage(router.pathname);
	}, [router.pathname]);
	return (
		<header className="landing-navbar">
			<nav className="header-navbar">
				<Link className="header-logo" href="/">
					Universa
				</Link>
				<div className="header-menu">
					<ul className="header-sub-menu">
						<li>
							<span
								className={activePage === "/about-us" ? "active" : "notactive"}
							>
								<Link href="/about-us">About Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/services" ? "active" : "notactive"}
							>
								<Link href="/services">Services</Link>
							</span>
						</li>

						<li>
							<span
								className={
									activePage === "/contact-us" ? "active" : "notactive"
								}
							>
								<Link href="/contact-us">Contact Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/register" ? "active" : "notactive"}
							>
								<Link href="/register">Register</Link>
							</span>
						</li>
					</ul>
				</div>
				{/* <div className="header-theme-toogle-button-container">
					<ThemeToggle></ThemeToggle>
				</div> */}
				<div
					className={`header-hamburger ${
						showMenu ? "active-hamburger" : "inactive-hamburger"
					}`}
					onClick={toggleMenu}
				>
					<span className="hamburger-icon"></span>
					<span className="hamburger-icon"></span>
					<span className="hamburger-icon"></span>
				</div>
				<div
					className={`header-panel ${
						showMenu ? "active-panel" : "inactive-panel"
					}`}
					onClick={(e) => {
						toggleMenu();
					}}
				>
					<ul className="header-panel-sub-menu">
						<li>
							<span className={activePage === "/" ? "active" : "notactive"}>
								<Link href="/">Home</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/about-us" ? "active" : "notactive"}
							>
								<Link href="/about-us">About Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/services" ? "active" : "notactive"}
							>
								<Link href="/services">Services</Link>
							</span>
						</li>

						<li>
							<span
								className={
									activePage === "/contact-us" ? "active" : "notactive"
								}
							>
								<Link href="/contact-us">Contact Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/register" ? "active" : "notactive"}
							>
								<Link href="/register">Register</Link>
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default LandingNavbar;
