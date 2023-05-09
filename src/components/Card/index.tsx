import { ReactNode } from 'react';

import './styles.css';

interface CardProps {
    children: ReactNode;
}

function Card({ children }: CardProps) {
    return(
        <div className="bg-img">
            <div className="bg">
                {children}
            </div>
        </div>
    );
}

export default Card;