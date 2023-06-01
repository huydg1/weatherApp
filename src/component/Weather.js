import React, { useState } from "react";
import {
  WeatherWrapper,
  WeatherTitleWrapper,
  WeatherTitle,
  WeatherCityName,
  WeatherInfo,
  WeatherInfoWrapper,
  WeatherInput,
} from "./Weather.styled";

import headerImg from "../assets/images/02d.svg";
import BoxWeather from "./BoxWeather";

const Weather = () => {

  const [statusFetch, setStatusFetch] = useState(true);
  const [statusShowImage, setStatusShowImage] = useState(false)
  const [statusKeyPress, setStatusKeyPress] = useState(false)
  const [valueInput, setValueInput] = useState('')
  const [dataCity, setDataCity] = useState({})
  const handleKeyPress = async (e) => {
    if (e.which === 13) {
      e.target.classList.add('loading')
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e.target.value}&appid=0ae649523dfdcb7b733e3f339a2842da`)
      const data = await response.json()
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      if (Number(data.cod) === 200) {
        const days = []
        let day = 0;
        for (let i = 0; days.length < 5; i++) {
          if (i === 0) {
            days.push(data.list[i])
            day = data.list[i].dt_txt.slice(8, 10)
          }
          else {
            if (Number(data.list[i].dt_txt.slice(8, 10)) !== Number(day) &&
              data.list[i].dt_txt.slice(11, 13) === '15'
            ) {
              days.push(data.list[i])
              day = data.list[i].dt_txt.slice(8, 10)
            }
          }
        }

        days.forEach((day) => {
          let d = new Date(day.dt_txt)
          day.dayText = weekDays[d.getDay()]
        })

        data.list = [...days]
        setStatusKeyPress(true)
        setStatusFetch(true)
        setDataCity(data)
        setStatusShowImage(true)
        console.log(data)
      } else {
        setStatusFetch(false)
      }
      e.target.classList.remove('loading')
      setValueInput('')
    }
  }

  const handleChangeInput = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <WeatherWrapper>
      <WeatherTitleWrapper>
        <img src={statusShowImage ? require(`../assets/images/${dataCity.list[0].weather[0].icon}.svg`) : headerImg} width={260} alt="sun" />
        {statusKeyPress ?
          <WeatherInfoWrapper>
            <WeatherInfo>Today</WeatherInfo>
            <WeatherCityName>{dataCity.city.name}</WeatherCityName>
            <WeatherInfo>Temparature: {Math.round(dataCity.list[0].main.temp - 273)}&#176;C</WeatherInfo>
            <WeatherInfo>{dataCity.list[0].weather[0].description}</WeatherInfo>
          </WeatherInfoWrapper>
          :
          <WeatherTitle>Weahter Forecast</WeatherTitle>
        }
      </WeatherTitleWrapper>
      <div style={{ margin: "50px 0 0" }}>
        <WeatherInput onKeyPress={handleKeyPress} onChange={handleChangeInput} value={valueInput} style={{ top: statusKeyPress ? '-450px' : '-20px' }} placeholder={statusFetch ? "Enter a city..." : "Enter a valid city name..."} type="text" />
      </div>


      <ul style={{ display: statusShowImage ? 'flex' : 'none', justifyContent: 'space-around', padding: 0 }}>
        {statusShowImage && dataCity.list.map((day, index) => {
          if (index !== 0) {
            return (
              <BoxWeather
                img={day.weather[0].icon}
                dayText = {day.dayText}
                temp = {day.main.temp}
                key={index}
              />
            )
          }
          return null
        })}
      </ul>
    </WeatherWrapper>
  );
};

export default Weather;
