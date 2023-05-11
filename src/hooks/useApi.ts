import axios from 'axios';

interface GetImage {
    urlImg?: string;
    alt?: string;
    erro?: boolean;
}

interface GetWeather {
    name?: string;
    country?: string;
    weatherState?: string;
    description?: string;
    wind?: number;
    humidity?: number;
    temperature?: number;
    erro?: boolean;
}

type UseApi = () => {
    getImage: (name?: string) => Promise<GetImage>;
    getWeather: (place?: string) => Promise<GetWeather>;
};

const useApi: UseApi = () => ({
    getImage: async (name) => {
        if(!name) return { erro: true };

        try {
            const response = await axios.get(
                `https://api.unsplash.com/search/photos?page=1&orientation=portrait&client_id=${import.meta.env.VITE_API_KEY_UNSPLASH}&query=${name}`
            );

            if (response.data.total === 0) return { erro: true };

            // Gerar número aleatório
            const randomNumber = await Math.floor(
                Math.random() * (response.data.results.length + 1)
            );

            return {
                urlImg: response.data.results[randomNumber].urls.small,
                alt: response.data.results[randomNumber].alt_description
            };
            
        } catch (err) {
          return { erro: true };
        }
    },

    getWeather: async (place) => {
        if(!place) return { erro: true };

        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&lang=pt_br&appid=${import.meta.env.VITE_API_KEY_WEATHER}`
            );

            return {
                name: response.data?.name,
                country: response.data?.sys.country,
                weatherState: response.data?.weather[0].main,
                description: response.data?.weather[0].description,
                humidity: response.data?.main.humidity,
                wind: response.data?.wind.speed,
                temperature: parseInt(response.data?.main.temp),
            };
            
        } catch (err) {
            return { erro: true };
        }
    },
});

export default useApi;