export default async function College() {
	try {
		console.log("hitted otp function");
		const response = await fetch(
			"https://universa-api-gateway.onrender.com/services/college/list",
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
