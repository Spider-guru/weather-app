let key = import.meta.env.VITE_WEATHER_KEY;

export let fetchDataForOthers = async (query, state) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		console.info(error);
		return null;
	}
};

export let getGeneralForecast = async (query, state) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric&cnt=6`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		console.log(`error from fetch general forecast`);
		return null;
	}
};

export let getSpecificForecast = async (query, state) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&q=${
				query.length == 0 ? "Lagos" : query
			}`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		return null;
		console.log("error from fetch specific forecast");
	}
};

/*
https://openweathermap.org/img/wn/10d@2x.png weather icon link
*/
