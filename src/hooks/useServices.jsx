import { useEffect, useState } from "react";
import { axiosSecure } from "./useAxiosSecure";

const useServices = (asc, min, max) => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		// fetch("http://localhost:5000/services")
		// 	.then((res) => res.json())
		// 	.then((data) => setServices(data));

		axiosSecure(
			`/services?sort=${asc ? "asc" : "desc"}&min=${min}&max=${max}`
		).then((res) => {
			setServices(res.data);
		});
	}, [asc, max, min]);

	return services;
};

export default useServices;
