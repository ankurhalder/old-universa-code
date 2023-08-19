import React, { useState } from "react";
import Link from "next/link";
import { ThemeToogle } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
const SideNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="side-navbar">
			<input type="checkbox" id="check" />
			<label className="button bars" htmlFor="check" onClick={toggleSidebar}>
				<FontAwesomeIcon icon={faBars} />
			</label>

			<div className={`side_bar ${isOpen ? "active" : ""}`}>
				<div className="title">
					<div className="logo">UNIVERSA</div>
					<label className="button cancel" htmlFor="check">
						<FontAwesomeIcon icon={faXmark} />
					</label>
				</div>
				<ul>
					<li>
						<Link className="side-nav-links" href="/applicant">
							Home
						</Link>
					</li>
					<li>
						<Link className="side-nav-links" href="/applicant/update">
							Update Profile
						</Link>
					</li>
					<li>
						<Link className="side-nav-links" href="/applicant/aboutus">
							About Us
						</Link>
					</li>
					<li>
						<Link className="side-nav-links" href="/applicant/contactus">
							Contact Us
						</Link>
					</li>
					<li>
						<Link className="side-nav-links" href="/applicant/services">
							Services
						</Link>
					</li>
				</ul>
				<span className="theme-toogle-container">
					<ThemeToogle></ThemeToogle>
				</span>
			</div>
		</div>
	);
};

export default SideNavBar;
