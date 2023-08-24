import { useState } from "react";

function useRegistration() {
	const [email, setEmail] = useState("");
	const [selectedCollege, setSelectedCollege] = useState("Please Select");
	const [loading, setLoading] = useState(false);
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleCollegeChange = (e) => {
		setSelectedCollege(e.target.value);
	};

	function isEmailValid(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	const handleRegistration = async () => {
		if (!isEmailValid(email)) {
			alert("Please enter a valid email address.");
			return;
		} else if (!selectedCollege) {
			alert("Please select a college.");
			return;
		} else {
			console.log("hitted register api");
			let collegeId = "";
			switch (selectedCollege) {
				case "IEM Kolkata":
					collegeId = "306";
					break;
				case "UEM Kolkata":
					collegeId = "304";
					break;
				case "UEM Jaipur":
					collegeId = "305";
					break;
				default:
					collegeId = "NULL";
					break;
			}
			console.log(collegeId);
			console.log(email);
			console.log(selectedCollege);
			setLoading(true);
			try {
				const response = await fetch(
					"https://universa-api-gateway.onrender.com/services/account/",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ email: email, college_id: collegeId }),
					}
				);

				const responseData = await response.json();
				console.log(responseData);
				setLoading(false);
				alert("Account created successfully please verify your email to login");
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		}
	};

	return {
		email,
		setEmail,
		selectedCollege,
		setSelectedCollege,
		handleEmailChange,
		handleCollegeChange,
		loading,
		handleRegistration,
	};
}

export default useRegistration;
