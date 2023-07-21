import '../styles/Banner.css';
export function Banner({children}) {
    const currentMonth = new Date().getMonth();
    console.log('MOIS COURANT', currentMonth);
    const isSpring = currentMonth <= 2 || currentMonth > 5;
    const recommandation  = (isSpring ?
        <div> C'est le printemps, rempotez ! 🌱 </div> : <div> Ce n'est pas le moment de rempoter !</div>)
    return (
        <div className='lmj-banner'>
            <div className="lmj-banner-row">
                {/*<img src={logo} alt="LOGO JUNGLE" className='lmj-logo'/>
                <h1 className={'lmj-title'}>{title.toUpperCase()}</h1>*/}
                {children}
            </div>


            {/*<p>Paragraph</p>*/}
            <br/>{recommandation}
        </div>
    );
}