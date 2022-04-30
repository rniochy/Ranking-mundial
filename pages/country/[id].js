import { useEffect, useState } from "react";
import Layout  from "../../components/layout";
import style from './country.module.css'



const getCountry = async(id) => {
    const res = await fetch(`${process.env.urlcountry}${id}`);
    
    const country = await res.json();

    return country;
};





const Country = ({country}) => {
      const [borders, setBorders] = useState([]);

  const getBorders = async () => {
    const border =  await
    Promise.all(country.borders.map((border)=> getCountry(border)));;
     
       setBorders(border);
  }; 

  useEffect(()=>{
    getBorders();


  },[]);

    return ( 
      
            <Layout title={country.name} >
              
                <div className={style.container}>
                    <div className={style.container_left}> 
                    <div className={style.overview_panel}>
                           <img src={country.flag} alt={country.name}/>

                          <h1 className={style.overview_name}>{country.name}</h1>
                          <div className={style.overview_region}>{country.region}</div>

                           <div className={style.over_view_numbers}>
                              <div className={style.over_view_population}>
                                  <div className={style.over_view_value}>{country.population}</div>
                                  <div className={style.over_view_label}>População</div>
                              </div>
                              <div className={style.over_view_area}>
                                  <div className={style.over_view_value}>{country.area}</div>
                                  <div className={style.over_view_label}>Área</div>
                              </div>       
                          </div> 
                     </div>

                    
                    </div>
                    <div className={style.container_right}> 
                    <div className={style.detail_panel}> 
                        <h1 className={style.datail_panel_heading}>Detalhe</h1>

                        <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Capital</div>
                            <div className={style.datail_value}>{country.capital}</div>
                        </div>

                        <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Sub-Região</div>
                            <div className={style.datail_value}>{country.subregion}</div>
                        </div>

                    <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Língua</div>
                            <div className={style.datail_value}>{
                            country.languages.map(({name})=> name).join(",")
                            
                            }</div>
                        </div>

                    <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Moedas</div>
                            <div className={style.datail_value}>{
                            country.currencies.map(({name})=> name).join(", ")
                            }</div>
                    </div>

                    <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Nome Nativo</div>
                            <div className={style.datail_value}>{country.nativeName}</div>
                    </div>

                    <div className={style.datail_panel_row}>
                            <div className={style.datail_panel_label}>Gini</div>
                            <div className={style.datail_value}>{country.gini}%</div>
                        </div>

                    

                    <div className={style.datail_panel_borders}>

                        <div className={style.datail_panel_label}>Países vizinhos</div>

                        <div className={style.datail_panel_borders_container}>
                        <div className={style.datail_panel_borders_country}>
                                    {borders.map(({name, flag})=> (

                                        <div  className={style.datail_panel_borders}>
                                                <img src={flag} alt={name}/>
                                                <div className={style.datail_panel_borders_name}>{name}
                                                </div>
                        </div> )) }
                      </div>
                     </div>
                    </div>
                   </div> 
                  </div>
                </div>                
            </Layout> 
            
            ); 
        }


export const getServerSideProps = async ({params}) => {
        const country =  await getCountry(params.id);

  return {
     props: {
        country
     }
  }
}
export default Country;
