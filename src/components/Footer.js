import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
    const [inputValue, setInputValue] = useState('')
    function checkAndDisplayEmail() {
        return inputValue.includes('@') ? 'Votre mail bien reçu: ' + inputValue:' Votre mail pas valide, ne contient pas \'@\'';
    }
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail:  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onBlur={() => alert(checkAndDisplayEmail())}
                />
            </div>
        </footer>
    )
}

export default Footer