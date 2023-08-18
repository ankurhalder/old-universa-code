import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { ThemeToogle } from "@/components";
const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};
	const router = useRouter();
	const [activePage, setActivePage] = useState(router.pathname);
	useEffect(() => {
		setActivePage(router.pathname);
	}, [router.pathname]);
	return (
		<div className="navbar">
			<div className="logo">
				<Link href="/">Universa</Link>
			</div>
			<div className="theme-toogle-container">
				<ThemeToogle></ThemeToogle>
			</div>
			<div className="menuButton" onClick={toggleMenu}>
				<FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
			</div>
			{menuOpen && (
				<div className="menuPanel">
					<ul className="subMenu">
						<li>
							<span
								className={activePage === "/aboutus" ? "active" : "notactive"}
							>
								<Link href="/aboutus">About Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/services" ? "active" : "notactive"}
							>
								<Link href="/services">Services</Link>
							</span>
						</li>

						<li>
							<span
								className={activePage === "/contactus" ? "active" : "notactive"}
							>
								<Link href="/contactus">Contact Us</Link>
							</span>
						</li>
						<li>
							<span
								className={activePage === "/register" ? "active" : "notactive"}
							>
								<Link href="/register">Register</Link>
							</span>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Navbar;
