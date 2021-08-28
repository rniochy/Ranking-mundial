import Layout from '../components/layout'
import SearchInput  from '../components/searchInput';
import CoutriesTable from '../components/coutriesTable'
import { useState } from 'react';
import style from '../styles/home.module.css'


export default function Home({countries}) {
        
        const [keyword, setkeyword] = useState("");
        
        const filterCoutries = countries.filter( (country)=>
                country.name.toLowerCase().includes(keyword)||
                country.region.toLowerCase().includes(keyword)||
                country.subregion.toLowerCase().includes(keyword)
        );
        const onInputChange = (e)=> {
                 e.preventDefault();

                 setkeyword(e.target.value.toLowerCase());
        }


        


  return ( 

        <Layout>
                <div className={style.inputContainer}>
                <div className={style.counts}> Encontrados {countries.length} países</div>
                
                <div className={style.input}>
                          <SearchInput placeholder="Filtra por nome região ou sub-região" onChange= {onInputChange}/>
                </div>
                </div>

                <CoutriesTable countries={filterCoutries}/>
        </Layout>
  );
}

export const getStaticProps = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const countries = await res.json();

        return {
           props: {
              countries
           }
        }
}