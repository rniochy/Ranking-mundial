import SearchIcon from './searchIcon'
import style from './searchInput.module.css'


const SearchInput = ({...rest}) =>{
    return(
    <div className={style.wrapper}>
            <SearchIcon/>
            <input className={style.input} {...rest} />
    </div>
);

}

export default SearchInput;