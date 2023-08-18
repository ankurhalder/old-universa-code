import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const router = useRouter();
	const [activePage, setActivePage] = useState("/");

	useEffect(() => {
		setActivePage(router.pathname);
	}, [router.pathname]);

	return (
		<header>
			<div className="navbar">
				<div className="navbar-logo left-side">
					<span>UNIVERSA</span>
				</div>
				<div className="theme-toogle-container middle-side"></div>
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
					onClick={toggleMenu}
				>
					<div className="hamburger-menu-panel">
						<ul className="header-panel-sub-menu">
							<li key="home">
								<span className={activePage === "/" ? "active" : "notactive"}>
									<Link href="/">Home</Link>
								</span>
							</li>
							<li key="about">
								<span
									className={activePage === "/aboutus" ? "active" : "notactive"}
								>
									<Link href="/aboutus">About Us</Link>
								</span>
							</li>
							<li key="services">
								<span
									className={
										activePage === "/services" ? "active" : "notactive"
									}
								>
									<Link href="/services">Services</Link>
								</span>
							</li>
							<li key="contact">
								<span
									className={
										activePage === "/contactus" ? "active" : "notactive"
									}
								>
									<Link href="/contactus">Contact Us</Link>
								</span>
							</li>
							<li key="register">
								<span
									className={
										activePage === "/register" ? "active" : "notactive"
									}
								>
									<Link href="/register">Register</Link>
								</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Navbar;
