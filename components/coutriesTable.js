import style from './coutriesTable.module.css'
import Link from 'next/link'

const orderBy = (countries, description)=> {
       if(description === "asc"){ return countries.sort((a,b)=>(a.population > b.population ? 1 : -1));} 
       
       if(description === "desc"){ return countries.sort((a,b)=>(a.population > b.population ? -1 : 1));}

       return countries;
}

const CoutriesTable = ({countries}) => {
        const orderForPeopleNumber = orderBy(countries, "asc");

    return (
        <div>
        
        <div className={style.heading}>
            <div className={style.heading_flag}></div>
                <button className={style.heading_name}>
                    <div> Nome</div>
                    
                </button>
                <button className={style.heading_population}>
                    <div> População</div>
                </button>

                <button className={style.heading_area}>
                    <div> Área (Km <sup style={{fontSize:'0.5rem'}}>2</sup>)</div>
                </button>
                <button className={style.heading_gini}>
                    <div> Gini</div>
                </button>

            </div>
                {orderForPeopleNumber.map((country, index)=>(
                    <Link key={index} href={`/country/${country.alpha3Code}`}> 

                        <div className={style.row}>
                        <div className={style.flag}>
                            <img src={country.flag} alt={country.name}/>
                        </div>

                            <div className={style.name}>{country.name}</div>

                            <div className={style.population}>{country.population}</div>

                            <div className={style.area}>{country.area || 0}</div>

                            <div className={style.gini}>{country.gini || 0}%</div>
                        </div>
                        </Link> 
                       
            ))}
        </div>
    );
}

export default CoutriesTable;
