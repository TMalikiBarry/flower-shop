import '../styles/App.css';
import {Banner} from "./Banner";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import SideCart from "./SideCart";
import '../styles/Layout.css'
import logo from "../assets/logo.png";

function App() {
    const title = "la maison jungle";

    return (
        <>
            <Banner>
                <img src={logo} alt="LOGO JUNGLE" className='lmj-logo'/>
                <h1 className={'lmj-title'}>{title.toUpperCase()}</h1>
            </Banner>
            {/*<Cart/>*/}
            <div className='lmj-layout-inner'>
                <SideCart/>
                <ShoppingList/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
