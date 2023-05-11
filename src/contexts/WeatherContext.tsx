import { createContext, useState, ReactNode } from 'react';
import axios from 'axios';

type WeatherContextData = {
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    weather: Weather;
    getWeather: (place: string) => Promise<void>;
    getImage: (name: string) => Promise<void>;
    weatherStateImg: string;
    erro: boolean;
}

type WeatherProviderProps = {
    children: ReactNode;
}

type Image = {
    urlImg?: string;
    alt?: string;
    erro?: boolean;
} | undefined;

interface Weather {
    name?: string;
    country?: string;
    weatherState?: string;
    description?: string;
    wind?: number;
    humidity?: number;
    temperature?: number;
    erro?: boolean;
}

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children }: WeatherProviderProps) {

    const [place, setPlace] = useState("");
    const [weather, setWeather] = useState<Weather>({});
    const [weatherStateImg, setWeatherStateImg] = useState("");
    const [imgLocate, setImgLocate] = useState<Image>();
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState(false);

    async function getWeather(place: string) {
        if(!place) return;

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=pt_br&appid=${import.meta.env.VITE_API_KEY_WEATHER}`
            );

            setWeather({
                name: response.data?.name,
                country: response.data?.sys.country,
                weatherState: response.data?.weather[0].main,
                description: response.data?.weather[0].description,
                humidity: response.data?.main.humidity,
                wind: response.data?.wind.speed,
                temperature: parseInt(response.data?.main.temp),
            });

            handleWeatherImgState(weather.weatherState);
            setIsLoading(false);
            setErro(false);
            
        } catch (error) {
            setImgLocate(undefined);
            setErro(true);
            setWeather({});
            setIsLoading(false);
            return;
        }

    }

    async function getImage(name: string) {
        alert("Image " + name);
    }

    function handleWeatherImgState(state: string | undefined) {
        switch (state) {
            case "Clear":
                setWeatherStateImg("/weather-img/clear-day.svg");
                break;
            case "Thunderstorm":
                setWeatherStateImg("/weather-img/thunderstorms.svg");
                break;
            case "Drizzle":
                setWeatherStateImg("/weather-img/shower-rain.svg");
                break;
            case "Rain":
                setWeatherStateImg("/weather-img/rain.svg");
                break;
            case "Snow":
                setWeatherStateImg("/weather-img/snow.svg");
                break;
            case "Haze":
                setWeatherStateImg("/weather-img/haze.svg");
                break;
            case "Clouds":
                setWeatherStateImg("/weather-img/few-clouds.svg");
                break;
            default:
                setWeatherStateImg("/weather-img/cloudy.svg");
                break;
        }
    }


    return (
        <WeatherContext.Provider 
            value={{
                place,
                setPlace,
                weather,
                weatherStateImg,
                isLoading,
                erro,
                getWeather,
                getImage
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}