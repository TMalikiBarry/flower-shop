import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function handleClick (displayed_text) {
    alert(displayed_text);
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3];
    const myText = ['peu', 'modérement', 'beaucoup'];

    const displaysThis = 'Cette plante requiert ' + myText[scaleValue -1] +( careType === 'light' ? ' de lumière' : ' d\'arrosage');

    // const scaleType = careType === 'light' ? '☀️' : '💧';
    const scaleType = <img src={careType === 'light' ?  Sun: Water} alt={'LOGO-' + (careType === 'light' ?  'Sun': 'Water')}/>;

    return (
        <div onClick={() => handleClick(displaysThis)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale;