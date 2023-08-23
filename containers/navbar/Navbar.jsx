import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useSingleLogout } from "@/hooks/singleLogout";
import { useMultipleLogout } from "@/hooks/multipleLogout";
function Navbar() {
	const [panelOpen, setPanelOpen] = useState(false);
	const { singleLogout } = useSingleLogout();
	const { multipleLogout } = useMultipleLogout();
	const handleLogout = async () => {
		await singleLogout();
	};
	const handleMultipleLogout = async () => {
		await multipleLogout();
	};
	const togglePanel = () => {
		setPanelOpen(!panelOpen);
	};

	return (
		<header>
			<nav className="navbar">
				<div className="navbar-logo">
					<ul>
						<li>
							<Link href="/applicant">UNIVERSA</Link>
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
						width={40}
						height={40}
					></Image>
				</div>
				{panelOpen && (
					<div className="navbar-panel">
						<Image
							src="/stock/doggo.jpg"
							alt="doggo"
							height={40}
							width={40}
						></Image>
						<button onClick={handleLogout}>Logout</button>
						<button onClick={handleMultipleLogout}>
							Logout From Multiple devices
						</button>
					</div>
				)}
			</nav>
		</header>
	);
}

export default Navbar;
