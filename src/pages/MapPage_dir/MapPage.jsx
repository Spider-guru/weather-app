import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";

const MapPage = () => {
	return (
		<motion.div
			initial={{ y: 999 }}
			animate={{ y: 0 }}
			transition={{ duration: 2, type: "spring" }}
		>
			<div className=' h-[90dvh]'>
				<iframe
					src='https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=30&lon=-20&zoom=5'
					frameborder='20'
					className='h-full w-full'
				></iframe>
			</div>
			<Navbar />
		</motion.div>
	);
};

export default MapPage;
