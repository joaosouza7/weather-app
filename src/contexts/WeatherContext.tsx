import { createContext, useState, ReactNode } from 'react';

import useApi from '../hooks/useApi';

type WeatherContextData = {
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    weather: Weather;
    handleGetWeather: () => Promise<void>;
    imgLocate: ImageLocate;
    weatherStateImg: string;
    erro: boolean;
}

type WeatherProviderProps = {
    children: ReactNode;
}

type ImageLocate = {
    urlImg?: string;
    alt?: string;
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
    const [imgLocate, setImgLocate] = useState<ImageLocate>();
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState(false);

    const { getWeather, getImage } = useApi();

    async function handleGetWeather() {
        if(place.trim().length === 0) return;
        setIsLoading(false);
        setErro(false);

        const weather = await getWeather(place.trim());

        setWeather(weather);

        if(weather.erro === true) {
            setImgLocate(undefined);
            setErro(true);
            setWeather({});
            setIsLoading(false);
            return;
        }

        await handleGetImage(weather.name);
        handleWeatherImgState(weather.weatherState);

        setIsLoading(false);
    }

    async function handleGetImage(name: string | undefined) {
        if(place.trim().length === 0) return;

        const img = await getImage(name);

        if(img.erro === true) return;
        setImgLocate(img);
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
                imgLocate,
                handleGetWeather,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}