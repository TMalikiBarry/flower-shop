import {PlantItem} from "./PlantItem";
import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
import {useState} from "react";
import {Categories} from "./Categories";
/*const simplePlantListLocal = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]*/

function ShoppingList ({cart, updateCart}) {
    const [selectedCategory, changeCategory] = useState('');

    /*    const categories = plantList.reduce(
            (acc, plant) =>
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        );*/

    const onePlantCategoryList = () => plantList.filter(
        plant => !selectedCategory? true : plant.category === selectedCategory
    )
	function existInCart (plantToCheck) {
        return cart.some(plant => plant.name === plantToCheck.name);
    }

    function removeFromCart(plantCible) {
        const cible = cart.find(plant => plant.name === plantCible.name);
        const cartFiltered = cart.filter(plant => plant.name !== cible.name);
        if (cible.number > 1) {
            updateCart([
                ...cartFiltered, {name: cible.name, price: cible.price, number: cible.number - 1}
            ])
        } else {
            updateCart([
                ...cartFiltered
            ])
        }
    }

    function updatePanier( name, price) {

        const plantToAdd = cart.find((plant) => {
            return plant.name === name
        });

        if (plantToAdd) {
            const cartFiltered = cart.filter(plant => plant.name !== name);
            updateCart([
                ...cartFiltered, {name, price: plantToAdd.price, number: plantToAdd.number +1}
            ])
        } else {
            updateCart([...cart, {name, price, number: 1}])
        }
    }

    return (
        <div className='lmj-shopping-list'>
           {/*<ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>*/}
            <Categories selectedCategory={selectedCategory} changeCategory={changeCategory}/>
            <ul className='lmj-plant-list'>
                {
                    onePlantCategoryList().map((plant, index) =>
                        <div key={`${plant.name} - ${plant.id} - ${index}`}>
                            <PlantItem plant={plant}/>

                            <div className={existInCart(plant)? "lmj-align-buttons" : "no-style"}>
                                <button onClick={() => updatePanier(plant.name, plant.price)}>Ajouter</button>
                                {existInCart(plant) && <button onClick={() => removeFromCart(plant)}>Retirer</button>}
                            </div>
                        </div>


                        /*<li key={`${plant.name} - ${plant.id} - ${index}`} className='lmj-plant-item'>
                            {plant.name}
                            {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                            <CareScale careType='light' scaleValue={plant.light}/>
                            <CareScale careType='water' scaleValue={plant.water}/>
                        </li>*/
                    )
                }
            </ul>
        </div>

    )
}

export default ShoppingList;