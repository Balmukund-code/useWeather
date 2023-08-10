
// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b5ee151a07mshb6709165f4e6390p1820f9jsn4810d6938940',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getResponse(city){
	
	try{
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options);
	const result=await response.json();

     document.getElementById("temp").innerHTML=result.temp;
	 document.getElementById("temp2").innerHTML=result.temp;
	 document.getElementById("min_temp").innerHTML=result.min_temp;
	 document.getElementById("max_temp").innerHTML=result.max_temp;
	 document.getElementById("wind_speed").innerHTML=result.wind_speed;
	 document.getElementById("wind_speed2").innerHTML=result.wind_speed;
	 document.getElementById("wind_digree").innerHTML=result.wind_degrees;
	 document.getElementById("humidity").innerHTML=result.humidity;
	 document.getElementById("humidity2").innerHTML=result.humidity;

	 document.getElementById("sunrise").innerHTML=result.sunrise;
	 document.getElementById("sunset").innerHTML=result.sunset;
	 document.getElementById("feels_like").innerHTML=result.feels_like;	
} catch (error) {
	console.error(error);
}
}
getResponse("delhi");
submit.addEventListener("click", (e) => {
	e.preventDefault();
	const data=document.getElementById("city_name").innerHTML=city.value;
	getResponse(data);
})
getResponse1();
getResponse2();
getResponse3();

async function getResponse1(){
	
	try{
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options);
	const result=await response.json();
	console.log(result);
	 document.getElementById("del_temp").innerHTML=result.temp;
	 document.getElementById("del_sunrise").innerHTML=result.sunrise;
	 document.getElementById("del_min_temp").innerHTML=result.min_temp;
	 document.getElementById("del_max_temp").innerHTML=result.max_temp;
	 document.getElementById("del_wind_speed").innerHTML=result.wind_speed;
	 document.getElementById("del_sunset").innerHTML=result.sunset;
	 document.getElementById("del_cloud_pct").innerHTML=result.cloud_pct;
	 document.getElementById("del_humidity").innerHTML=result.humidity;
	 document.getElementById("del_feels_like").innerHTML=result.feels_like;
	 
} catch (error) {
	console.error(error);
}
}

async function getResponse2(){
	
	try{
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=MUMBAI', options);
	const result=await response.json();
	console.log(result);
	 document.getElementById("mum_temp").innerHTML=result.temp;
	 document.getElementById("mum_sunrise").innerHTML=result.sunrise;
	 document.getElementById("mum_min_temp").innerHTML=result.min_temp;
	 document.getElementById("mum_max_temp").innerHTML=result.max_temp;
	 document.getElementById("mum_wind_speed").innerHTML=result.wind_speed;
	 document.getElementById("mum_sunset").innerHTML=result.sunset;
	 document.getElementById("mum_cloud_pct").innerHTML=result.cloud_pct;
	 document.getElementById("mum_humidity").innerHTML=result.humidity;
	 document.getElementById("mum_feels_like").innerHTML=result.feels_like;
	 
} catch (error) {
	console.error(error);
}
}

async function getResponse3(){
	
	try{
	const response = await fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options);
	const result=await response.json();
	console.log(result);
	 document.getElementById("kol_temp").innerHTML=result.temp;
	 document.getElementById("kol_sunrise").innerHTML=result.sunrise;
	 document.getElementById("kol_min_temp").innerHTML=result.min_temp;
	 document.getElementById("kol_max_temp").innerHTML=result.max_temp;
	 document.getElementById("kol_wind_speed").innerHTML=result.wind_speed;
	 document.getElementById("kol_sunset").innerHTML=result.sunset;
	 document.getElementById("kol_cloud_pct").innerHTML=result.cloud_pct;
	 document.getElementById("kol_humidity").innerHTML=result.humidity;
	 document.getElementById("kol_feels_like").innerHTML=result.feels_like;
	 
} catch (error) {
	console.error(error);
}
}
