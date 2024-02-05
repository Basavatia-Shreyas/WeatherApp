
import React, { useCallback, useEffect, useState } from 'react';

interface WeatherCardProps {
    data: String;
};

const WeatherCard: React.FC<WeatherCardProps> = ({
    data
}) => {
    const ACCUWEATHER = "";
    const [key, newKey] = useState();
    const [temp, newTemp] = useState();
    const [windSpeed, newWindSpeed] = useState();
    const [feelsLike, newFeelsLike] = useState();
    const [weatherText, newWeatherText] = useState();
    const [count, setCount] = useState(0); 
    //const query = `?apikey=${ACCUWEATHER}&q=${data}`;

    useEffect(() => {
        setCount((count) => count + 1);
        const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
        const query = `?apikey=${ACCUWEATHER}&q=${data}`
        fetch(base+query)
        .then(response => {
            console.log(response)
            if(response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            newKey(data[0]["Key"]);
            console.log(data[0]["Key"]);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        })
    }, [data]);
    useEffect(() => {
        const base = "http://dataservice.accuweather.com/currentconditions/v1/"
        const query = `${key}?apikey=${ACCUWEATHER}`
        fetch(base+query)
        .then(response => {
            console.log(response)
            if(response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            newTemp(data[0]["Temperature"]['Imperial']["Value"]);
            newFeelsLike(data[0]["RealFeelTemperature"]);
            newWindSpeed(data[0]);
            newWeatherText(data[0]["WeatherText"]);
            console.log(data[0]["Temperature"]['Imperial']["Value"]);
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching temperature: ", error);
        })
    }, [data]);
    return (
        <div className='text-black mx-auto h-auto rounded-lg outline w-96 text-center py-10'>
            <div className='text-5xl py-2'>
                {data}
            </div>
            <div className='text-4xl py-2'>
                {weatherText}
            </div>
            <div className='text-4xl'>
                {temp} &deg;F
            </div>
                
            
             
        </div>
    )
};

export default WeatherCard;