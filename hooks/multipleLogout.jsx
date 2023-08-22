import { useRouter } from "next/router";

export function useMultipleLogout() {
	const router = useRouter();

	const multipleLogout = async () => {
		try {
			const userAuthToken = localStorage.getItem("applicant_login_data");
			console.log("Multiple logout hit");
			console.log(userAuthToken);

			const response = await fetch(
				"https://universa-api-gateway.onrender.com/services/account/logout/all",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						token: userAuthToken,
					},
				}
			);

			const responseData = await response.json();
			console.log(responseData);
			localStorage.removeItem("applicant_login_data");
			localStorage.removeItem("user_type");
			router.push("/");
		} catch (error) {
			console.log(error);
		}
	};

	return { multipleLogout };
}
