import { useEffect } from "react";
import { fetchDataForOthers, getGeneralForecast, getSpecificForecast } from "../../Utilities/urls";
import { FaSearch } from "react-icons/fa";
import { useMemo } from "react";

const Searchbar = ({ setGF, setSF, setWF, query, setQuery, setIsError, isError }) => {
	let handleSubmit = (e) => {
		e.preventDefault();
		setQuery((p) => (p = ""));
		// setIsError((p) => (p = false));
		try {
			fetchDataForOthers(query, setWF, setIsError);
			getGeneralForecast(query, setGF, setIsError);
			getSpecificForecast(query, setSF, setIsError);
		} catch (error) {
			console.log("error from searchbar");
		}
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
