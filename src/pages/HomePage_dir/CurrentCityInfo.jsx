import spinner from "../../Utilities/Spinner.svg";

const CurrentCityInfo = ({ SF, isLoading }) => {
	return (
		<div className='flex  justify-evenly h-[85%] md:h-[88%] mt-2'>
			<>
				{isLoading ? (
					<img
						src={spinner}
						alt='her'
						className="bg-bg-s w-full h-full"
					/>
				) : (
					<>
						<div className=' w-[48%]'>
							<div className='h-[50%] lg:pl-[7rem] flex flex-col p-1 justify-center '>
								<p className='text-2xl lg:text-[2rem]'>{Object.values(SF)[11]}</p>
								<p className='text-[1rem] lg:text-[1rem] pt-2'>
									Desc: {Object.values(SF)[1][0].description}
								</p>
							</div>
							<div className='h-[50%] flex justify-center items-center text-4xl '>
								<p>{`${Math.round(Object.values(SF)[3].temp)}`}℃</p>
							</div>
						</div>

						<div className=' w-[48%]'>
							<img
								src={`https://openweathermap.org/img/wn/${Object.values(SF)[1][0].icon}@2x.png`}
								alt=''
								className=' w-full h-full object-contain'
							/>
						</div>
					</>
				)}
			</>
		</div>
	);
};

export default CurrentCityInfo;
