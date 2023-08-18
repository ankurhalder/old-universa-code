import { Navbar } from "@/containers";
import { Fragment } from "react";
function ApplicantLayout({ children }) {
	return (
		<Fragment>
			<Navbar></Navbar>
			{children}
		</Fragment>
	);
}

export default ApplicantLayout;
