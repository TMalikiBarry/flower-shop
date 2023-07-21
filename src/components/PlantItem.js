import CareScale from "./CareScale";
import '../styles/PlantItem.css';

export function PlantItem(props) {
    const {name, cover, isSpecialOffer, light, water} = props.plant;
    return (
        <li className='lmj-plant-item'>
            {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
        /*<li className='lmj-plant-item'>
            {name}
            {isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
            <CareScale careType='light' scaleValue={light}/>
            <CareScale careType='water' scaleValue={water}/>
        </li>*/
    )
}