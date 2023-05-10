import { createContext, useState, ReactNode } from 'react';

type WeatherContextData = {
    place: string;
    setPlace: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    weather: Weather;
    getWeather: (place: string) => Promise<void>;
    getImage: (name: string) => Promise<void>;
    weatherStateImg: string;
    error: boolean;
}

type WeatherProviderProps = {
    children: ReactNode;
}

interface Image {
    urlImg?: string;
    alt?: string;
    error?: boolean;
}

interface Weather {
    name?: string;
    country?: string;
    weatherState?: string;
    description?: string;
    wind?: number;
    humidity?: number;
    temperature?: number;
    error?: boolean;
}

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children }: WeatherProviderProps) {

    const [place, setPlace] = useState("");
    const [weather, setWeather] = useState<Weather>({});
    const [weatherStateImg, setWeatherStateImg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    async function getWeather(place: string) {
        alert("Weather " + place);
    }

    async function getImage(name: string) {
        alert("Image " + name);
    }


    return (
        <WeatherContext.Provider 
            value={{
                place,
                setPlace,
                weather,
                weatherStateImg,
                isLoading,
                error,
                getWeather,
                getImage
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}