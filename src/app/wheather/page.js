"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function Home() {
  const router= useRouter();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSearch = async () => {
    if (city) {
        try {
          const response = await fetch(
             `http://api.weatherapi.com/v1/current.json?key=a062d4e43f2b4fb593044323240108&q=${city}&aqi=no`
           );

           if (response.ok) {
            const data = await response.json();
            setWeather(data);
          } else {
            alert('City not found');
            setWeather(null);
          }

            //  const data = await response.json();
            //  setWeather(data);
            //  console.log(data);
        }
         catch (error) {
            alert('Error fetching weather data');
            setWeather(null);
          }
    } 
  };
  
  
  

  return (
    <div className=" min-h-screen flex-col items-center justify-between p-24 text-slate-900"  style={{ padding: '20px', textAlign: 'center', background: '#ffefcc' }}>
      <div className='p-10 bg-blue-400 mb-10 font-extrabold text-3xl '>
        <h1>Weather App</h1>
      </div>
      
      <input className='text-blue-700 w-64 h-12 border-2 text-center  border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2" onClick={handleSearch}>Search</button>

      {weather && (
        <div>
            <h1>{weather.location.name}</h1>
            <h2>Location Details</h2>

            <ul>
                <li><strong>City: </strong>{weather.location.name}</li>
                <li><strong>Region: </strong>{weather.location.region}</li>
                <li><strong>Country: </strong>{weather.location.country}</li>
                <li><strong>Latitude: </strong>{weather.location.lat}</li>
                <li><strong>Longitude: </strong>{weather.location.lon}</li>
                <li><strong>Date & Time: </strong>{weather.location.localtime}</li>
                
            </ul>
            {/* <pre>{JSON.stringify({weather})}</pre> */}

      
         {/*  Display Current Weather */}
           <div   style={{ border: '3px solid #ddd', padding: '20px', margin: '20px auto', width: '300px',    }}> 
            <div> 
              <h2>Current Weather</h2> 
            
            </div>
            
              <ul>
                 <li><strong>Temperature:</strong> {weather.current.temp_c}°C</li>
                 <li><strong>Condition:</strong> {weather.current.condition.text}°C</li>
                 
                 <li><strong>Wind Speed:</strong> {weather.current.wind_kph} km/h</li>
                 <li><strong>Humidity:</strong> {weather.current.humidity}%</li>
             </ul>
          </div>
         
        </div>
      )}
      <div>
        <button onClick={() => router.push('/')} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">go back</button>
      </div>
      
    </div>
  );
}
