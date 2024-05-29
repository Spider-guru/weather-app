import image from "/essentials/weather app ui.png";
import HomePage from "./pages/HomePage_dir/HomePage";
import { Outlet } from "react-router-dom";

function App() {
	// console.log(import.meta.env.VITE_SOME_KEY);

	return (
		<div className=' h-dvh overflow-y-auto flex flex-col relative app '>
			<HomePage />
		</div>
	);
}

export default App;

