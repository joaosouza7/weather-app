import { ReactNode } from 'react';

import './styles.css';

interface MainProps {
    children: ReactNode;
}

function Main({ children }: MainProps) {
    return (
        <main className='main'>
            {children}
        </main>
    );
}

export default Main;