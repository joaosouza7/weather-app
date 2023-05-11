import { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

import { WeatherContext } from '../../contexts/WeatherContext';

import './styles.css';

function Input() {

    const { isLoading, place, setPlace, handleGetWeather } = useContext(WeatherContext);

    return (
        <>
            <div className="input-area">
                <div>
                    <HiLocationMarker size={20} />
                    <input 
                        type="text" 
                        className='input' 
                        placeholder='Entre com a localização...' 
                        value={place} 
                        onChange={ (event) => setPlace(event.target.value) } 
                        onKeyUp={ (e) => {
                            if (e.key === 'Enter') handleGetWeather();
                        }}
                    />
                </div>

                <button 
                    type='button' 
                    className='button-search' 
                    onClick={handleGetWeather} 
                    disabled={isLoading}
                >
                    { isLoading ? <FaSpinner size={20} className="spinner" /> : <FiSearch size={20} /> }
                </button>
                
            </div>
        </>
    );
}

export default Input;