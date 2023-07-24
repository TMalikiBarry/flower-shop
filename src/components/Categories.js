import {plantList} from "../datas/plantList";
import '../styles/Categories.css'



export function Categories ({selectedCategory, changeCategory}) {
    const categoryList = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc: acc.concat(plant.category), []
    );
    function handleChange(event) {
        changeCategory(event.target.value)
    }
    return (
        <div className='lmj-categories'>
            <label htmlFor='choose-category'>Liste de catégories des plantes</label>
            <select name="categories" id="choose-category"
                    className='lmj-categories-select' value={selectedCategory}
                    onChange={(event) => handleChange(event)}>
                <option value="" style={{ fontStyle: "italic" }}>--Veuillez choisir une catégorie--</option>
                {categoryList.map( (cat, index) => <option key={`${cat} - ${index}`} value={cat}> {cat} </option>)}
            </select>
            <button onClick={() => changeCategory('')}>Réinitialiser</button>
        </div>
    )
}