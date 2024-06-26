import { useMemo } from "react";
import spinner from "../../Utilities/Spinner.svg";
import { motion } from "framer-motion";

const TodayForecast = ({ TF, isLoading }) => {
	let TFItems = ({ data }) => {
		let time = new Date(data.dt_txt).getHours();
		let imgIcon = data.weather[0].icon;
		let temp = data.main.temp;
		return (
			<motion.div
				initial={{ opacity: 0, y: -999 }}
				animate={{ opacity: 0.8, y: 0 }}
				whileHover={{ opacity: 1, scale: 0.9 }}
				transition={{ duration: 1, type: "spring" }}
				className=' flex flex-col lg:flex-col lg:w-[8rem] lg:h-[80%]  md:justify-evenly items-center justify-center h-[90%] gap-4 md:mt-8 flex-shrink-0 md:w-[10rem] px-2 md:h-[80%] bg-bg-s rounded-lg'
			>
				<div className=''>{`${time}:00 hr(s)`}</div>
				<div className=''>
					<img
						src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`}
						alt=''
					/>
				</div>
				<div className=''>{`${Math.round(temp)}℃`}</div>
			</motion.div>
		);
	};

	let TFCon = ({ data }) => {
		return (
			<>
				{data.list.map((item) => (
					<TFItems
						data={item}
						key={item.dt}
					/>
				))}
			</>
		);
	};

	let listItems = useMemo(
		() =>
	<TFCon data={TF}/>,
		[TF]
	);

	return (
		<div className='flex flex-col lg:text-[1.4rem]'>
			<p className='h-[2rem] mb-2 p-1 '>Today's Forecast</p>
			<div className=' '>
				{isLoading ? (
					<img
						src={spinner}
						className=' bg-bg-s h-full w-full '
					/>
				) : (
					<div className='mx-auto overflow-x-auto flex  gap-4  h-[16rem] md:h-[21.9rem] w-[96%] lg:pl-16 '>
						{listItems}
					</div>
				)}
			</div>
		</div>
	);
};

export default TodayForecast;
