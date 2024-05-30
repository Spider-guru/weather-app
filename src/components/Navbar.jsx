import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ setIsOutletRendered, isMenuActive, setIsMenuActive }) => {
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};
	return (
		<motion.nav
			animate={isMenuActive ? "open" : "closed"}
			variants={variants}
			transition={spring}
			className={`bg-bg-s text-center fixed w-full left-[0] bottom-0 h-[3rem]  md:w-[100px] md:h-[100dvh]  `}
		>
			<motion.div
				whileHover={{ scale: 1.3 }}
				transition={spring}
				className='hidden md:flex md:justify-center bg-bg-s w-[3.5rem] mx-auto mt-4 rounded-md '
				onClick={() => {
					setIsMenuActive((p) => (p = !p));
				}}
			>
				<IoIosArrowRoundBack className='text-[2.2rem] font-extrabold' />
			</motion.div>

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
		</motion.nav>
	);
};

export default Navbar;

