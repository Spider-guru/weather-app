import image from "/essentials/weather app ui.png";
import HomePage from "./pages/HomePage_dir/HomePage";
import { motion } from "framer-motion";

function App() {
	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};

	return (
		<motion.div
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={spring}
			className=' h-dvh overflow-y-auto flex flex-col relative app '
		>
			<HomePage />
		</motion.div>
	);
}

export default App;

