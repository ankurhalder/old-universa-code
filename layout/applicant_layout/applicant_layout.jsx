import { useEffect } from "react";
import { Navbar } from "@/containers";
import { Fragment } from "react";
import { Router, useRouter } from "next/router";
function ApplicantLayout({ children }) {
	const router = useRouter();
	useEffect(() => {
		const user_type = localStorage.getItem("user_type");
		if (user_type === "applicant") {
			console.log(user_type);
		} else {
			router.push("/");
		}
	}, [router]);
	return (
		<Fragment>
			<Navbar></Navbar>

			{children}
		</Fragment>
	);
}

export default ApplicantLayout;
