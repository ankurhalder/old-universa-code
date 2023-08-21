export function singleLogout() {
	try {
		const userAuthToken = localStorage.getItem("applicant_login_data");
		console.log("single logout hitted");
		console.log(userAuthToken);
		fetch(`https://universa-api-gateway.onrender.com/services/account/logout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				token: userAuthToken,
			},
		})
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				localStorage.removeItem("applicant_login_data");
			});
	} catch (error) {
		console.log(error);
	}
}
