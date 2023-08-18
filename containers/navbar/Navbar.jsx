import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<div className="navbar">
			<div className="logo">Your Logo</div>
			<div className="menuButton" onClick={toggleMenu}>
				{/* Use the FontAwesomeIcon component */}
				<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
			</div>
			{menuOpen && (
				<div className="menuPanel">
					<ul className="subMenu">
						<li>Sub-Item 1</li>
						<li>Sub-Item 2</li>
						<li>Sub-Item 3</li>
						{/* Add more sub-items as needed */}
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
