import notFound from '../../assets/not-found.svg';

import './styles.css';

function NotFound() {
    return (
        <div className='not-found'>
            <img src={notFound} alt="Erro 404" />
            <h2>Cidade não encontrada!</h2>
        </div>
    );
}

export default NotFound;