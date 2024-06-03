import Searchbar from "./Searchbar";
import CurrentCityInfo from "./CurrentCityInfo";
import { useState } from "react";
import TodayForecast from "./TodayForecast";
import Aircondition from "./Aircondition";
import { useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast";
import { motion } from "framer-motion";
import { fetchDataForOthers, getGeneralForecast, getSpecificForecast } from "../../Utilities/urls";

const HomePageContent = () => {
	let [GF, setGF] = useState(null);
	let [SF, setSF] = useState(null);
	let [WF, setWF] = useState(null);
	let [query, setQuery] = useState("");
	let [isLoading, setIsLoading] = useState(true);
	let [isError, setIsError] = useState(false);
	let ErrorMsg = () => {
		// console.log(isError);
		return (
			<motion.div
				initial={{ opacity: 1 }}
				transition={{ duration: 4 }}
				animate={{ scale: [0, 1] }}
				className='h-[100dvh] overflow-hidden bg-bg-p flex flex-col justify-center items-center gap-8'
			>
				<p className='text-[1.2rem] px-8 md:text-[1.6rem] lg:text-[1.4]'>
					Sorry we ran into an error while searching for your city. Try the following steps and
					click enter to continue:
				</p>

				<ul className='mx-8 flex flex-col gap-2 text-[1.1rem]'>
					<li className=' list-item list-disc list-outside '>
						check if internet connection is active
					</li>
					<li className=' list-item list-disc list-outside '>
						ensure you searched the correct term, App is capable of only getting weather of major
						capitals or cities
					</li>
					<li className=' list-item list-disc list-outside '>
						if none of these work try restarting the app by reloading your browser
					</li>
				</ul>
				<button
					onClick={() => setIsError((p) => (p = false))}
					className='bg-bg-s p-4 rounded-md cursor-pointer text-[1.2rem] font-bold tracking-widest'
				>
					Enter
				</button>
			</motion.div>
		);
	};
	useEffect(() => {
		let condition = GF && SF && WF;
		if (condition !== null) {
			setIsLoading((p) => (p = false));
		}
	}, [GF, WF, SF]);

	useEffect(()=>{
				try {
					fetchDataForOthers(query, setWF, setIsError);
					getGeneralForecast(query, setGF, setIsError);
					getSpecificForecast(query, setSF, setIsError);
				} catch (error) {
					console.log("error from searchbar use Effect");
				}
	},[])

	return (
		<div
			className={`pt-10 flex-col md:flex-row md:justify-evenly flex lg:h-dvh  md:overflow-y-hidden `}
		>
			{isError ? (
				<ErrorMsg />
			) : (
				<>
					<div className='flex-col overflow-auto lg:h-[91dvh] md:w-[54%]   flex justify-evenly gap-4 mt-2 lg:w-[60%] md:h-[91dvh]  '>
						<div className=' bg-bg-p rounded-[0.5rem] h-[300px] md:h-[450px] lg:h-[300px] pb-4 pt-4 lg:mt-8 w-[95%] mx-auto  '>
							<Searchbar
								query={query}
								setQuery={setQuery}
								setGF={setGF}
								setSF={setSF}
								setWF={setWF}
								setIsLoading={setIsLoading}
								setIsError={setIsError}
								isError={isError}
							/>
							<CurrentCityInfo
								SF={SF}
								isLoading={isLoading}
							/>
						</div>
						<div className='bg-bg-p h-[300px] md:h-[400px] md:text-[1.4rem] rounded-[0.5rem] w-[95%] mx-auto font-semibold '>
							<TodayForecast
								TF={GF}
								isLoading={isLoading}
							/>
						</div>
						<div className='bg-bg-p rounded-[0.5rem] h-[300px] md:h-[400px] md:text-[1.4rem] mb-4 pb-2  w-[95%] mx-auto font-semibold '>
							<Aircondition
								GF={SF}
								isLoading={isLoading}
							/>
						</div>
					</div>
					<div className=' lg:w-[35%] lg:h-[81dvh] w-[95%] mx-auto  mt-6 md:w-[44%] font-semibold h-full   md:h-[91dvh]  '>
						<WeeklyForecast
							data={WF}
							isLoading={isLoading}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default HomePageContent;
