import React from 'react'
import { BoxWeatherWrapper } from './Weather.styled'

const BoxWeather = ({img, dayText, temp}) => {
  return (
    <BoxWeatherWrapper>
        <h4>{dayText}</h4>
        <img src={require(`../assets/images/${img}.svg`)} width={100} height={100} alt='sun'/>
        <p>{Math.round(temp - 273)}&#176;C</p>
    </BoxWeatherWrapper>
  )
}

export default BoxWeather