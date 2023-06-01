import styled from "styled-components";

export const WeatherWrapper = styled.div`
    height: 480px;
    width: 980px;
    border-radius: 30px;
    position: relative;
    background-color: hsla(0,0%,100%,.2);
    box-shadow: 0 0 10px silver;
    padding: 30px 0 0;
`

export const WeatherTitleWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const WeatherTitle = styled.h1`
    display: block;
    color: #365a7a;
    font-size: 4rem;
    margin: 0;
`

export const WeatherCityName = styled.h3`
    padding-bottom: 10px;
    font-size: 3em;
`

export const WeatherInfo = styled.p`
    padding-bottom: 6px;
    font-size: 25px;
`

export const WeatherInfoWrapper = styled.div`
    text-align: left;
    width: 450px;
    padding-left: 50px;
`

export const WeatherInput = styled.input`
    top: -20px;
    width: 600px;
    display: inline-block;
    padding: 10px 0px 10px 30px;
    line-height: 120%;
    position: relative;
    border-radius: 20px;
    outline: none;
    font-size: 20px;
    transition: all 0.5s ease-out 0s;
`

export const BoxWeatherWrapper = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 180px;
    height: 180px;
    border-radius: 30%;
    background-color: hsla(0,0%,100%,.3);
    box-shadow: 3px 0 8px silver;
    padding-bottom: 10px;
    padding: 15px
`