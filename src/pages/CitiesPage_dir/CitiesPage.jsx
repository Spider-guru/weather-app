import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CountryData from "./CitiesDatabase";
import { MdClear } from "react-icons/md";
import { getGeneralForecast, getSpecificForecast } from "../../Utilities/urls";
import CurrentCityInfo from "../HomePage_dir/CurrentCityInfo";
import Aircondition from "../HomePage_dir/Aircondition";
import TodayForecast from "../HomePage_dir/TodayForecast";

const CitiesPage = () => {
	let [filteredData, setFilteredData] = useState([]);
	let [query, setQuery] = useState("");
	let [results, setResults] = useState(false);
	let [GF, setGF] = useState(null);
	let [SF, setSF] = useState(null);
	let [isLoading, setIsLoading] = useState(true);

	let getCityWeather = (param) => {
		try {
			getGeneralForecast(param, setGF, setResults);
			getSpecificForecast(param, setSF, setResults);
		} catch (error) {
			console.log(error);
		}
	};
	let CityItemComponent = ({ data }) => {
		return (
			<div
				onClick={() => {
					setFilteredData((p) => (p = []));
					setQuery((p) => (p = ""));
					getCityWeather(data.capital);
				}}
				className=' flex flex-col gap-1 bg-bg-p p-4 my-2 mx-2 rounded-md'
			>
				<p className='font-[verdana] tracking-widest'>{data.capital}</p>
				<p className='font-serif tracking-wider text-[0.8rem] font-semibold text-[#ffffffa4]'>
					{data.name}
				</p>
			</div>
		);
	};
	let searchCity = () => {
		if (query !== "") {
			// console.log(query);
			setFilteredData(
				(p) =>
					(p = CountryData.filter((item) =>
						item.capital.toLowerCase().startsWith(query.toLowerCase())
					))
			);
		} else if (query == "") {
			setFilteredData((p) => (p = []));
		}
	};
	useEffect(() => {
		searchCity();
	}, [query]);
	useEffect(() => {
		let id;
		if (GF && SF !== null) {
			id = setTimeout(() => {
				setIsLoading((p) => !p);
			}, 2000);
			console.log(SF);
			console.log(GF);
		}
		return () => clearTimeout(id);
	}, [GF, SF]);
	return (
		<div className=' h-[94dvh] overflow-y-auto mt-14'>
			<div>
				<div className=' pb-4 mb-2'>
					<form
						className='border w-[90%] mx-auto my-4 p-0 flex h-[2.6rem] rounded-lg  '
						onSubmit={(e) => {
							e.preventDefault();
							setQuery((p) => (p = ""));
						}}
					>
						<input
							type='text'
							value={query}
							placeholder='type in the city name'
							onChange={(e) => {
								setQuery(e.target.value);
							}}
							className='outline-none  h-full w-[90%] border-none bg-transparent px-4 text-[1.2rem] font-mono'
						/>
						<button
							type='submit'
							className=' h-full w-[10%] flex justify-center items-center cursor-pointer'
							onClick={(e) => {
								setFilteredData((p) => (p = []));
							}}
						>
							<MdClear />
						</button>
					</form>

					<div className='bg-bg-s absolute left-5 z-10 w-[90%] mx-auto mt-1  overflow-y-auto flex flex-col gap-2 max-h-[20rem]'>
						{filteredData == []
							? "no result yet"
							: filteredData.map((item) => (
									<CityItemComponent
										data={item}
										key={item.iso2}
									/>
							  ))}
					</div>
				</div>

				<div className=' pt-4 pb-10  w-[95%] mx-auto flex flex-col gap-8'>
					<div className='bg-bg-p w-[90%] mx-auto lg:h-[20rem] flex flex-col  justify-center'>
						<CurrentCityInfo
							isLoading={isLoading}
							SF={SF}
						/>
					</div>
					<div className='bg-bg-p w-[90%] mx-auto'>
						<Aircondition
							isLoading={isLoading}
							GF={SF}
						/>
					</div>
					<div className='bg-bg-p w-[90%] mx-auto p-2 '>
						<TodayForecast
							isLoading={isLoading}
							TF={GF}
						/>
					</div>
				</div>
			</div>
			<Navbar />
		</div>
	);
};

export default CitiesPage;
