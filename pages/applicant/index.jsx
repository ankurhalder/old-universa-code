import { ApplicantLayout } from "@/layout";
import { Fragment } from "react";

function ApplicantDashboard() {
	const applicant = {
		name: "jajaja",
		email: "jajajja",
		phone: "jajajajjja",
		// Add more applicant information fields here
	};

	return (
		<Fragment>
			<ApplicantLayout>
				<div className="applicant-dashboard">
					<h1>This is applicant dashboard</h1>
					<div className="applicant-info">
						<h2>Applicant Information</h2>
						<div>
							<strong>Name:</strong> {applicant.name}
						</div>
						<div>
							<strong>Email:</strong> {applicant.email}
						</div>
						<div>
							<strong>Phone:</strong> {applicant.phone}
						</div>
						{/* Add more applicant information fields here */}
					</div>
				</div>
			</ApplicantLayout>
		</Fragment>
	);
}

export default ApplicantDashboard;
