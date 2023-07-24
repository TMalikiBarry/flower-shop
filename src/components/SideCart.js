import {useEffect, useState} from 'react'
import '../styles/Cart.css'

function SideCart({cart, updateCart}) {
    const [isOpen, setIsOpen] = useState(true);
    const total = cart.reduce(
        (amount, current) => amount += current.price * current.number, 0
    )

    // alert(`J'aurai ${total}€ à payer 💸`);
    useEffect(() => {
        alert(`J'aurai ${total}€ à payer 💸`)
    }, [total])

    return isOpen ? (
        <div className='lmj-cart'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            { cart.length > 0 ?(
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({name, price, number}, index) =>
                        		<div key={`${name} - ${index}`}>
                                    {name}:  {price}€ x {number}
                                </div>
                        )}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>

                </div>
                ) : <div> Votre panier est vide</div>
            }
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button
                className='lmj-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default SideCart