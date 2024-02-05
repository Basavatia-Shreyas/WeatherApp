"use client"
import WeatherCard from '@/components/WeatherCard';
import Image from 'next/image'
import { useCallback, useState } from 'react'

export default function Home() {
  const [location, setLocation] = useState("");


  const [places, setPlaces] = useState("Chicago");
  
  const fetchWeather = useCallback(() => {
    setPlaces(location);
    console.log(places.length);
  }, [location]);

  return (
    <main className='h-screen bg-white text-black'>
      <div className='h-28 grid gap-4 content-center'>
        <div className='place-self-center'>
          <header className='font-bold'>
            Weather App
          </header>
        </div>
        <div>

        </div>
        <div className=''>

        </div>
        <div className='place-self-center space-x-2'>
          <label className='justify-center'>
            Enter a city: {"\t"}
            <input className='text-black outline' onChange={(ev: any) => {setLocation(ev.target.value)}}/>
          </label>
          <button className='' onClick={() => fetchWeather()}>
            Enter
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 mx-auto my-10'>
        <WeatherCard data={places} />
      </div>
    </main>
  )
}
