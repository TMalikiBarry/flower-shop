import styles from '../styles/Cart.css';
import {plantList} from "../datas/plantList";

export function Cart() {
    const categoryList = plantList.reduce((categoryArray, plant) => {
            if (!categoryArray.includes(plant.category)) {
                categoryArray.push(plant.category);
            }
            return categoryArray;
        }, []);
    const monsteraPrice = 10, lierrePrice = 15,     fleurPrice = 20;
    return(
        <div className={styles.lmjCart}>
            <p>Liste des catégories de fleurs: {categoryList.map((value, index) => <span key={`${value} - ${index}`}>{value} </span>)}</p>

            <h3>Liste des Fleurs à vendre: </h3>
            <ul>
                <li>Monstera: {monsteraPrice} </li>
                <li>Lierre: {lierrePrice}</li>
                <li>Bouquets de fleur: {fleurPrice}</li>
            </ul>
            <p>Total des prix: {monsteraPrice + lierrePrice + fleurPrice}</p>
        </div>
    )
}