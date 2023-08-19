import { Navbar, SideNavBar } from "@/containers";
import { Fragment } from "react";
function ApplicantLayout({ children }) {
	return (
		<Fragment>
			<Navbar></Navbar>
			<SideNavBar></SideNavBar>
			{children}
		</Fragment>
	);
}

export default ApplicantLayout;
