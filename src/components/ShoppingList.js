import {PlantItem} from "./PlantItem";
import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
/*const simplePlantListLocal = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]*/

// const onePlantCategoryList = (categorie) => plantList.filter(plant => plant.category === categorie)

function ShoppingList () {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    );
    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {
                    plantList.map((plant, index) =>
                            <PlantItem
                                key={`${plant.name} - ${plant.id} - ${index}`}
                                plant={plant}
                            />
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