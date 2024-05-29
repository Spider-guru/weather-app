import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaCity } from "react-icons/fa";


const Navbar = ({ setIsOutletRendered, isMenuActive, setIsMenuActive }) => {
	return (
		<nav
			className={`bg-bg-s text-center fixed w-full left-[0] bottom-0 h-[3rem]  md:w-[20%] md:h-[100dvh] ${
				isMenuActive ? "md:block" : "md:hidden"
			} lg:w-[8%] `}
		>
			<div
				className='hidden md:flex md:justify-center bg-bg-s w-[3.5rem] mx-auto mt-4 rounded-md '
				onClick={() => {
					setIsMenuActive((p) => (p = !p));
					console.log(isMenuActive);
				}}
			>
				<IoIosArrowRoundBack className='text-[2.2rem] font-extrabold' />
			</div>

			<div className='text-white font-semibold flex  justify-evenly items-center h-full md:h-[95%] md:flex-col md:justify-start md:gap-[10rem] md:mt-[5rem] md:py-0 '>
				<Link
					to={"/"}
					onClick={() => setIsOutletRendered((i) => (i = false))}
					className='block hover:text-green-400 md:h-[2rem] md:flex md:justify-center md:items-center md:text-[2.8rem] lg:text-[2rem] md:w-[50%] md:md:mx-auto text-[2rem] '
				>
					<FaHome />
				</Link>
				<Link
					to={"Cities"}
					onClick={() => setIsOutletRendered((i) => (i = true))}
					className='block hover:text-green-400 md:h-[2rem] md:flex md:justify-center md:items-center md:text-[2.8rem] lg:text-[2rem] md:w-[50%] md:mx-auto text-[2rem] '
				>
					<FaCity />
				</Link>
				<Link
					to={"Map"}
					onClick={() => setIsOutletRendered((i) => (i = true))}
					className='block hover:text-green-400 md:h-[2rem] md:flex md:justify-center md:items-center md:text-[2.8rem] lg:text-[2rem] md:w-[50%] md:mx-auto text-[2rem] '
				>
					<FaMap />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;






