import { useContext, ReactNode } from 'react';

import { WeatherContext } from '../../contexts/WeatherContext';

import './styles.css';

interface CardProps {
    children: ReactNode;
}

function Card({ children }: CardProps) {

    const { imgLocate } = useContext(WeatherContext);
    const imgUrl = imgLocate?.urlImg;

    return(
        <div className="bg-img" style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className="bg">
                {children}
            </div>
        </div>
    );
}

export default Card;