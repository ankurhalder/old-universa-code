import { ApplicantLayout } from "@/layout";
import { Fragment } from "react";
function ApplicantDashboard() {
	return (
		<Fragment>
			<ApplicantLayout>
				<div className="applicant-dashboard">
					<h1>This is applicant dashboard</h1>
				</div>
			</ApplicantLayout>
		</Fragment>
	);
}

export default ApplicantDashboard;
