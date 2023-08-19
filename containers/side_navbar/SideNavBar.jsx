import React, { useState } from "react";
import Link from "next/link";
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
						<div>
							<Link href="/applicant">Home</Link>
						</div>
					</li>
					<li>
						<div>
							<Link href="/applicant/update">Update Profile</Link>
						</div>
					</li>
					<li>
						<div>
							<Link href="/applicant/aboutus">About Us</Link>
						</div>
					</li>
					<li>
						<div>
							<Link href="/applicant/contactus">Contact Us</Link>
						</div>
					</li>
					<li>
						<div>
							<Link href="/applicant/services">Services</Link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default SideNavBar;
