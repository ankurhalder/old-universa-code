import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faTimes,
	faQrcode,
	faLink,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, toggleSidebar }) => {
	return (
		<div className={`side_bar ${isOpen ? "active" : ""}`}>
			<div className="title">
				<div className="logo">CodingLab</div>
				<label className="button cancel" htmlFor="check">
					{/* <FontAwesomeIcon icon={faTimes} /> */}
				</label>
			</div>
			<ul>
				<li>
					<a href="#">
						{/* <FontAwesomeIcon icon={faQrcode} /> */}
						Dashboard
					</a>
				</li>
				<li>
					<a href="#">
						{/* <FontAwesomeIcon icon={faLink} /> */}
						Shortcuts
					</a>
				</li>
			</ul>
			<div className="media_icons">
				<a href="#">{/* <FontAwesomeIcon icon={faFacebook} /> */}</a>
				<a href="#">{/* <FontAwesomeIcon icon={faTwitter} /> */}</a>
			</div>
		</div>
	);
};

const SideNavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="side-navbar">
			<input type="checkbox" id="check" />
			<label className="button bars" htmlFor="check" onClick={toggleSidebar}>
				{/* <FontAwesomeIcon icon={faBars} /> */}
			</label>

			<Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
		</div>
	);
};

export default SideNavBar;
