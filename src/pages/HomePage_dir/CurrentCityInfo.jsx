import spinner from "../../Utilities/Spinner.svg";
import { motion } from "framer-motion";

const CurrentCityInfo = ({ SF, isLoading }) => {
	return (
		<div className='flex font-semibold justify-evenly h-[200px] md:h-[200px] mt-2'>
			<>
				{isLoading ? (
					<img
						src={spinner}
						alt='her'
						className='bg-bg-s w-full h-full'
					/>
				) : (
					<>
						<motion.div
							initial={{ opacity: 0, x: -2000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							className=' w-[48%]'
						>
							<div className='h-[50%] flex flex-col justify-center items-center '>
								<p className='text-2xl lg:text-[2.4rem]'>{SF.name}</p>

								<p className='text-[0.8rem] lg:text-[1.2rem] pt-2'>
									Desc: {Object.values(SF)[1][0].description}
								</p>
							</div>
							<div className='h-[50%] flex  justify-center items-center text-4xl lg:text-[2.8rem] '>
								<p>{`${Math.round(Object.values(SF)[3].temp)}`}℃</p>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: -2000 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1 }}
							className=' w-[48%]'
						>
							<img
								src={`https://openweathermap.org/img/wn/${Object.values(SF)[1][0].icon}@2x.png`}
								alt=''
								className=' w-full h-full object-contain'
							/>
						</motion.div>
					</>
				)}
			</>
		</div>
	);
};

export default CurrentCityInfo;
