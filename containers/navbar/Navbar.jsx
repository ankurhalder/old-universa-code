import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSingleLogout } from "@/hooks/singleLogout";
import { useMultipleLogout } from "@/hooks/multipleLogout";
import { ThemeToogle } from "@/components";
function Navbar() {
	const [panelOpen, setPanelOpen] = useState(false);
	const [uploadedImage, setUploadedImage] = useState("/stock/doggo.jpg");
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
						src={uploadedImage}
						alt="user"
						layout="fill"
					/>
				</div>
				{panelOpen && (
					<div className="navbar-panel">
						<div className="user-profile">
							<div className="navbar-panel-image">
								<div className="user-image">
									<Image
										src={uploadedImage}
										alt="user"
										layout="fill"
										className="user"
									/>
								</div>
								<div className="upload-icon">
									<label htmlFor="image-upload">
										<Image
											src="/navbar/upload-solid.svg"
											alt="upload icon"
											layout="fill"
										/>
									</label>
									<input
										type="file"
										id="image-upload"
										accept="image/*"
										onChange={handleImageUpload}
										style={{ display: "none" }}
									/>
								</div>
							</div>
							<div className="theme-toogle-container">
								<ThemeToogle />
							</div>
							<button className="logout-button" onClick={handleLogout}>
								Logout
							</button>
							<button
								className="logout-multiple-button"
								onClick={handleMultipleLogout}
							>
								Logout From All devices
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
