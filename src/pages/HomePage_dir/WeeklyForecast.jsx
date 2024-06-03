import { useEffect } from "react";
import spinner from "../../Utilities/Spinner.svg";
import { motion } from "framer-motion";
const WeeklyForecast = ({ data, isLoading }) => {
	let list = [];
	let filteredData = (arr) => {
		for (let index = 0; index < data.list.length; index = index + 8) {
			list.push(data.list[index]);
		}
		return list;
	};

	let ListItems = ({ value }) => {
		let WkDaysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		let DOW = WkDaysArr[new Date(value.dt_txt).getDay()];
		let imgUrl = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
		let WeatherName = `${value.weather[0].main}`;
		let Min_Max_temp = `${Math.round(value.main.temp_max)} / ${Math.round(value.main.temp_min)}`;
		return (
			<div className=' hover:bg-bg-s ease-out duration-[0.5s] flex border-b hover:border-none last:border-none justify-evenly items-center py-2 md:h-[14rem] lg:h-[7.5rem] md:text-[1.4rem] '>
				<p>{DOW}</p>
				<div className='flex items-center'>
					<img
						src={imgUrl}
						alt=''
					/>
					<p>{WeatherName}</p>
				</div>
				<p className=''>{Min_Max_temp}</p>
			</div>
		);
	};

	return (
		<div className='bg-bg-p h-[89dvh] overflow-y-auto'>
			{isLoading ? (
				<img
					src={spinner}
					alt=''
					className=' w-full h-full bg-bg-s'
				/>
			) : (
				<motion.div
					initial={{ y: 999 }}
					animate={{ y: 0 }}
					transition={{ type: "spring", duration: 2 }}
					className=' pb-6 flex flex-col w-[96%] mx-auto md:h-[90dvh] '
				>
					<p className='p-2 md:p-4 text-[1.2rem] md:text-[1.2rem]'>Weekly Forecast</p>
					<div className='w-[98%]  flex flex-col mx-auto gap-4 md:h-full md:gap-0 md:justify-center '>
						{filteredData(data).map((item) => (
							<ListItems
								value={item}
								key={item.dt}
							/>
						))}
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default WeeklyForecast;
