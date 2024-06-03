let key = import.meta.env.VITE_WEATHER_KEY;

export let fetchDataForOthers = async (query, state, errState) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		errState((p) => (p = true));
		console.log(`error from fetch other forecast`);
		return null;
	}
};

export let getGeneralForecast = async (query, state, errState) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${
				query.length == 0 ? "Lagos" : query
			}&appid=${key}&units=metric&cnt=6`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		errState((p) => (p = true));
		console.log(`error from fetch general forecast`);
		return null;
	}
};

export let getSpecificForecast = async (query, state, errState) => {
	try {
		let res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&q=${
				query.length == 0 ? "Lagos" : query
			}`
		);
		let data = await res.json();
		state((p) => (p = data));
	} catch (error) {
		errState((p) => (p = true));
		console.log("error from fetch specific forecast");
		return null;
	}
};

/*
https://openweathermap.org/img/wn/10d@2x.png weather icon link
*/
