export default async function Otp() {
	try {
		console.log("hitted otp function");
		const response = await fetch(
			"https://universa-api-gateway.onrender.com/services/account/otp?otp=bmZ5oS&email=aaaaaaa@mail.com",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const responseData = await response.json();
		console.log(responseData);
	} catch (error) {
		console.log(error);
	}
}
