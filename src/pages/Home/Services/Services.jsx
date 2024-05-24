// import { useEffect, useState } from "react";
import { useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Do not Repeat Yourself
const Services = () => {
	const [asc, setAsc] = useState(true);
	const [min, setMin] = useState(undefined);
	const [max, setMax] = useState(undefined);
	const [search, setSearch] = useState("");

	const services = useServices(asc, min, max, search);
	// const [services, setServices] = useState([]);

	// useEffect(() => {
	// 	fetch(`http://localhost:5000/services?sort=${asc ? "asc" : "des"}&search=${search}`)
	// 		.then((res) => res.json())
	// 		.then((data) => setServices(data));
	// }, [asc]);

	const handlePriceRange = (e) => {
		e.preventDefault();
		const form = e.target;
		const min = form.min.value;
		const max = form.max.value;
		setMin(min);
		setMax(max);
	};

	const handleReset = () => {
		setMin(undefined);
		setMax(undefined);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		const form = e.target;
		const search = form.search.value;
		setSearch(search);
	};

	return (
		<div className="mt-4">
			<div className="text-center">
				<h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
				<h2 className="text-5xl">Our Service Area</h2>
				<p>
					the majority have suffered alteration in some form, by injected
					humour, or randomised <br /> words which do not look even slightly
					believable.
				</p>
				{/* sort by name */}
				<form onSubmit={handleSearch}>
					<input
						type="text"
						name="search"
						// required
						className="input input-bordered"
					/>
					<input
						type="submit"
						value={"Search"}
						className="btn btn-secondary"
					/>
				</form>
				{/* sort by asc or desc */}
				<button
					onClick={() => setAsc(!asc)}
					className="btn btn-secondary"
				>
					{asc ? "Price: High to Low" : "Price: Low To High"}
				</button>
				{/* sort by price range */}
				<div>
					<form
						onSubmit={handlePriceRange}
						className="flex items-center justify-center"
					>
						<input
							type="number"
							name="min"
							placeholder="min price"
							required
							className="input input-bordered custom-number-input"
						/>
						<input
							type="number"
							name="max"
							placeholder="max price"
							required
							className="input input-bordered custom-number-input"
						/>
						<input
							className="btn"
							type="reset"
							value="X"
							onClick={() => handleReset()}
						/>
						<input
							type="submit"
							className="btn btn-secondary"
							value="Search By Price Range"
						/>
					</form>
				</div>
			</div>
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{services.map((service) => (
					<ServiceCard
						key={service._id}
						service={service}
					></ServiceCard>
				))}
			</div>
		</div>
	);
};

export default Services;
