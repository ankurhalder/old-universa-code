export default async function getColleges() {
	try {
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
		console.log(responseData.data.college_id);
		return responseData.data || []; // Return the list of colleges
	} catch (error) {
		console.log(error);
		return []; // Return an empty array in case of an error
	}
}
