//FUNCTIONS TO FETCH DATAS FROM WEATHER API
//RETURNS A JSON OBJECT ON SUCCESS AND THE BOOLEAN 'FALSE'

import WeatherKey from "./WeatherKey";
let key = WeatherKey();

export let fetchDataFor7Days = async (query) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric`
		);
		let data = await res.json();
		return data;
	} catch (error) {
		console.info("error from fetchDataFor7Days");
		return false;
	}
};

export let getGeneralForecast = async (query) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric&cnt=6`
		);
		let data = await res.json();
		return data;
	} catch (error) {
		console.log(`error from fetch general forecast`);
		return false;
	}
};

export let getSpecificForecast = async (query) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&q=${
				query.length == 0 ? "Lagos" : query
			}`
		);
		let data = await res.json();
		return data;
	} catch (error) {
		console.log("error from fetch specific forecast");
		return false;
	}
};
