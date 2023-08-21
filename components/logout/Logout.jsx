function Logout() {
	function singleLogout() {
		try {
			const userAuthToken = localStorage.getItem("applicant_login_data");
			console.log("single logout hitted");
			console.log(userAuthToken);
			fetch(
				`https://universa-api-gateway.onrender.com/services/account/logout`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: userAuthToken,
					},
				}
			)
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
				});
		} catch (error) {
			console.log(error);
		}
	}
	function multipleLogout() {
		try {
			const userAuthToken = localStorage.getItem("applicant_login_data");
			console.log("Multiple logout hitted");
			console.log(userAuthToken);
			fetch(
				`https://universa-api-gateway.onrender.com/services/account/logout/all`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: userAuthToken,
					},
				}
			)
				.then((response) => response.json())
				.then((res) => {
					console.log(res);
				});
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div>
			<button onClick={singleLogout}>logout</button>
			<button style={{ marginTop: "300px" }} onClick={multipleLogout}>
				logout---1
			</button>
		</div>
	);
}

export default Logout;
