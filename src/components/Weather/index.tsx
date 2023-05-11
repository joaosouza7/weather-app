import { useContext } from 'react';
import { RiWindyLine, RiDropLine } from 'react-icons/ri';

import { WeatherContext } from '../../contexts/WeatherContext';

import './styles.css';

function Weather() {

    const { weather, weatherStateImg } = useContext(WeatherContext);

    return (
        <>
            <div className="weather-content">
                <div className="info-location">
                    <p>{weather.name}</p>
                    <img src={`https://www.countryflagicons.com/SHINY/64/${weather.country}.png`} alt="" />
                </div>

                <div className="icon-area">
                    <img src={weatherStateImg} alt={weather.description} />
                    <p>{weather.description}</p>
                </div>

                <div className="info-weather">

                    <div className="weather">
                        <div className="single">
                            <RiWindyLine size={20} />
                            <span>{weather.wind} km/h</span>
                        </div>

                        <div className="single">
                            <RiDropLine size={20} />
                            <span>{weather.humidity}%</span>
                        </div>
                    </div>

                    <div className="temp">
                        <strong>
                            {weather.temperature}
                            <span className="deg">&deg;C</span>
                        </strong>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;