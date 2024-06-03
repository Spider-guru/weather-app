import spinner from "../../Utilities/Spinner.svg";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { motion } from "framer-motion";
import { useMemo } from "react";

const Aircondition = ({ GF, isLoading }) => {
	let GFItem = ({ data }) => {
		return (
			<motion.div
				initial={{ scale: 0 }}
				animate={{ scale: 1 }}
				transition={{ duration: 1, type: "spring" }}
				className='grid grid-cols-2 grid-rows-2 h-full '
			>
				<div className='hover:bg-bg-s transition-all duration-700 hover:rounded-lg ease-in flex flex-wrap flex-col'>
					<p className=' w-[40%] h-[100%] flex justify-center pt-8'>
						<FaTemperatureQuarter className='text-[2.4rem]' />
					</p>
					<p className='w-[60%] h-[50%] flex items-end pl-1'>Real Feel</p>
					<p className='w-[60%] h-[50%] flex items-center pl-1'>{`${Math.round(
						data.main.feels_like
					)} ℃`}</p>
				</div>

				<div className='hover:bg-bg-s transition-all duration-700 hover:rounded-lg ease-in flex flex-wrap flex-col'>
					<p className=' w-[40%] h-[100%] flex justify-center pt-8'>
						<FaWind className='text-[2rem]' />
					</p>
					<p className='w-[60%] h-[50%]  flex items-end pl-1'>Wind</p>
					<p className='w-[60%] h-[50%] flex items-center pl-1'>{`${Math.round(
						data.wind.speed
					)} m/s`}</p>
				</div>

				<div className=' hover:bg-bg-s transition-all duration-700 hover:rounded-lg ease-in flex flex-wrap flex-col'>
					<p className=' w-[40%] h-[100%] flex justify-center pt-8 '>
						<WiHumidity className='text-[3.5rem]' />
					</p>
					<p className='w-[60%] h-[50%] flex items-end pl-1'>Humidity</p>
					<p className='w-[60%] h-[50%] flex items-center pl-1'>{`${data.main.humidity} g/m³`}</p>
				</div>

				<div className=' hover:bg-bg-s transition-all duration-700 hover:rounded-lg ease-in flex flex-col flex-wrap'>
					<p className=' w-[40%] h-[100%] flex justify-center pt-8 '>
						<WiBarometer className='text-[3.5rem]' />
					</p>
					<p className='w-[60%] h-[50%] flex items-end pl-1'>Pressure</p>
					<p className='w-[60%] h-[50%] flex items-center pl-1'>{`${data.main.pressure} pa`}</p>
				</div>
			</motion.div>
		);
	};
	let airCondition = useMemo(() => <GFItem data={GF} />, [GF]);
	return (
		<div className='lg:text-[1.6rem]'>
			<p className='p-1 mb-1 md:px-2 h-[2rem] '>Air Condition</p>
			<div className='h-[16rem] w-[96%] md:h-[21.9rem] mx-auto '>
				{isLoading ? (
					<img
						src={spinner}
						className='h-full w-full bg-bg-s '
					/>
				) : (
					airCondition
				)}
			</div>
		</div>
	);
};

export default Aircondition;
