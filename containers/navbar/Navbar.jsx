import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { singleLogout } from "@/functions/singleLogout";
import { multipleLogout } from "@/functions/multipleLogout";
function Navbar() {
	const [panelOpen, setPanelOpen] = useState(false);

	const togglePanel = () => {
		setPanelOpen(!panelOpen);
	};

	return (
		<header>
			<nav className="navbar">
				<div className="navbar-logo">
					<ul>
						<li>
							<Link href="/applicant">Home</Link>
						</li>
					</ul>
				</div>
				<ul className="navbar-items">
					<li>
						<Link href="/applicant/aboutus">About Us</Link>
					</li>
					<li>
						<Link href="/applicant/contactus">Contact Us</Link>
					</li>
					<li>
						<Link href="/applicant/services">Services</Link>
					</li>
					<li>
						<Link href="/applicant/update">Update Profile</Link>
					</li>
				</ul>
				<div className="navbar-user-image" onClick={togglePanel}>
					<Image
						src="/stock/doggo.jpg"
						alt="doggo"
						height={40}
						width={40}
					></Image>
				</div>
				{panelOpen && (
					<div className="navbar-panel">
						{/* this is user image later this will be updated dynamically so chatgpt please add edit icon on top of it */}
						<Image
							src="/stock/doggo.jpg"
							alt="doggo"
							height={40}
							width={40}
						></Image>
						<button onClick={singleLogout}>Logout</button>
						<button onClick={multipleLogout}>
							Logout From Multiple devices
						</button>
					</div>
				)}
			</nav>
		</header>
	);
}

export default Navbar;
