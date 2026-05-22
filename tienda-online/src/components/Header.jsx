import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Header(){
    return(
        <header style={{display:"flex", justifyContent:"space-between"}}>
            <div>placeholder logo</div> <div><input name="busqueda" type="search" placeholder="Buscar en el catálogo"/><input name="buscar" type="button" value="Buscar"/></div> <button><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></button>
        </header>
    )
}

export default Header