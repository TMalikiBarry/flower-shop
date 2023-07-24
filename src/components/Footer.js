import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
    const [inputValue, setInputValue] = useState('')
    // useEffect(() => {
    //     console.log(`1️⃣ Cette alerte s'affiche à chaque rendu`)
    // })
    //
    // useEffect(() => {
    //     console.log(`2️⃣ Cette alerte s'affiche au premier rendu`)
    // }, [])
    //
    // useEffect(() => {
    //     console.log(
    //         `3️⃣ Cette alerte s'affiche la première fois et quand mon panier est mis à jour`
    //     )
    // }, [cart])
    //
    // useEffect(() => {
    //     return () =>
    //         console.log(`4️⃣ Cette alerte s'affiche quand Footer est retiré du DOM`)
    // }, [cart])
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