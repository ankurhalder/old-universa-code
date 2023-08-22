import { useRouter } from "next/router";

export function useSingleLogout() {
	const router = useRouter();

	const singleLogout = async () => {
		try {
			const userAuthToken = localStorage.getItem("applicant_login_data");
			console.log("single logout hit");
			console.log(userAuthToken);

			const response = await fetch(
				"https://universa-api-gateway.onrender.com/services/account/logout",
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

	return { singleLogout };
}
