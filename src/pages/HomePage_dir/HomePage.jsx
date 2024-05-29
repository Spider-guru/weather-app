import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import HomePageContent from "../HomePage_dir/HomePageContent";
import { useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const HomePage = () => {
	let [isOutletRendered, setIsOutletRendered] = useState(false);
	let [isMenuActive, setIsMenuActive] = useState(false);

	return (
		<>
			<div className='h-dvh overflow-y-auto text-[#ededed] bg-bg-s'>
				<div className='p-3 border-b-2 gap-2 text-[1.3rem] font-semibold flex items-center fixed text-white bg-bg-s w-full '>
					<IoMenu
						className='hidden md:block text-[2rem] font-semibold'
						onClick={() => {
							setIsMenuActive((ini) => (ini = !ini));
							console.log("clicked");
						}}
					/>
					<p>Weather App</p>
				</div>
				<div className=''>{isOutletRendered ? <Outlet /> : <HomePageContent />}</div>
				<Navbar
					isMenuActive={isMenuActive}
					setIsMenuActive={setIsMenuActive}
					setIsOutletRendered={setIsOutletRendered}
				/>
			</div>
		</>
	);
};

export default HomePage;
