import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import CitiesPage from "./pages/CitiesPage_dir/CitiesPage.jsx";
import HomePage from "./pages/HomePage_dir/HomePage.jsx";
import MapPage from "./pages/MapPage_dir/MapPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "Cities",
				element: <CitiesPage />,
			},
			{
				path: "Map",
				element: <MapPage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);

