import { FiSearch } from 'react-icons/fi';
import { HiLocationMarker } from 'react-icons/hi';

import './styles.css';

function Input() {
    return (
        <>
            <div className="input-area">
                <div>
                    <span>
                        <HiLocationMarker size={20} />
                    </span>
                    <input type="text" className='input' placeholder='Entre com a localização...' />
                </div>

                <button type='button' className='button-search'>
                    <FiSearch size={20} />
                </button>
                
            </div>
        </>
    );
}

export default Input;