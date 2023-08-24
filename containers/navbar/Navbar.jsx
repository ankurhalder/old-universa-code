import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSingleLogout } from "@/hooks/singleLogout";
import { useMultipleLogout } from "@/hooks/multipleLogout";
import { ThemeToogle } from "@/components";
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
	const handleImageUpload = (event) => {
		const file = event.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (e) => {
				setUploadedImage(e.target.result);
			};

			reader.readAsDataURL(file);
		}
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
						className="image"
						src="/stock/doggo.jpg"
						alt="doggo"
						layout="fill"
					></Image>
				</div>
				{panelOpen && (
					<div className="navbar-panel">
						<div className="user-profile">
							<div className="navbar-panel-image">
								<div className="user-image">
									<Image
										src="/stock/doggo.jpg"
										alt="doggo"
										layout="fill"
										className="user"
									></Image>
								</div>
								<div className="upload-icon">
									<Image
										src="/navbar/upload-solid.svg"
										alt="doggo"
										layout="fill"
									></Image>
								</div>
							</div>
							<div className="theme-toogle-container">
								<ThemeToogle></ThemeToogle>
							</div>
							<button className="logout-button" onClick={handleLogout}>
								Logout
							</button>
							<button
								className="logout-multiple-button"
								onClick={handleMultipleLogout}
							>
								Logout From Multiple devices
							</button>
							<span className="change-password">Change password</span>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}

export default Navbar;
