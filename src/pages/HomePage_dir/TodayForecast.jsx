import spinner from "../../Utilities/Spinner.svg";

const TodayForecast = ({ TF, isLoading }) => {
	let TFItems = ({ data }) => {
		// console.log("hello");
		let time = new Date(data.dt_txt).getHours();
		let imgIcon = data.weather[0].icon;
		let temp = data.main.temp;
		return (
			<div className='border-r border-[#ededed5b] last:border-none flex flex-col lg:flex-col lg:w-[8rem] lg:h-[80%]  md:justify-evenly items-center justify-center h-full gap-4 md:mt-8 flex-shrink-0 md:w-[10rem] mx-2 px-2 md:h-[80%]'>
				<div className=''>{`${time}:00 hr(s)`}</div>
				<div className=''>
					<img
						src={`https://openweathermap.org/img/wn/${imgIcon}@2x.png`}
						alt=''
					/>
				</div>
				<div className=''>{`${Math.round(temp)}℃`}</div>
			</div>
		);
	};

	return (
		<div className='flex flex-col'>
			<p className='h-[2rem] mb-2 p-1 '>Today's Forecast</p>
			<div className=' h-[16rem] md:h-[21.9rem] w-[96%] mx-auto overflow-x-auto flex lg:flex-row  gap-4 '>
				{isLoading ? (
					<img
						src={spinner}
						className=' bg-bg-s h-full w-full '
					/>
				) : (
					TF.list.map((item) => (
						<TFItems
							data={item}
							key={item.dt}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default TodayForecast;
