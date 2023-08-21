import { ApplicantLayout } from "@/layout";
import { Fragment } from "react";
import { Logout } from "@/components";
function ApplicantDashboard() {
	return (
		<Fragment>
			<ApplicantLayout>
				<div className="applicant-dashboard">
					<h1>This is applicant dashboard</h1>
					<Logout></Logout>
				</div>
			</ApplicantLayout>
		</Fragment>
	);
}

export default ApplicantDashboard;
