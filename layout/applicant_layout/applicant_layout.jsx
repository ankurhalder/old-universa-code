import { useEffect } from "react";
import { Navbar } from "@/containers";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { handleThemeChange } from "@/hooks/theme";
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
	useEffect(() => {
		handleThemeChange("light");
	}, []);
	return (
		<Fragment>
			<Navbar></Navbar>

			{children}
		</Fragment>
	);
}

export default ApplicantLayout;
