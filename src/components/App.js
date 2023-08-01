import '../styles/App.css';
import {Banner} from "./Banner";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import SideCart from "./SideCart";
import '../styles/Layout.css'
import logo from "../assets/logo.png";
import {useEffect, useState} from "react";

function App() {
    const savedCart = JSON.parse(sessionStorage.getItem('cart')) ?? [];
    console.log("SAVEDCART ", savedCart);
    const title = "la maison jungle", [cart, updateCart] = useState(savedCart);
    // Utilisation de useEffect pour enregistrer dans sessionStorage après mise à jour de l'état cart
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
    return (
        <>
            <Banner>
                <img src={logo} alt="LOGO JUNGLE" className='lmj-logo'/>
                <h1 className={'lmj-title'}>{title.toUpperCase()}</h1>
            </Banner>
            {/*<Cart/>*/}
            <div className='lmj-layout-inner'>
                <SideCart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
