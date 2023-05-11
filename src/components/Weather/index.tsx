import { RiWindyLine, RiDropLine } from 'react-icons/ri';

import weatherIcon from '../../../public/weather-img/clear-day.svg';

import './styles.css';

function Weather() {
    return (
        <>
            <div className="weather-content">
                <div className="info-location">
                    <p>São Paulo</p>
                    <img src='https://www.countryflagicons.com/SHINY/64/BR.png' alt="" />
                </div>

                <div className="icon-area">
                    <img src={weatherIcon} alt="" />
                    <p>Nuvens cobertas</p>
                </div>

                <div className="info-weather">

                    <div className="weather">
                        <div className="single">
                            <RiWindyLine size={20} />
                            <span>1.54km/h</span>
                        </div>

                        <div className="single">
                            <RiDropLine size={20} />
                            <span>64%</span>
                        </div>
                    </div>

                    <div className="temp">
                        <strong>
                            17
                            <span className="deg">&deg;C</span>
                        </strong>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Weather;