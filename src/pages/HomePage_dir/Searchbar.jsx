import { useEffect } from "react";
import { fetchDataForOthers, getGeneralForecast, getSpecificForecast } from "../../Utilities/urls";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ setGF, setSF, setWF, query, setQuery, setIsLoading }) => {
	let handleSubmit = (e) => {
		e.preventDefault();
		setQuery((p) => (p = ""));
		try {
			fetchDataForOthers(query, setWF);
			getGeneralForecast(query, setGF);
			getSpecificForecast(query, setSF);
		} catch (error) {
			console.log("error from searchbar");
		}
		console.log("hello");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='w-[90%] mx-auto flex h-[3rem] bg-bg-s rounded-md '
		>
			<input
				className='border-none px-2 text-center py-3 w-[80%] outline-none bg-transparent font-semibold '
				type='text'
				placeholder='input city name'
				value={query}
				onChange={(e) => setQuery((p) => (p = e.target.value))}
			/>
			<button
				className=' w-[20%] flex justify-center items-center '
				type='submit'
			>
				<FaSearch className='text-[1.8rem]' />
			</button>
		</form>
	);
};

export default Searchbar;
