import Searchbar from "./Searchbar";
import CurrentCityInfo from "./CurrentCityInfo";
import { useState } from "react";
import TodayForecast from "./TodayForecast";
import Aircondition from "./Aircondition";
import { useEffect } from "react";
import WeeklyForecast from "./WeeklyForecast";


const HomePageContent = () => {
	let [GF, setGF] = useState(null);
	let [SF, setSF] = useState(null);
	let [WF, setWF] = useState(null);
	let [query, setQuery] = useState("");
	let [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		if (GF && SF && WF !== null) {
			setIsLoading((p) => (p = false));
		}
	}, [GF, WF, SF]);

	return (
		<div className='py-10 flex-col md:flex-row md:justify-evenly flex lg:h-dvh  md:overflow-y-hidden '>
			<div className='flex-col overflow-auto lg:h-[91dvh] md:w-[54%]   flex justify-evenly gap-4 mt-2 lg:w-[60%] md:h-[91dvh]  '>
				<div className=' bg-bg-p rounded-[0.5rem] h-[300px] md:h-[450px] lg:h-[300px] pb-4 pt-4 lg:mt-8 w-[95%] mx-auto  '>
					<Searchbar
						query={query}
						setQuery={setQuery}
						setGF={setGF}
						setSF={setSF}
						setWF={setWF}
						setIsLoading={setIsLoading}
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

			<div className=' lg:w-[35%] lg:h-[81dvh] w-[95%] mx-auto  mt-6 md:w-[44%] font-semibold h-auto md:h-[91dvh]  '>
				<WeeklyForecast
					data={WF}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
};

export default HomePageContent;
