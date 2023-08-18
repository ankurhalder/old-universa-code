import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Navbar() {
	const [showMenu, setShowMenu] = useState(false);
	const router = useRouter();
	const [activePage, setActivePage] = useState("/");

	useEffect(() => {
		setActivePage(router.pathname);
	}, [router.pathname]);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	const closeMenu = () => {
		setShowMenu(false);
	};

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
				{showMenu && (
					<div
						className={`header-panel ${
							showMenu ? "active-panel" : "inactive-panel"
						}`}
					>
						<div className="hamburger-menu-panel">
							<ul className="header-panel-sub-menu">
								<li key="home">
									<span
										className={
											activePage === "/applicant" ? "active" : "notactive"
										}
									>
										<Link href="/applicant">Home</Link>
									</span>
								</li>
								<li key="about">
									<span
										className={
											activePage === "/applicant/aboutus"
												? "active"
												: "notactive"
										}
									>
										<Link href="/applicant/aboutus">About Us</Link>
									</span>
								</li>
								<li key="services">
									<span
										className={
											activePage === "/applicant/services"
												? "active"
												: "notactive"
										}
									>
										<Link href="/applicant/services">Services</Link>
									</span>
								</li>
								<li key="contact">
									<span
										className={
											activePage === "/applicant/contactus"
												? "active"
												: "notactive"
										}
									>
										<Link href="/applicant/contactus">Contact Us</Link>
									</span>
								</li>
								<li key="register">
									<span
										className={
											activePage === "/applicant/update"
												? "active"
												: "notactive"
										}
									>
										<Link href="/applicant/update">Update Profile</Link>
									</span>
								</li>
							</ul>
						</div>
					</div>
				)}
				{showMenu && <div className="overlay" onClick={closeMenu}></div>}
			</div>
		</header>
	);
}

export default Navbar;
