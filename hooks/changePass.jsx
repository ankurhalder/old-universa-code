async function initiateChangePass() {
	try {
		const response = await fetch(
			"https://universa-api-gateway.onrender.com/services/account/pass/initiate",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: "email.com",
				}),
			}
		);

		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.log(error);
	}
}
async function updatePass() {
	try {
		const response = await fetch(
			"https://universa-api-gateway.onrender.com/services/account/pass/update",
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: "email.com",
				}),
			}
		);

		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.log(error);
	}
}

// todo
// @{
//  @   "email": "test1@gmail.com",
//   @  "password": "NewP@20256",
//   @  "confirm_password": "NewP@20256"
//  @ }
